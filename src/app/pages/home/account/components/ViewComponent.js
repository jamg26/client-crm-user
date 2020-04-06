import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import {
  getAccountList,
  registerAccount,
  updateAccount,
  deleteAccount,
  getIndustry,
  getAccountType,
  getParentAccount,
} from '../../../../services/account.service';
import TableModal from '../../../shared/Modal';
import { Button } from '@material-ui/core';
import AccountInput from './AccountInput';
import { Row, Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ViewComponent = () => {
  const userData = useSelector((state) => state.auth.user);

  const initialInput = {
    id: '',
    profile: '',
    accountName: '',
    phone: '',
    website: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    industryName: '',
    parentName: '',
    phone: '',
    accountType: '',
    website: '',
    addressLine: '',
    street: '',
    country: '',
    state: '',
    city: '',
    zipCode: '',
    description: '',
  };

  const notify = (data) => {
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  };
  // const [industry, setIndustry] = useState([]);
  // const [accountTypes, setAccountTypes] = useState([]);
  const [state, setState] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [input, setInput] = useState(initialInput);
  const [reRender, setRerender] = useState(false); // Re render table after updating

  useEffect(() => {
    const fetchData = async () => {
      const response = await getAccountList();

      const industry = getIndustry();
      const acctype = getAccountType();
      const parent = getParentAccount('R2PPfBhpaLA.');

      const promise = await Promise.all([industry, acctype, parent]);

      // setIndustry(promise[0].data);
      // setAccountTypes(promise[1].data);

      setState({
        columns: [
          { title: 'Profile', field: 'profile' },
          { title: 'Account Name', field: 'accountName' },
          { title: 'Phone', field: 'phone' },
          { title: 'Website', field: 'website' },
          { title: 'Address', field: 'addressLine' },
          {
            title: 'Action',
            field: 'actions',
            width: 200,
            render: (data) => {
              return (
                <Row>
                  <Col>
                    <Button
                      variant='contained'
                      color='secondary'
                      title={data.id}
                      onClick={() => {
                        upAccount(data);
                        setIsUpdate(true);
                      }}
                    >
                      <EditIcon />
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      variant='contained'
                      onClick={() => delAccount(data.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </Col>
                </Row>
              );
            },
          },
        ],
        data: response.data,
        industry: promise[0].data,
        accountTypes: promise[1].data,
        parentAccount: promise[2].data,
      });
    };
    fetchData();
  }, [reRender]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const upAccount = (data) => {
    setInput({
      id: data.id,
      profile: data.profile,
      accountName: data.accountName,
      phone: data.phone,
      website: data.website,
      addressLine: data.addressLine,
      country: data.country,
      state: data.state,
      city: data.city,
      zipCode: data.zipCode,
      industryName: data.industryName,
      parentName: data.parentName,
      accountType: data.accountType,
      description: data.description,
    });
    setIsModalOpen(true);
    setRerender(!reRender);
  };

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.id || e.target.name]: e.target.value,
    });
  };

  const handleSubmitBusiness = async (e) => {
    e.preventDefault();
    input.businessId = userData.mainRole.business.id;
    if (isUpdate) {
      try {
        await updateAccount(input);
        notify({ success: true, message: 'Success updating account.' });
      } catch (error) {}
    }
    if (!isUpdate) {
      try {
        await registerAccount(input);
        notify({ success: true, message: 'Success adding account.' });
      } catch (error) {}
    }
    setIsModalOpen(false);
    setRerender(!reRender);
  };

  const delAccount = async (id) => {
    await deleteAccount(id);
    setRerender(!reRender);
  };

  return (
    <>
      <ToastContainer />
      <TableModal
        type='Account'
        title='Account'
        open={isModalOpen}
        handleClose={closeModal}
      >
        <AccountInput
          data={input}
          handleChange={handleChange}
          handleSubmit={handleSubmitBusiness}
          industry={state.industry}
          accountType={state.accountTypes}
          parent={state.parentAccount}
        />
      </TableModal>

      <Button
        className='mb-2'
        variant='contained'
        color='secondary'
        size='large'
        onClick={() => {
          setIsModalOpen(true);
          setIsUpdate(false);
          setInput(initialInput);
        }}
      >
        Add
      </Button>
      <MaterialTable
        title='Accounts'
        columns={state.columns}
        data={state.data}
      />
    </>
  );
};

export default ViewComponent;
