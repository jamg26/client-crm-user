import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AccountDropdown from '../../../../partials/shared/AccountDropdown';
import {
  getContactList,
  addContacts,
  updateContact,
  deleteContact
} from '../../../../services/contact.service';
import { getAccountList } from '../../../../services/account.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Button, CircularProgress } from '@material-ui/core';
import TableModal from '../../Modal';
import { Row, Col } from 'react-bootstrap';
import ContactsInput from './ContactsInput';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const notify = data => {
  if (data.success) {
    toast.success(data.message);
  } else {
    toast.error(data.message);
  }
};

var selectedAccount = {};
const ViewComponent = () => {
  const [state, setState] = useState(0);
  const [account, setAccount] = useState(0);

  const initialInput = {
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    description: '',
    dateOfBirth: '',
    phone: '',
    accountId: '',
    street: ''
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating

  const handleSelectAccount = account => {
    setInput({
      ...input,
      ['accountId']: account
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getContactList();
      const accountList = await getAccountList();
      setAccount(accountList);
      setState({
        columns: [
          { title: 'Profile', field: 'profile' },
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Email', field: 'email' },
          { title: 'Phone', field: 'phone' },
          {
            title: 'Account Name',
            field: 'account.accountName',
            editComponent: props => (
              <AccountDropdown
                data={accountList}
                onSelecAccount={handleSelectAccount}
                currentAccount={props.rowData}
                readOnly={true}
              />
            )
          },
          {
            title: 'Action',
            field: 'actions',
            width: 200,
            render: data => {
              return (
                <Row>
                  <Col>
                    <Button
                      variant='contained'
                      color='secondary'
                      title={data.id}
                      onClick={() => {
                        upContact(data);
                        setIsUpdate(true);
                      }}
                    >
                      <EditIcon />
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      onClick={() => delContact(data.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Col>
                </Row>
              );
            }
          }
        ],
        data: response.data
      });
    };
    fetchData();
  }, [reRender]);

  const upContact = data => {
    setInput({
      id: data.id,
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      country: data.country,
      state: data.state,
      city: data.city,
      zipCode: data.zipCode,
      description: data.description,
      dateOfBirth: data.dateOfBirth,
      phone: data.phone,
      accountId: data.accountId,
      street: data.street
    });
    setIsModalOpen(true);
    setRerender(!reRender);
  };

  const delContact = async id => {
    await deleteContact(id);
    setRerender(!reRender);
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

  const handleSubmitContact = async e => {
    e.preventDefault();
    if (isUpdate) {
      try {
        await updateContact(input);
        notify({ success: true, message: 'Success updating master Contact.' });
      } catch (error) {}
    }
    if (!isUpdate) {
      try {
        await addContacts(input);
        notify({ success: true, message: 'Success adding master Contact.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  return (
    <>
      <ToastContainer />
      <TableModal
        type='contacts'
        title='Contacts'
        open={isModalOpen}
        handleClose={closeModal}
      >
        <ContactsInput
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitContact}
          handleSelectAccount={handleSelectAccount}
        />
      </TableModal>

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
      <MaterialTable
        title='Contacts'
        columns={state.columns}
        data={state.data}
      />
    </>
  );
};

export default ViewComponent;
