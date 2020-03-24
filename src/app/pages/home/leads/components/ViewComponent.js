import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
import LeadSourceDropdown from '../../../../partials/shared/LeadSourceDropDown';
import { getLeadsList, registerLead, updateLead, deleteLead} from '../../../../services/leads.service';
import { getLeadSourceList } from '../../../../services/leadSource.service';

var selectedLeadSource = {};
const ViewComponent = () => {
  const [state, setState] = useState(0);
  const [leadSource, setLeadSource] = useState(0)
  const userData = useSelector(state => state.auth.user);
  
  const handleSelectLeadSource = (leadSource) => {
    setLeadSource({leadSourceId : leadSource.leadSourceId})
    selectedLeadSource = leadSource;
  }



  useEffect(() => {
    const fetchData = async () => {
    
    const response = await getLeadsList();
    const leadSourceList = await getLeadSourceList();
      setState({
        columns: [
          { title: 'Company name', field: 'companyName' },
          { title: 'First name', field: 'firstName' },
          { title: 'Last name', field: 'lastName' },
          { title: 'Phone', field: 'phoneNumber'},
          { 
            title: 'Lead Source',
            field: 'leadSourceName',
            editComponent: props => (
              <LeadSourceDropdown data={leadSourceList} 
                                  onSelectLeadSource={handleSelectLeadSource} 
                                  currentLeadSource={props.rowData} />            )
          }
        ],
        data : response.data
      });
    }
    fetchData();
  }, []);

  return (
    <MaterialTable
      title="Leads"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            newData.businessId = userData.mainRole.business.id;
            registerLead(newData)
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
            newData.leadSourceId = selectedLeadSource.leadSourceId;
            newData.leadSourceName = selectedLeadSource.leadSourceName;
            updateLead(newData)
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
            deleteLead(oldData.id)
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