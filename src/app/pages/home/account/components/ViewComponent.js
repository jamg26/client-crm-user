import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import AccountsDetailsComponent from './AccountsDetailsComponent';
import { getAccountList, registerAccount, updateAccount, deleteAccount} from '../../../../services/account.service';

const ViewComponent = () => {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
    const response = await getAccountList();
      setState({
        columns: [
          { title: 'Profile', field: 'profile' },
          { title: 'Account Name', field: 'accountName' },
          { title: 'Phone', field: 'phone' },
          { title: 'Website', field: 'website'}
        ],
        data : response.data
      });
    }
    fetchData();
  }, []);

  return (
    <MaterialTable
      title="Accounts"
      columns={state.columns}
      data={state.data}
      detailPanel={rowData => {
        return (
          <AccountsDetailsComponent data={rowData}/>
        )
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            registerAccount(newData)
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
            updateAccount(newData)
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
            deleteAccount(oldData.id)
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