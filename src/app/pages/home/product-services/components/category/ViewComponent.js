import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {
  getCategoryList,
  registerCategory,
  updateCategory,
  deleteCategory,
} from '../../../../../services/productCategory.service';
import TableModal from '../../../../shared/Modal';
import { Button } from '@material-ui/core';
import CategoryInput from './CategoryInput';
import { Row, Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';
import SubCategory from './ViewSubCategory';

const ViewComponent = () => {
  const userData = useSelector(state => state.auth.user);
  const initialInput = {
    id: '',
    businessId: userData.mainRole.business.id,
    categoryName: '',
    note: '',
    active: true
  };

  const notify = data => {
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };

  const [state, setState] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [actionType, setActionType] = useState('');
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating

  const delCategory = async id => {
    await deleteCategory(id);
    setRerender(!reRender);
  };

  const renderStastus = data => {
    if (data) {
      return (<Alert icon={false} severity="success" style={{width: 80, justifyContent: 'center', padding: 0}}>
        ACTIVE
      </Alert>)
    } else {
      return (<Alert icon={false} severity="error" style={{width: 80, justifyContent: 'center', padding: 0}}>
        INACTIVE
      </Alert>)
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await getCategoryList(initialInput.businessId);
      setState({
        columns: [
          { title: 'Category', field: 'categoryName' },
          { title: 'Note', field: 'note' },
          { 
            title: 'Status', 
            field: 'active',
            width: 50,
            render: data => {
              return (
                renderStastus(data.active)
              )
            }
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
                        formData(data);
                        setActionType('edit');
                      }}
                    >
                      <EditIcon />
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      onClick={() => delCategory(data.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Col>
                </Row>
              );
            }
          }
        ],
        detailPanel: rowData => {
            return (
              <Container style={{padding: 10}}>
                <SubCategory
                  categoryId = {rowData.id}
                  categoryName = {rowData.categoryName}
                />
              </Container>
            )
          },
        onRowClick: (event, rowData, togglePanel) => { togglePanel()},
        data: response.data
      });
    };
    fetchData();
  }, [reRender]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const formData = data => {
    setInput({
      id: data.id,
      businessId: userData.mainRole.business.id,
      categoryName: data.categoryName,
      note: data.note,
      active: data.active
    });
    setIsModalOpen(true);
    setRerender(!reRender);
  };

  const handleChange = e => {
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const handleChangeActive = e => {
     setInput({
        ...input,
        [e.currentTarget.name]: e.currentTarget.checked
    });
  }

  const handleSubmitBusiness = async e => {
    e.preventDefault();
    input.businessId = userData.mainRole.business.id;
    if (actionType === 'edit') {
      try {
        await updateCategory(input);
        notify({ success: true, message: 'Success updating category.' });
      } catch (error) {}
    }
    if (actionType === 'add') {
      try {
        await registerCategory(input);
        notify({ success: true, message: 'Success adding category.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  return (
    <>
      <ToastContainer />
      <TableModal
        type='productCategory'
        title='Product Category'
        open={isModalOpen}
        handleClose={closeModal}
      >
        <CategoryInput
          data={input}
          handleChange={handleChange}
          handleChangeActive={handleChangeActive}
          handleSubmit={handleSubmitBusiness}
        />
      </TableModal>

      <Button
        className='mb-2'
        variant='contained'
        color='secondary'
        size='large'
        onClick={() => {
          setIsModalOpen(true);
          setInput(initialInput);
          setActionType('add');
        }}
        
      >
        Add
      </Button>
      <MaterialTable
        title='Product Category'
        columns={state.columns}
        data={state.data}
        detailPanel={state.detailPanel}
        onRowClick={state.onRowClick}
      />
    </>
  );
};

export default ViewComponent;
