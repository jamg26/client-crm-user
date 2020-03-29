import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { 
  getAccountList,
  registerAccount,
  updateAccount,
  deleteAccount } from '../../../../services/account.service';
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
    userTypeId: '',
    businessName: '',
    userTypeName: '',
    email: '',
    firstName: '',
    lastName: '',
  };

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
  const [reRender, setRerender] = useState(false); // Re render table after updating

  useEffect(() => {
    const fetchData = async () => {
    const response = await getAccountList();
      setState({
        columns: [
          { title: 'First Name', field: 'profile' },
          { title: 'Last Name', field: 'accountName' },
          { title: 'Email', field: 'phone' },
          { title: 'Invited As', field: 'website'},
          { title: 'Status', field: 'addressLine'},
          { title: 'Action',
            field: 'actions',
            width: 300,
            render: data => {

              let btnRjectDisable = false;
              let btnAcceptDisable = false;

              if (data.accountName==='ww') {
                btnRjectDisable = true
                btnAcceptDisable = true
                debugger;
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
                      onClick={() => delAccount(data.id)}
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
    setInput({
      id: data.id,
      profile: data.profile,
      accountName: data.accountName,
      phone: data.phone,
      website: data.website,
      addressLine: data.addressLine,
      country: data.country,
      state: data.state,
      city: data.city,
      zipCode: data.zipCode,
      industryName: data.industryName,
      parentName: data.parentName,
      accountType: data.accountType,
      description:data.description
    });
    setIsModalOpen(true);
    setRerender(!reRender);
  };

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmitBusiness = async e => {
    debugger;
    e.preventDefault();
    input.businessId = userData.mainRole.business.id;
    if (actionType === 'invite') {
      // try {
      //   await updateAccount(input);
      //   notify({ success: true, message: 'Success updating account.' });
      // } catch (error) {}
    }
    if (actionType === 'accept') {
        debugger;
    }
    // if (!isUpdate) {
    //   try {
    //     await registerAccount(input);
    //     notify({ success: true, message: 'Success adding account.' });
    //   } catch (error) {}
    // }
    setIsModalOpen(false);
    setIsModalStatusOpen(false);
    setRerender(!reRender);
  };

  const delAccount = async id => {
    await deleteAccount(id);
    setRerender(!reRender);
  };

  return (
    <Container>
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
          data={input}
          handleSubmit={handleSubmitBusiness}
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
        }}
      >
        Add
      </Button>
      <MaterialTable
        title='Invite User'
        columns={state.columns}
        data={state.data}
      />
    </Container>
  );
}

export default ViewComponent;