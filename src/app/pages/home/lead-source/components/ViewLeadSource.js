import React, { useState, useEffect } from 'react';
import {
  getLeadSourceList,
  addLeadSource,
  updateLeadSource,
  deleteLeadSource,
} from '../../../../services/leadSource.service';
import { Table } from 'antd';
import { Button } from '@material-ui/core';
import Modal from '../../../shared/Modal';
import LeadSourceInput from './LeadSourceInput';
import { connect } from 'react-redux';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Row, Col } from 'react-bootstrap';

const ViewLeadSource = (props) => {
  const [state, setState] = useState([]);
  const initialInput = {
    id: '',
    leadSourceName: '',
    active: true,
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating

  useEffect(() => {
    const getLeadSource = async () => {
      const list = await getLeadSourceList(props.businessId);
      let newList = [];
      list.data.reverse().map((data) => {
        if (data.isDeleted) return;
        newList.push(data);
      });
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
                        await deleteLeadSource(rowData.id);
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
          { title: 'Source Name', dataIndex: 'leadSourceName' },
          {
            title: 'Is Active?',
            render: (row) => (row.active ? 'true' : 'false'),
          },
          {
            title: 'Assigned',
            render: (row) => `${list.data.length}`,
          },
        ],
        data: newList,
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

  const handleSubmitSource = async (e) => {
    e.preventDefault();
    const newInput = { ...input, businessId: props.businessId };
    if (isUpdate) {
      try {
        const lead = await updateLeadSource(newInput);
        console.log(lead);
        //const usertype = await updateUserType(newInput);
        //notify({ success: true, message: 'Success updating user type.' });
      } catch (error) {}
    }
    if (!isUpdate) {
      try {
        await addLeadSource(newInput);
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
        <LeadSourceInput
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitSource}
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
    businessId: state.auth.user.mainRole.id,
    userId: state.auth.user.id,
  };
};

export default connect(mapStateToProps)(ViewLeadSource);
