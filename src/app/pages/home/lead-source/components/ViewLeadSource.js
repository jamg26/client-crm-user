import React, { useState, useEffect } from 'react';
import {
  getLeadSourceList,
  addLeadSource,
  updateLeadSource,
  deleteLeadSource,
  assignLeadSource,
  getLeadSourceUsers
} from '../../../../services/leadSource.service';
// import { getBusinessUsers } from '../../../../services/business.service';
import { Table, Checkbox } from 'antd';
import { Button } from '@material-ui/core';
import Modal from '../../../shared/Modal';
import LeadSourceInput from './LeadSourceInput';
import { connect } from 'react-redux';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Row, Col } from 'react-bootstrap';

const ViewLeadSource = props => {
  const [state, setState] = useState([]);
  const initialInput = {
    id: '',
    leadSourceName: '',
    active: true
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAssignOpen, setIsModalAssignOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating
  const [businessUsers, setBusinessUsers] = useState([]);
  const [assignedUsers, setAssignedUsers] = useState({});
  const [assignLeadId, setAssignedLeadId] = useState('');

  useEffect(() => {
    const getLeadSource = async () => {
      // const businessUsers = await getBusinessUsers(props.businessId);
      // setBusinessUsers(businessUsers.data);
      const list = await getLeadSourceList(props.businessId);
      //console.log(list);
      let newList = [];
      list.data.reverse().map(data => {
        if (data.isDeleted) return;
        return newList.push(data);
      });
      setState({
        columns: [
          {
            title: 'Action',
            field: 'actions',
            width: 300,
            render: rowData => {
              return (
                <Row>
                  <Col md={4}>
                    <Button
                      variant='contained'
                      color='secondary'
                      size='small'
                      title={rowData.id}
                      onClick={() => {
                        setInput(rowData);
                        setIsUpdate(true);
                        setIsModalOpen(true);
                      }}>
                      <EditIcon />
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      variant='contained'
                      size='small'
                      className='btn-danger'
                      onClick={async () => {
                        await deleteLeadSource(rowData.id);
                        setRerender(!reRender);
                      }}>
                      <DeleteIcon />
                    </Button>
                  </Col>
                  <Col md={4}>
                    <Button
                      variant='contained'
                      size='small'
                      color='primary'
                      onClick={async () => {
                        // const users = await getLeadSourceUsers(rowData.id);
                        // console.log(users);
                        // setBusinessUsers(users.data);

                        // let user = {};

                        // users.data.map(u => {
                        //   if (!u.isAssign) return;
                        //   return (user = {
                        //     ...user,
                        //     [u.id]: true
                        //   });
                        // });

                        // setAssignedUsers(user);
                        // console.log(user);

                        setIsModalAssignOpen(true);
                        setAssignedLeadId(rowData.id);
                        setRerender(!reRender);
                      }}>
                      Assign
                    </Button>
                  </Col>
                </Row>
              );
            }
          },
          { title: 'Source Name', dataIndex: 'leadSourceName' },
          {
            title: 'Is Active?',
            render: row => (row.active ? 'true' : 'false')
          },
          {
            title: 'Assigned',
            render: row => `${row.assignedUser}`
          }
        ],
        data: newList
      });
    };
    getLeadSource();
  }, [reRender]);

  const closeModal = () => {
    setIsModalOpen(false);
    setIsModalAssignOpen(false);
  };

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const handleChangeActive = e => {
    setInput({
      ...input,
      active: !input.active
    });
  };

  const handleSubmitSource = async e => {
    e.preventDefault();
    const newInput = { ...input, businessId: props.businessId };
    if (isUpdate) {
      try {
        await updateLeadSource(newInput);
        //console.log(lead);
        //const usertype = await updateUserType(newInput);
        //notify({ success: true, message: 'Success updating user type.' });
      } catch (error) {}
    }
    if (!isUpdate) {
      try {
        await addLeadSource(newInput);
        //console.log(lead);
        //const usertype = await addUserType(newInput);
        //notify({ success: true, message: 'Success adding user types.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  const onChange = e => {
    // console.log(assignedUsers);
    // console.log(e.target.name);
    // console.log(assignedUsers);
    if (!e.target.checked) {
      delete assignedUsers[e.target.name];
    } else {
      setAssignedUsers({
        ...assignedUsers,
        [e.target.name]: e.target.checked
      });
    }
    // console.log(assignedUsers);
  };

  const onAssignSubmit = async e => {
    let users = [];

    console.log(assignedUsers);

    Object.keys(assignedUsers).map(u => {
      if (!assignedUsers[u]) return;
      users.push({ leadSourceId: assignLeadId, userId: u });
    });

    console.log(users);

    const lead = await assignLeadSource(users);
    console.log(lead);

    setRerender(!reRender);
    setIsModalAssignOpen(false);
  };

  return (
    <>
      <Modal type='leadsource' title='Lead Source' open={isModalOpen} handleClose={closeModal}>
        <LeadSourceInput
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitSource}
          handleChangeActive={handleChangeActive}
        />
      </Modal>
      <Modal type='assign' title='Assign' open={isModalAssignOpen} handleClose={closeModal}>
        {/* {businessUsers?.map((users, index) => {
          return (
            <div key={index}>
              <Checkbox
                name={users.id}
                onChange={onChange}
                defaultChecked={users.isAssign}
              >
                {users.firstName} {users.lastName}
              </Checkbox>
              <br />
            </div>
          );
        })} */}
        <Checkbox name='User 1'>User One</Checkbox>
        <br />
        <Checkbox name='User 1'>User Two</Checkbox>
        <br />
        <Checkbox name='User 1'>User Three</Checkbox>
        <br />
        <br />
        <Button variant='contained' color='secondary' onClick={onAssignSubmit}>
          Confirm
        </Button>
      </Modal>
      <Table
        columns={state.columns}
        dataSource={state.data}
        rowKey={row => row.id}
        title={() => (
          <>
            <Button
              className='mb-2'
              variant='contained'
              color='secondary'
              size='large'
              onClick={() => {
                setIsModalOpen(true);
                // setIsUpdate(false);
                // setInput(initialInput);
              }}>
              Add
            </Button>
            {/* <Button className='float-right' onClick={refreshTable}>
            Refresh
          </Button> */}
          </>
        )}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    businessId: state.auth.user.mainRole.business.id,
    userId: state.auth.user.id
  };
};

export default connect(mapStateToProps)(ViewLeadSource);
