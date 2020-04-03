import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import AccountDropdown from '../../../../partials/shared/AccountDropdown';

const ContactsInput = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Container>
        <Row>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <AccountDropdown
                currentAccount={{
                  accountId: props.data.accountId
                }}
                getSelectedAccount={props.handleSelectAccount}
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='firstName'
                label='First Name'
                className=''
                value={props.data.firstName}
                variant='outlined'
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
                fullWidth={true}
                required
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='lastName'
                label='Last Name'
                className=''
                value={props.data.lastName}
                variant='outlined'
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
                fullWidth={true}
                required
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='email'
                label='Email'
                className=''
                value={props.data.email}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
                required
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='dateOfBirth'
                type='date'
                label='Date Of Birth'
                className=''
                value={props.data.dateOfBirth}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='phone'
                label='Phone'
                className=''
                value={props.data.phone}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            {/* <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='accountType'
                label='Account Type'
                className=''
                value={props.data.accountType}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup> */}
          </Col>
          {/* <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='addressLine'
                label='Street'
                className=''
                value={props.data.addressLine}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col> */}
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='street'
                label='Street'
                className=''
                value={props.data.street}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='country'
                label='Country'
                className=''
                value={props.data.country}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='state'
                label='State'
                className=''
                value={props.data.state}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='city'
                label='City'
                className=''
                value={props.data.city}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='zipCode'
                label='Zip Code'
                className=''
                value={props.data.zipCode}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='description'
                label='Description'
                className=''
                value={props.data.description}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
                multiline
                rows={4}
              />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup>
              <Button
                type='submit'
                size='large'
                className='float-right'
                variant='contained'
                color='primary'
              >
                Confirm
              </Button>
            </InputGroup>
          </Col>
        </Row>

        {/* id: '',
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
    accountType: '',
    website: '',
    addressLine: '',
    street: '',
    country: '',
    state: '',
    city: '',
    zipCode:'' */}

        {/* 

        <InputGroup className='mb-4'>
          <TextField
            onChange={props.handleChange}
            id='lastName'
            label='Last name'
            className=''
            value={props.data.lastName}
            variant='outlined'
            fullWidth={true}
            InputLabelProps={{
              shrink: true
            }}
            size='small'
            required
          />
        </InputGroup>
        <InputGroup className='mb-4'>
          <TextField
            onChange={props.handleChange}
            id='businessName'
            label='Business'
            className=''
            value={props.data.businessName}
            variant='outlined'
            fullWidth={true}
            InputLabelProps={{
              shrink: true
            }}
            size='small'
            required
          />
        </InputGroup>
        <InputGroup>
          <Button
            type='submit'
            size='large'
            className='float-right'
            variant='contained'
            color='primary'
          >
            confirm
          </Button>
        </InputGroup> */}
      </Container>
    </form>
  );
};

export default ContactsInput;
