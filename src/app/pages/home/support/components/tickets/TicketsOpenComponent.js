import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import * as moment from 'moment';
import {
  getOpenSupportTicket,
  saveNewTicketSupport
} from '../../../../../services/support.service';

import { Button, CircularProgress } from '@material-ui/core';
import TableModal from '../../../Modal';
import { Row, Col } from 'react-bootstrap';
import TicketInput from './TicketInput';

const TicketsAllComponent = props => {
  const [state, setState] = useState(0);
  const propsData = props.props;

  const initialInput = {
    id: '',
    subject: '',
    description: '',
    supportTicketAttachment: ''
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating

  useEffect(() => {
    const fetchData = async () => {
      const response = await getOpenSupportTicket();
      setState({
        columns: [
          { title: 'Status', field: 'status' },
          { title: 'Ticket#', field: 'supportTicketKey' },
          { title: 'Subject', field: 'subject' },
          // {
          //   title: 'Name',
          //   field: 'user',
          //   render: rowData =>
          //     `${rowData.user.firstName} ${rowData.user.lastName}`
          // },
          // {
          //   title: 'Email',
          //   field: 'email',
          //   render: rowData => `${rowData.user.email}`
          // },
          // {
          //   title: 'Phone',
          //   field: 'phone',
          //   render: rowData => `${rowData.user.phoneNumber}`
          // },
          {
            title: 'Requested On',
            field: 'dateCreated',
            render: rowData => `${moment(rowData.dateCreated).format('LLL')}`
          }
        ],
        data: response.data
      });
    };
    fetchData();
  }, []);

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
    console.log(newInput);
    if (isUpdate) {
      try {
        //await addContacts(input);
        //notify({ success: true, message: 'Success updating master Contact.' });
      } catch (error) {}
    }
    if (!isUpdate) {
      try {
        //await updateContact(input);
        saveNewTicketSupport(newInput);
        //notify({ success: true, message: 'Success adding master Contact.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };
  return (
    <>
      <TableModal
        type='ticket'
        title='Support Ticket'
        open={isModalOpen}
        handleClose={closeModal}
      >
        <TicketInput
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitTicket}
        />
      </TableModal>

      <Button
        className='mb-2'
        variant='contained'
        color='primary'
        size='large'
        onClick={() => {
          setIsModalOpen(true);
          setIsUpdate(false);
          setInput(initialInput);
        }}
      >
        Add support ticket
      </Button>
      <MaterialTable
        title='All Ticket'
        columns={state.columns}
        data={state.data}
        onRowClick={(event, rowData) => editTicketSupport(rowData)}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              // saveBusiness(newData)
              //   .then((result) => {
              //     resolve();
              //     setState(prevState => {
              //       const data = [...prevState.data];
              //       data.push(newData);
              //       return { ...prevState, data };
              //     });
              //   })
            })
        }}
      />
    </>
  );
};

export default TicketsAllComponent;
