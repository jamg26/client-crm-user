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

import { Button, CircularProgress } from '@material-ui/core';
import TableModal from '../../Modal';
import { Row, Col } from 'react-bootstrap';
import ContactsInput from './ContactsInput';

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
    accountId: 'JR1zcprJkUs.',
    street: ''
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating

  const handleSelectAccount = account => {
    setAccount({ accountId: account.accountId });
    selectedAccount = account;
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
                      UPDATE
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      onClick={() => delContact(data.id)}
                    >
                      DELETE
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
  }, []);

  const upContact = data => {
    setInput(data);
    setIsModalOpen(true);
    setRerender(!reRender);
  };

  const delContact = async id => {
    console.log('deleting', id);
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
    console.log(input);
    if (isUpdate) {
      try {
        await addContacts(input);
        //notify({ success: true, message: 'Success updating master Contact.' });
      } catch (error) {}
    }
    if (!isUpdate) {
      try {
        await updateContact(input);
        //notify({ success: true, message: 'Success adding master Contact.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  return (
    <>
      <TableModal
        type='admin'
        title='Master Admin'
        open={isModalOpen}
        handleClose={closeModal}
      >
        <ContactsInput
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitContact}
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
        Add
      </Button>
      <MaterialTable
        title='Contacts'
        columns={state.columns}
        data={state.data}
        // editable={{
        //   onRowAdd: newData =>
        //     new Promise(resolve => {
        //       newData.accountId = account.accountId;
        //       addContacts(newData)
        //         .then((result) => {
        //           resolve();
        //           setState(prevState => {
        //             const data = [...prevState.data];
        //             data.push(newData);
        //             return { ...prevState, data };
        //           });
        //         })
        //     }),
        //   onRowUpdate: (newData, oldData) =>
        //      new Promise((resolve, reject) => {
        //       newData.accountId = selectedAccount.accountId;
        //       newData.account.accountName = selectedAccount.accountName;
        //       updateContact(newData)
        //         .then((result) => {
        //           resolve();
        //           if (oldData) {
        //             setState(prevState => {
        //               const data = [...prevState.data];
        //               data[data.indexOf(oldData)] = newData;
        //               return { ...prevState, data };
        //             });
        //           }
        //         })
        //         .catch((err) => {
        //           reject(err)
        //         })
        //     }),
        //   onRowDelete: oldData =>
        //     new Promise((resolve,reject) => {
        //       deleteContact(oldData.id)
        //         .then((results) => {
        //           resolve();
        //           setState(prevState => {
        //             const data = [...prevState.data];
        //             data.splice(data.indexOf(oldData), 1);
        //             return { ...prevState, data };
        //           });
        //         })
        //         .catch((err) => {
        //           reject()
        //         })
        //     }),
        // }}
      />
    </>
  );
};

export default ViewComponent;
