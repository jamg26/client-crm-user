import React, { useState, useEffect } from 'react';
import {
  getLeadStatus,
  addLeadStatus,
  updateLeadStatus,
  deleteLeadStatus,
} from '../../../../services/leadStatus.service';
import { Table } from 'antd';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Row, Col } from 'react-bootstrap';
import LeadStatusInput from './LeadStatusInput';
import { Button } from '@material-ui/core';
import Modal from '../../../shared/Modal';
import { connect } from 'react-redux';

const ViewLeadStatus = (props) => {
  const [state, setState] = useState([]);
  const initialInput = {
    id: '',
    leadStatusName: '',
    active: true,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating
  useEffect(() => {
    const getLeadSource = async () => {
      const list = await getLeadStatus(props.businessId);
      setState({
        columns: [
          {
            title: 'Action',
            field: 'actions',
            width: 200,
            render: (rowData) => {
              return (
                <Row>
                  <Col>
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
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      size='small'
                      onClick={async () => {
                        await deleteLeadStatus(rowData.id);
                        setRerender(!reRender);
                      }}
                    >
                      <DeleteIcon />
                    </Button>
                  </Col>
                </Row>
              );
            },
          },
          { title: 'Lead Status Name', dataIndex: 'leadStatusName' },
          {
            title: 'Is Active?',
            render: (row) => (row.active ? 'true' : 'false'),
          },
          {
            title: 'Assigned',
            render: (row) => `${list.data.length}`,
          },
        ],
        data: list.data,
      });
    };
    getLeadSource();
  }, [reRender]);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const handleChangeActive = (e) => {
    setInput({
      ...input,
      active: !input.active,
    });
  };

  const handleSubmitStatus = async (e) => {
    e.preventDefault();
    const newInput = { ...input, businessId: props.businessId };
    if (isUpdate) {
      try {
        const lead = await updateLeadStatus(newInput);
        //const usertype = await updateUserType(newInput);
        //notify({ success: true, message: 'Success updating user type.' });
      } catch (error) {}
    }
    if (!isUpdate) {
      try {
        const lead = await addLeadStatus(newInput);
        //const usertype = await addUserType(newInput);
        //notify({ success: true, message: 'Success adding user types.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  return (
    <>
      <Modal
        type='leadsource'
        title='Lead Source'
        open={isModalOpen}
        handleClose={closeModal}
      >
        <LeadStatusInput
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitStatus}
          handleChangeActive={handleChangeActive}
        />
      </Modal>
      <Table
        columns={state.columns}
        dataSource={state.data}
        rowKey={(row) => row.id}
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
              }}
            >
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

const mapStateToProps = (state) => {
  return {
    businessId: state.auth.user.mainRole.business.id,
  };
};

export default connect(mapStateToProps)(ViewLeadStatus);
