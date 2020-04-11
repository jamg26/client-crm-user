import React, { useState, useEffect } from 'react';
// import MaterialTable from 'material-table';
import * as moment from 'moment';
import {
  getOpenSupportTicket,
  saveNewTicketSupport
} from '../../../../../services/support.service';
import { Table } from 'antd';
import { EditOutlined } from '@ant-design/icons';

// import { Button, CircularProgress } from '@material-ui/core';
import TableModal from '../../../Modal';
// import { Row, Col } from 'react-bootstrap';
import TicketInput from './TicketInput';

const TicketsAllComponent = props => {
  const [state, setState] = useState(0);
  const propsData = props.props;

  const initialInput = {
    id: '',
    subject: '',
    description: ''
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating

  useEffect(() => {
    setState(0);
    const fetchData = async () => {
      const response = await getOpenSupportTicket();
      setState({
        columns: [
          {
            title: 'Action',
            render: rowData => (
              <a onClick={() => editTicketSupport(rowData)}>
                <EditOutlined twoToneColor='#1a88d9' />
              </a>
            )
          },
          { title: 'Status', dataIndex: 'status' },
          { title: 'Ticket#', dataIndex: 'ticketNumber' },
          { title: 'Subject', dataIndex: 'subject' },
          {
            title: 'Requested On',
            dataIndex: 'dateCreated',
            render: rowData => `${moment(rowData).format('LLL')}`
          }
        ],
        data: response.data.reverse()
      });
    };
    fetchData();
  }, [reRender]);

  const editTicketSupport = data => {
    propsData.history.push({
      pathname: `supports/${data.id}`,
      data: data
    });
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmitTicket = async e => {
    e.preventDefault();
    const newInput = {
      ...input,
      businessId: 'R2PPfBhpaLA.'
    };

    // if (isUpdate) {
    //   try {
    //     //await addContacts(input);
    //     //notify({ success: true, message: 'Success updating master Contact.' });
    //   } catch (error) {}
    // }
    // if (!isUpdate) {
    //   try {
    //     //await updateContact(input);
    //     await saveNewTicketSupport(newInput);
    //     //notify({ success: true, message: 'Success adding master Contact.' });
    //   } catch (error) {}
    // }
    await saveNewTicketSupport(newInput);
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  // const refreshTable = () => {
  //   setRerender(!reRender);
  // };

  return (
    <>
      <TableModal type='ticket' title='Support Ticket' open={isModalOpen} handleClose={closeModal}>
        <TicketInput data={input} handleChange={handleChange} handleSubmit={handleSubmitTicket} />
      </TableModal>

      <Table
        columns={state.columns}
        dataSource={state.data}
        title={() => ''}
        // title={() => <Button onClick={refreshTable}>Refresh</Button>}
        bordered
        size='small'
        showHeader
        loading={!state.data ? true : false}
      />
    </>
  );
};

export default TicketsAllComponent;
