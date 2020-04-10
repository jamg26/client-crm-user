import React from 'react';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import { Button, FormControlLabel, Switch, TextField } from '@material-ui/core';

const InputBusinessLocation = props => {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <InputGroup className='mb-4'>
            <div className='form-group mb-0'>
              <FormControlLabel
                control={
                  <Switch name='isMainAddress' onChange={props.handleChange} />
                }
                label='Defaul Main Address'
              />
            </div>
          </InputGroup>
        </Col>

        <Col xs={12}>
          <InputGroup className='mb-4'>
            <TextField
              onChange={props.handleChange}
              id='businessLocationName'
              label='Business Location Name'
              className=''
              value={props.data.businessLocationName}
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
              label='zipCode'
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
          <InputGroup>
            <Button
              type='submit'
              size='large'
              className='float-right'
              variant='contained'
              color='primary'
              onClick={props.handleSubmit}
            >
              Confirm
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default InputBusinessLocation;
