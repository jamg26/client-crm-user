import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { Link } from 'react-router-dom';
import {
  getSubCategoryList,
  registerSubCategory,
  updateSubCategory,
  deleteSubCategory,
} from '../../../../../services/productCategory.service';
import { Button } from '@material-ui/core';
import ProductInput from './ProductInput';
import { Row, Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Alert from '@material-ui/lab/Alert';

const ViewComponent = (props) => {
  const userData = useSelector(state => state.auth.user);
  const initialInput = {
    id: '',
    categoryId: props.categoryId,
    businessId: userData.mainRole.business.id,
    subCategoryName: '',
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
    await deleteSubCategory(id);
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
      const response = await getSubCategoryList(initialInput.categoryId);
      setState({
        columns: [
          { title: 'Sub Category', field: 'subCategoryName' },
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
      categoryId: props.categoryId,
      subCategoryName: data.subCategoryName,
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
        await updateSubCategory(input);
        notify({ success: true, message: 'Success updating sub category.' });
      } catch (error) {}
    }
    if (actionType === 'add') {
      try {
        await registerSubCategory(input);
        notify({ success: true, message: 'Success adding sub category.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  return (
    <Container>
      <ToastContainer />
      <Link
        to='/products/add'
      >
        <Button
          className='mb-2'
          variant='contained'
          color='primary'
          size='large'
        >
          Add
        </Button>
      </Link>
      <MaterialTable
        title={props.categoryName}
        columns={state.columns}
        data={state.data}
      />
    </Container>
  );
};

export default ViewComponent;
