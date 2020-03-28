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
import { Row, Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

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
          { title: 'Action',
            field: 'actions',
            width: 200,
            render: rowData => {
              return (
                <Row>
                  <Col>
                    <Button
                      variant='contained'
                      color='secondary'
                      title={rowData.id}
                      onClick={() => showUpdateModal(rowData.id)}
                    >
                      UPDATE
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      onClick={() => showDeleteModal(rowData.id)}
                    >
                      DELETE
                    </Button>
                  </Col>
                </Row>
              );
            }
          }
        ],
        data : response.data,
        
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
    <Container>
      <ToastContainer />
      <Button
        className='mb-2'
        variant="contained"
        color="primary"
        size='large'
        onClick={showAddModal}
      >
        Add
      </Button>
      <MaterialTable
        title="Leads"
        columns={state.columns}
        data={state.data}
        options={{
            actionsColumnIndex: -1,
          }}
        actions={state.actions}
        
      />
      <ModalContainer 
          handleClose={handleClose}
          handleOpen={show}
          modalSize={modalSize}
          modalTitle={modalTitle}
          modalBody={modalBody}
          modalFooter={modalFooter}
      />
    </Container>
  );
}

export default ViewComponent;