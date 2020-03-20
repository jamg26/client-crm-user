import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { getLeadsList, registerLead, updateLead, deleteLead} from '../../../../services/leads.service';

const ViewComponent = () => {
  const [state, setState] = useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
    // const response = await getLeadsList();
      setState({
        columns: [
          { title: 'Name', field: 'name' },
          { title: 'Phone', field: 'phone' },
          { title: 'Company Name', field: 'company'},
          { title: 'Lead Source', field: 'leadSource'}
        ],
        // data : response.data
      });
    }
    fetchData();
  }, []);

  return (
    <MaterialTable
      title="Accounts"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            // registerAccount(newData)
            //   .then((result) => {
            //     resolve();
            //     setState(prevState => {
            //       const data = [...prevState.data];
            //       data.push(newData);
            //       return { ...prevState, data };
            //     });
            //   })
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