import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AccountDropdown from '../../../../partials/shared/AccountDropdown';
import { getContactList, addContacts } from '../../../../services/contact.service';
import { getAccountList } from '../../../../services/account.service';

const ViewComponent = () => {
  const [state, setState] = useState(0);
  const [account, setAccount] = useState(0)

  const handleSelectAccount = (account) => {
    setAccount({accountId : account.accountId})
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
            field: 'Account',
            editComponent: props => (
              <AccountDropdown data={accountList} onSelecAccount={handleSelectAccount}/>
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
            // updateAccount(newData)
            //   .then((result) => {
            //     resolve();
            //     if (oldData) {
            //       setState(prevState => {
            //         const data = [...prevState.data];
            //         data[data.indexOf(oldData)] = newData;
            //         return { ...prevState, data };
            //       });
            //     }
            //   })
            //   .catch((err) => {
            //     reject(err)
            //   })
          }),
        onRowDelete: oldData =>
          new Promise((resolve,reject) => {
            // deleteAccount(oldData.id)
            //   .then((results) => {
            //     resolve();
            //     setState(prevState => {
            //       const data = [...prevState.data];
            //       data.splice(data.indexOf(oldData), 1);
            //       return { ...prevState, data };
            //     });
            //   })
            //   .catch((err) => {
            //     reject()
            //   })
          }),
      }}
    />
  );
}

export default ViewComponent;