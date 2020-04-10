import React from 'react';
import { TextField } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

// const defaultValidation = {
//   error: false,
//   errorMessage: ''
// };

// const form = {
//   firstName: '',
//   lastName: '',
//   email: '',
//   phoneNumber: '',
// };

const CustomerDetailsForm = props => {
  // const [formValiation, setFormValidation] = useState(defaultValidation);

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.onChange}
                id='custFirstName'
                label='First name'
                className=''
                value={props.data.custFirstName}
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
                onChange={props.onChange}
                id='custLastName'
                label='Last name'
                className=''
                value={props.data.custLastName}
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
                onChange={props.onChange}
                id='custEmail'
                label='Email'
                className=''
                value={props.data.custEmail}
                variant='outlined'
                fullWidth={true}
                //error={validate?.email?.error}
                //helperText={validate?.email?.errorMessage}
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
                onChange={props.onChange}
                id='custPhone'
                label='Phone number'
                className=''
                value={props.data.custPhone}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
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
