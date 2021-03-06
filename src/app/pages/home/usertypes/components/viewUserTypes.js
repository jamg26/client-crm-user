import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
  getUserTypeList,
  addUserType,
  updateUserType,
  deleteUserType
} from '../../../../services/userType.service';
import { getBusiness } from '../../../../services/business.service';
import { Table } from 'antd';
import { Button } from '@material-ui/core';
// import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TableModal from '../../Modal';
import UserTypesInput from './UserTypesInput';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const notify = data => {
  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
};

const ViewUserType = props => {
  const [state, setState] = useState({});
  const [reRender, setRerender] = useState(false); // Re render table after updating

  const initialInput = {
    id: '',
    name: '',
    businessUserRoleName: '',
    active: true
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);

  const getBusinessId = async () => {
    const business = await getBusiness();
    const { id } = business.data;
    return id;
  };

  useEffect(() => {
    setState({});
    const getData = async () => {
      const id = await getBusinessId();
      const usertypes = await getUserTypeList(id);
      setState({
        columns: [
          {
            title: 'Action',
            field: 'actions',
            width: 200,
            render: rowData => {
              return (
                <Row>
                  {/* <Col>
                    <Button
                      variant='contained'
                      color='secondary'
                      size='small'
                      title={rowData.id}
                      onClick={() => {
                        setInput(rowData);
                        setIsUpdate(true);
                        setIsModalOpen(true);
                      }}
                    >
                      <EditIcon />
                    </Button>
                  </Col> */}
                  {rowData.canBeDeleted ? (
                    <Col>
                      <Button
                        variant='contained'
                        size='small'
                        onClick={() => {
                          deleteType(rowData.id);
                        }}
                      >
                        <DeleteIcon />
                      </Button>
                    </Col>
                  ) : null}
                </Row>
              );
            }
          },
          {
            title: 'Name',
            field: 'businessUserRoleName',
            render: role => role.businessUserRoleName
          },
          { title: 'Include Users', render: data => usertypes.data.length },
          {
            title: 'Active',
            field: 'active',
            render: active => (active.active ? 'true' : 'false')
          }
        ],
        data: usertypes.data
      });
    };
    getData();
  }, [reRender]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const handleChangeUserType = e => {
    setInput({
      ...input,
      userType: e.target.value
    });
  };

  const handleChangeActive = e => {
    setInput({
      ...input,
      active: !input.active
    });
  };

  const handleSubmitTypes = async e => {
    e.preventDefault();
    const newInput = { ...input, businessId: props.businessId };
    if (isUpdate) {
      try {
        await updateUserType(newInput);
        notify({ success: true, message: 'Success updating user type.' });
      } catch (error) {}
    }
    if (!isUpdate) {
      try {
        await addUserType(newInput);
        notify({ success: true, message: 'Success adding user types.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  const refreshTable = () => setRerender(!reRender);

  const deleteType = async id => {
    await deleteUserType(id);
    setRerender(!reRender);
  };

  return (
    <>
      <TableModal
        type='usertypes'
        title='User Types'
        open={isModalOpen}
        handleClose={closeModal}
      >
        <UserTypesInput
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitTypes}
          handleChangeUserType={handleChangeUserType}
          handleChangeActive={handleChangeActive}
        />
      </TableModal>
      <Table
        columns={state.columns}
        dataSource={state.data}
        title={() => (
          <>
            <Button
              className='mb-2'
              variant='contained'
              color='secondary'
              size='large'
              onClick={() => {
                setIsModalOpen(true);
                setIsUpdate(false);
                setInput(initialInput);
              }}
            >
              Add
            </Button>
            <Button className='float-right' onClick={refreshTable}>
              Refresh
            </Button>
          </>
        )}
        bordered
        size='small'
        showHeader
        loading={!state.data ? true : false}
      />
    </>
  );
};

const mapStateToProps = state => {
  return {
    businessId: state.auth.user.mainRole.business.id
  };
};

export default connect(mapStateToProps)(ViewUserType);
