import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import MaterialTable from 'material-table';
//import LeadSourceDropdown from '../../../../partials/shared/LeadSourceDropDown';
import {
  getLeadsList,
  registerLead,
  updateLead,
  deleteLead
} from '../../../../services/leads.service';
import { getLeadSourceList } from '../../../../services/leadSource.service';
import { Button, CircularProgress } from '@material-ui/core';
// import AddIcon from '@material-ui/icons/Add';
// import IconButton from '@material-ui/core/IconButton';
import ModalContainer from '../../../../partials/shared/ModalContainer';
import InputfieldsContainer from './InputFieldsContainer';
import CrudButtonOPtions from '../../../../partials/shared/CrudButtonOptions';
// import { Alert, AlertTitle } from '@material-ui/lab';
import { Row, Col } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//import Leads
import ImportLeads from './ImportLeads';

// var selectedLeadSource = {};
var formData = {};
const ViewComponent = () => {
  const [state, setState] = useState(0);
  const [leadSource, setLeadSource] = useState(0);

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
  // const [deleteId, setDeleteId] = useState(0);
  const handleClose = () => setShow(false);

  const [reRender, setRerender] = useState(false);

  const notify = data => {
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getLeadsList();
      const leadSourceList = await getLeadSourceList(userData.mainRole.business.id);
      setLeadSource(leadSourceList.data);
      setState({
        columns: [
          { title: 'Company name', field: 'companyName' },
          { title: 'First name', field: 'firstName' },
          { title: 'Last name', field: 'lastName' },
          { title: 'Phone', field: 'phoneNumber' },
          {
            title: 'Action',
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
                      onClick={() => showUpdateModal(rowData.id)}>
                      UPDATE
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      onClick={() => {
                        deleteLead(rowData.id);
                        setRerender(!reRender);
                      }}>
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
  }, [reRender]);

  const handleSave = () => {
    if (formData !== {}) {
      formData.businessId = userData.mainRole.business.id;

      registerLead(formData)
        .then(result => {
          setRerender(!reRender);
          setShow(false);
          notify({ success: true, message: 'Success adding leads.' });
        })
        .catch(err => console.log(err));
    } else {
      setShow(false);
    }
  };

  const handleUpdate = () => {
    if (formData !== {}) {
      updateLead(formData)
        .then(result => {
          setRerender(!reRender);
          setShow(false);
          notify({ success: true, message: 'Success updating leads.' });
        })
        .catch(err => console.log(err));
    } else {
      setShow(false);
    }
  };

  // const handleDelete = () => {
  //   console.log(deleteId);
  //   deleteLead(deleteId).then(result => {
  //     setRerender(!reRender);
  //     setShow(false);
  //     notify({ success: true, message: 'Success deleting leads.' });
  //   });
  // };

  const handleChange = newData => {
    formData = newData;
  };

  const showAddModal = () => {
    formData = {};
    setShow(true);
    setModalSize('lg');
    setModalTitle('Add Lead');
    setModalBody(
      <InputfieldsContainer
        modalType='add'
        getFormData={handleChange}
        businessId={userData.mainRole.business.id}
        leadSource={leadSource}
      />
    );
    setModalFooter(
      <CrudButtonOPtions
        buttonDisplayType='CONFIRM'
        handleButton1={handleSave}
        handleButton2={handleClose}
      />
    );
  };

  const showUpdateModal = leadsourceId => {
    formData = {};
    setShow(true);
    setModalSize('lg');
    setModalTitle('Update Lead');
    setModalBody(
      <InputfieldsContainer
        modalType='add'
        getFormData={handleChange}
        leadSource={leadSource}
      />
    );
    setModalFooter(
      <CrudButtonOPtions
        buttonDisplayType='UPDATE'
        handleButton1={handleUpdate}
        handleButton2={handleClose}
      />
    );
  };

  const showLeadDetailModal = leadsourceId => {
    formData = {};
    setShow(true);
    setModalSize('lg');
    setModalTitle('Details Lead');
    setModalBody(
      <InputfieldsContainer
        modalType='details'
        getFormData={handleChange}
        leadsourceId={leadsourceId}
        leadSource={leadSource}
      />
    );
    setModalFooter(
      <CrudButtonOPtions
        buttonDisplayType='DETAILS'
        handleButton1={''}
        handleButton2={handleClose}
      />
    );
  };


  const showImportModal = () => {
    formData = {};
    setShow(true);
    setModalSize('lg');
    setModalTitle('Update Lead');
    setModalBody(
      <ImportLeads
        id={userData.mainRole.business.id}
        modalType='add'
        importLeadSubmitHandler={importLeadSubmitHandler}
      />
    );
  };

  const importLeadSubmitHandler = (data) => {
    setShow(false);
    if (data){
      notify({ success: true, message: 'Success importing leads.' });
    } else {
      notify({ success: false, message: 'Error on importing leads' });
    }
  }

  return (
    <>
      <ToastContainer />
      <Button
        className='mb-2'
        variant='contained'
        color='secondary'
        size='large'
        onClick={showAddModal}>
        Add
      </Button>
      <Button
        className='mb-2'
        variant='outlined'
        color='secondary'
        size='large'
        onClick={() => showImportModal()}
        style={{marginLeft:'10px'}}>
        Import Leads
      </Button>
    

      {/* <ImportLeads data={userData.mainRole.business.id}/> */}
      {/* <input
        accept="image/*"
        style={{display: 'none' }}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" color='secondary' component="span" className='mb-2' size='large'>
          Import Leads
        </Button>
      </label> */}
      <MaterialTable title='Leads' columns={state.columns} data={state.data} />
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
};

export default ViewComponent;
