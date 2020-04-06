import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { 
  getUserInviteList,
  addInviteUser,
  acceptInviteUser,
  rejectInviteUser,
  resendInviteUser,
  deleteInviteUser } from '../../../../services/userInvite.service';
import TableModal from '../../../shared/Modal';
import { Button } from '@material-ui/core';
import InputContainer from './InputContainer';
import InputStatusContainer from './InputStatusContainer';
import { Row, Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const ViewComponent = () => {

  const userData = useSelector(state => state.auth.user);
  
  const initialInput = {
    userInviteId: '',
    businessId: userData.mainRole.business.id,
    businessUserRoleId: '',
    email: '',
    firstName: '',
    lastName: '',
  };

  const defaultValidation = {
    'error': false,
    'errorMessage': ''
  }

  const notify = data => {
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  }

  const [state, setState] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalStatusOpen, setIsModalStatusOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [actionType, setActionType] = useState('');
  const [input, setInput] = useState(initialInput);
  const [inputStatus, setInputStatus] = useState(0);
  const [statusType,setStatusType] = useState('');
  const [formValiation, setFormValidation]=useState(defaultValidation);
  const [reRender, setRerender] = useState(false); // Re render table after updating

  const clearValidation = () => {
    setFormValidation(defaultValidation);
  }



  useEffect(() => {
    const fetchData = async () => {
    const response = await getUserInviteList(userData.mainRole.business.id);
      setState({
        columns: [
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Email', field: 'email' },
          { title: 'Invited As', field: 'businessUserRoleName'},
          { title: 'Status', field: 'status'},
          { title: 'Action',
            field: 'actions',
            width: 400,
            render: data => {

              let btnRjectDisable = false;
              let btnAcceptDisable = false;

              if (data.status!=='Pending') {
                btnRjectDisable = true
                btnAcceptDisable = true

              }
              return (
                <Row>
                  <Col>
                    <Button
                      variant='contained'
                      color='secondary'
                      title={data.id}
                      disabled={btnAcceptDisable}
                      onClick={() => {
                        upInviteUserStatus(data);
                        setStatusType('Accept')
                        setActionType('accept');

                      }}
                    >
                      ACCEPT
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      color='inherit'
                      disabled={btnRjectDisable}
                      title={data.id}
                      onClick={() => {
                        upInviteUserStatus(data);
                        setStatusType('Reject');
                        setActionType('reject');
                      }}
                    >
                      REJECT
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      color='primary'
                      title={data.id}
                      disabled={btnAcceptDisable}
                      onClick={() => {
                        setInput(data);
                        setIsModalOpen(true);
                        setActionType('resend');
                        clearValidation();

                      }}
                    >
                      RESEND
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      onClick={() => {
                        delInviteUser(data.userInviteId)
                      }}
                    >
                      DELETE
                    </Button>
                  </Col>
                </Row>
              );
            }
          }
        ],
        data : response.data
      });
    }
    fetchData();
  }, [reRender]);

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const closeStatusModal = () => {
    setIsModalStatusOpen(false);
  };

  const upInviteUserStatus = data => {
    clearValidation();
    setInputStatus({
      userInviteId: data.userInviteId,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
      confirmPassword: data.confirmPassword
    });
    setIsModalStatusOpen(true);
    setRerender(!reRender);
  };

  const upAccount = data => {
    clearValidation();
    setInput({
      userInviteId: data.userInviteId,
      businessId: userData.mainRole.business.id,
      businessUserRoleId: data.businessUserRoleId,
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    });
    setIsModalOpen(true);
    setRerender(!reRender);
  };

  const handleChange = e => {
    if (actionType === 'accept' || actionType === 'reject') {
      setInputStatus({
        ...inputStatus,
        [e.target.id]: e.target.value
      });

    } else {
        if (actionType !== 'resend') {
          setInput({
            ...input,
            [e.target.id]: e.target.value
          });
        }
    }
      
  };

  const handleSelectUserType = userType => {
    if (actionType !== 'resend') {
      clearValidation();
       setInput({
          ...input,
          ['businessUserRoleId']: userType.businessUserRoleId,
        });
    }
      
  };

  const handleSubmitBusiness = async e => {
    e.preventDefault();
    input.businessId = userData.mainRole.business.id;
    clearValidation();
    let isError = false;
    if (actionType === 'invite') {
      if (input.businessUserRoleId === '') {
          setFormValidation({
              invitedAs: {
                'error': true,
                'errorMessage': 'Please selected invated as.'
              },
              btnDisbale: false
          });
          isError = true;
      } else if (input.email === '') {
          setFormValidation({
              email: {
                'error': true,
                'errorMessage': 'Please enter email address'
              }
          });
          isError = true;
      }else {
          try {
            await addInviteUser(input);
            notify({ success: true, message: 'Success inviting user.' });
          } catch (error) {}
      }
      
    }
    if (actionType === 'accept') {
      
        if (inputStatus.password !== inputStatus.confirmPassword) {
          setFormValidation({
              confirmPassword: {
                'error': true,
                'errorMessage': 'Confirm password did not match.'
              }

          });
          isError = true;
        } else if (inputStatus.password.length < 8) {
          setFormValidation({
              password: {
                'error': true,
                'errorMessage': 'Password should contain atleast 8 characters.'
              }
          });
          isError = true;
        } else {
          try {
              await acceptInviteUser(inputStatus);
              notify({ success: true, message: 'User was successfully accpeted.' });
              
            } catch (error) {}
        }
    }

    if (actionType === 'resend') {
      try {
          await resendInviteUser(input);
          notify({ success: true, message: 'Resend invitation successful.' });
          
        } catch (error) {}
    }

    if (actionType === 'reject') {
      try {
          await rejectInviteUser(inputStatus);
          notify({ success: true, message: 'User was successfully rejected.' });
          
        } catch (error) {}
    }

    if (!isError) {
      setIsModalOpen(false);
      setIsModalStatusOpen(false);
      setRerender(!reRender);
    }
    
  };

  const delInviteUser = async id => {
    await deleteInviteUser(id);
    setRerender(!reRender);
    notify({ success: true, message: 'Success deleting request invitation.' });
  };

  return (
    <>
      <ToastContainer />
      <TableModal
        type='InviteUser'
        title='Invite User'
        open={isModalOpen}
        handleClose={closeModal}
      >
        <InputContainer
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitBusiness}
          handleSelectUserType={handleSelectUserType}
          formValidation={formValiation}
          businessUserRoleId={input.businessUserRoleId}
          formActionType={actionType}
        />

      </TableModal>

      <TableModal
        type={statusType}
        title={`${statusType} Invitation`}
        open={isModalStatusOpen}
        handleClose={closeStatusModal}
        handleSubmit={handleSubmitBusiness}
      >
        <InputStatusContainer
          data={inputStatus}
          handleChange={handleChange}
          handleSubmit={handleSubmitBusiness}
          formValidation={formValiation}
          formActionType={actionType}
        />
        
      </TableModal>

      <Button
        className='mb-2'
        variant='contained'
        color='primary'
        size='large'
        onClick={() => {
          setIsModalOpen(true);
          setActionType('invite')
          setInput(initialInput);
          clearValidation();
        }}
      >
        Add
      </Button>
      <MaterialTable
        title='Invite User'
        columns={state.columns}
        data={state.data}
      />
    </>
  );
}

export default ViewComponent;