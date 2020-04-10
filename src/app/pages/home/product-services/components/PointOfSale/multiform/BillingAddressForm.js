import React from 'react';
import { TextField } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

// const defaultValidation = {
//   error: false,
//   errorMessage: ''
// };

// const form = {
//   addressLine1: '',
//   addressLine12: '',
//   city: '',
//   state: '',
//   country: '',
//   zipCode: ''
// };

const BillingAddressForm = props => {
  // const [formValiation, setFormValidation] = useState(defaultValidation);
  // const [state, setState] = useState(form);

  const handleChange = e => {
    props.setState({ ...props.state, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={handleChange}
                id='addressLine1'
                label='Address Line 1'
                className=''
                value={props.state.addressLine1}
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
                onChange={handleChange}
                id='addressLine2'
                label='Address Line2'
                className=''
                value={props.state.addressLine2}
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
                onChange={handleChange}
                id='city'
                label='City'
                className=''
                value={props.state.city}
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
                onChange={handleChange}
                id='state'
                label='State'
                className=''
                value={props.state.state}
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
                onChange={handleChange}
                id='country'
                label='Country'
                className=''
                value={props.state.country}
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
                onChange={handleChange}
                id='zipCode'
                label='Zip Code'
                className=''
                value={props.state.zipCode}
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

export default BillingAddressForm;
