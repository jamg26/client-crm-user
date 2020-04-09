import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const defaultValidation = {
  error: false,
  errorMessage: '',
};

const form = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
};

const CustomerDetailsForm = (props) => {
  const [formValiation, setFormValidation] = useState(defaultValidation);

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.onChange}
                id='firstName'
                label='First name'
                className=''
                value={props.data.firstName}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.onChange}
                id='lastName'
                label='Last name'
                className=''
                value={props.data.lastName}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.onChange}
                id='email'
                label='Email'
                className=''
                value={props.data.email}
                variant='outlined'
                fullWidth={true}
                //error={validate?.email?.error}
                //helperText={validate?.email?.errorMessage}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.onChange}
                id='phoneNumber'
                label='Phone number'
                className=''
                value={props.data.phoneNumber}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CustomerDetailsForm;
