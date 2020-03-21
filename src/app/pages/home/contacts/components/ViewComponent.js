import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AccountDropdown from '../../../../partials/shared/AccountDropdown';
import { getContactList, addContacts, updateContact, deleteContact } from '../../../../services/contact.service';
import { getAccountList } from '../../../../services/account.service';

var selectedAccount = {};
const ViewComponent = () => {
  const [state, setState] = useState(0);
  const [account, setAccount] = useState(0)

  const handleSelectAccount = (account) => {
    setAccount({accountId : account.accountId})
    selectedAccount = account;
  }
  
  useEffect(() => {
    const fetchData = async () => {
    const response = await getContactList();
    const accountList = await getAccountList();
      setState({
        columns: [
          { title: 'Profile', field: 'profile' },
          { title: 'First Name', field: 'firstName' },
          { title: 'Last Name', field: 'lastName' },
          { title: 'Email', field: 'email' },
          { title: 'Phone', field: 'phone'},
          { 
            title: 'Account Name',
            field: 'account.accountName',
            editComponent: props => (
              <AccountDropdown  data={accountList} 
                                onSelecAccount={handleSelectAccount} 
                                currentAccount={props.rowData} 
                                readOnly={true}  />
            )
          }
        ],
        data : response.data
      });
    }
    fetchData();
  }, []);

  return (
    <MaterialTable
      title="Contacts"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            newData.accountId = account.accountId;
            addContacts(newData)
              .then((result) => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.push(newData);
                  return { ...prevState, data };
                });
              })
          }),
        onRowUpdate: (newData, oldData) =>
           new Promise((resolve, reject) => {
            newData.accountId = selectedAccount.accountId;
            newData.account.accountName = selectedAccount.accountName;
            updateContact(newData)
              .then((result) => {
                resolve();
                if (oldData) {
                  setState(prevState => {
                    const data = [...prevState.data];
                    data[data.indexOf(oldData)] = newData;
                    return { ...prevState, data };
                  });
                }
              })
              .catch((err) => {
                reject(err)
              })
          }),
        onRowDelete: oldData =>
          new Promise((resolve,reject) => {
            deleteContact(oldData.id)
              .then((results) => {
                resolve();
                setState(prevState => {
                  const data = [...prevState.data];
                  data.splice(data.indexOf(oldData), 1);
                  return { ...prevState, data };
                });
              })
              .catch((err) => {
                reject()
              })
          }),
      }}
    />
  );
}

export default ViewComponent;