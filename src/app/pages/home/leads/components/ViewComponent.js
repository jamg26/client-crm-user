import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialTable, { MTableToolbar } from 'material-table';
import LeadSourceDropdown from '../../../../partials/shared/LeadSourceDropDown';
import { getLeadsList, registerLead, updateLead, deleteLead} from '../../../../services/leads.service';
import { getLeadSourceList } from '../../../../services/leadSource.service';
import { Button } from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import ModalContainer from '../../../../partials/shared/ModalContainer';
import InputfieldsContainer from './InputFieldsContainer';
import CrudButtonOPtions  from '../../../../partials/shared/CrudButtonOptions';
import { Alert, AlertTitle } from '@material-ui/lab';

// var selectedLeadSource = {};
var formData = {}
const ViewComponent = () => {
  const [state, setState] = useState(0);
  const [leadSource, setLeadSource] = useState(0)
  
  const userData = useSelector(state => state.auth.user);
  
  // const handleSelectLeadSource = (leadSource) => {
  //   setLeadSource({leadSourceId : leadSource.leadSourceId})
  //   selectedLeadSource = leadSource;
  // }
  // for modal
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalBody, setModalBody] = useState('');
  const [modalFooter, setModalFooter] = useState('');
  const [modalSize, setModalSize] = useState('s');
  const handleClose = () => setShow(false);

  const [reRender, setRerender] = useState(false);

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
          // { 
          //   title: 'Lead Source',
          //   field: 'leadSourceName',
          //   editComponent: props => (
          //     <LeadSourceDropdown data={leadSourceList} 
          //                         onSelectLeadSource={handleSelectLeadSource} 
          //                         currentLeadSource={props.rowData} />            )
          // }
        ],
        data : response.data,
        actions : [
          {
            icon: 'edit',
            tooltip: 'Invite user',
            isFreeAction: false,
            onClick: (event, rowData) => {
                showUpdateModal(rowData.id)
            }
          },
          {
            icon: 'delete',
            tooltip: 'Invite user',
            onClick: (event, rowData) => {
               showDeleteModal ()
            }
          }
        ]
      });
    }
    fetchData();
  }, [reRender]);

  const handleSave = () => {
    if (formData != {} ) {
      formData.businessId = userData.mainRole.business.id;
      registerLead(formData)
          .then((result) => {
             setRerender(!reRender)
             setShow(false); 
          }).catch(err => console.log(err))
      
    } else {
      setShow(false); 
    }
    
  }

  const handleUpdate = () => {
    if (formData != {} ) {
      updateLead(formData) 
          .then((result) => {
              setRerender(!reRender)
              setShow(false); 
          }).catch(err => console.log(err))

    } else {

      setShow(false); 
    }
  
  }

  const handleDelete = () => {

      deleteLead(formData)
          .then((result) => {
              setRerender(!reRender)
              setShow(false);
          })
  }


  const handleChange = (newData) => {
      formData = newData;
  }


  const showAddModal = () => {
    formData = {}
    setShow(true);
    setModalSize('lg');
    setModalTitle('Add Lead');
    setModalBody(<InputfieldsContainer modalType='add' getFormData={handleChange} />);
    setModalFooter (
      <CrudButtonOPtions  buttonDisplayType="ADD"
                          handleButton1={handleSave}
                          handleButton2={handleClose}
                           />                  
    )
  }

  const showUpdateModal = (leadsourceId) => {
    formData = {}
    setShow(true);
    setModalSize('lg');
    setModalTitle('Update Lead');
    setModalBody(<InputfieldsContainer modalType='add' getFormData={handleChange} leadsourceId={leadsourceId} />);
    setModalFooter (
      <CrudButtonOPtions  buttonDisplayType="UPDATE"
                          handleButton1={handleUpdate}
                          handleButton2={handleClose}
                          
                           />
                       
    )
  }

  const showLeadDetailModal = (leadsourceId) => {
    formData = {}
    setShow(true);
    setModalSize('lg');
    setModalTitle('Details Lead');
    setModalBody(<InputfieldsContainer modalType='details' getFormData={handleChange} leadsourceId={leadsourceId} />);
    setModalFooter (
      <CrudButtonOPtions  buttonDisplayType="DETAILS"
                          handleButton1={''}
                          handleButton2={handleClose}
                          
                           />
                       
    )
  }

  const showDeleteModal = () => {
    setShow(true);
    setModalSize('m');
    setModalTitle('Delete Lead');
    setModalBody(
          <Alert severity="warning">
            <AlertTitle>Warning</AlertTitle>
              Are you sure do you want do delete?
          </Alert>
      );
    setModalFooter (
      <CrudButtonOPtions  buttonDisplayType="DELETE"
                          handleButton1={handleDelete}
                          handleButton2={handleClose}
                           />
                          
    )
  }

  return (
    <>
      <MaterialTable
        title="Leads"
        columns={state.columns}
        data={state.data}
        options={{
            actionsColumnIndex: -1,
          }}
        onRowClick={(event, rowData) => showLeadDetailModal(rowData.id)}
        actions={state.actions}
        // editable={{
        //   onRowAdd: newData =>
        //     new Promise(resolve => {
        //       newData.businessId = userData.mainRole.business.id;
        //       registerLead(newData)
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
        //       newData.leadSourceId = selectedLeadSource.leadSourceId;
        //       newData.leadSourceName = selectedLeadSource.leadSourceName;
        //       updateLead(newData)
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
        //       deleteLead(oldData.id)
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
        components={{
            Toolbar: props => (
            <div>
              <MTableToolbar {...props} />
              <div style={{display: 'flex', justifyContent: 'flex-end',  margin: '0 20px 20px 0'}}>
                 <Button
                    variant="contained"
                    color="primary"
                    startIcon={<AddIcon />}
                    onClick={showAddModal}
                  >
                    Add Lead
                  </Button>
              </div>

            </div>
          ),
        }}
      />
      <ModalContainer 
          handleClose={handleClose}
          handleOpen={show}
          modalSize={modalSize}
          modalTitle={modalTitle}
          modalBody={modalBody}
          modalFooter={modalFooter}
      />
    </>
  );
}

export default ViewComponent;