import React from 'react';
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const AccountInput = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Container>
        <Row>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='accountName'
                type='accountName'
                label='Account Name'
                className=''
                value={props.data.accountName}
                variant='outlined'
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
                fullWidth={true}
                required
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <FormControl
              margin='dense'
              variant='outlined'
              style={{ width: '100%', margin: 2 }}
            >
              <InputLabel id='labelLeadStatus'>Industry</InputLabel>
              <Select
                value={props.data.industryName}
                onChange={props.handleChange}
                label='Industry'
                name='industryName'
              >
                <MenuItem value='0'>
                  <em>
                    Select Industry
                    {/* {!this.state?.leadStatusList ? 'Loading' : 'Select Lead Status'} */}
                  </em>
                </MenuItem>

                {props.industry?.map((value) => (
                  <MenuItem key={value.id} value={value.id}>
                    {value.industryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <InputGroup className='mb-4'>

              <TextField
                onChange={props.handleChange}
                id='industryName'
                label='Industry'
                className=''
                value={props.data.industryName}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </InputGroup> */}
          </Col>
          <Col xs={6}>
            <FormControl
              margin='dense'
              variant='outlined'
              style={{ width: '100%', margin: 2 }}
            >
              <InputLabel id='labelLeadStatus'>Parent Account</InputLabel>
              <Select
                value={props.data.parentName}
                onChange={props.handleChange}
                label='Parent Account'
                name='parentName'
              >
                <MenuItem value='0'>
                  <em>
                    Select Parent
                    {/* {!this.state?.leadStatusList ? 'Loading' : 'Select Lead Status'} */}
                  </em>
                </MenuItem>
                {props.parent?.map((value) => (
                  <MenuItem key={value.id} value={value.id}>
                    {value.firstName} {value.lastName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='parentName'
                label='Parent Account'
                className=''
                value={props.data.parentName}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </InputGroup> */}
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
                  shrink: true,
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <FormControl
              margin='dense'
              variant='outlined'
              style={{ width: '100%', margin: 2 }}
            >
              <InputLabel id='labelLeadStatus'>Account Type</InputLabel>
              <Select
                value={props.data.accountType}
                onChange={props.handleChange}
                label='Account Type'
                name='accountType'
              >
                <MenuItem value='0'>
                  <em>
                    Select Industry
                    {/* {!this.state?.leadStatusList ? 'Loading' : 'Select Lead Status'} */}
                  </em>
                </MenuItem>
                {props.accountType?.map((value) => (
                  <MenuItem key={value.id} value={value.id}>
                    {value.industryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
                  shrink: true,
                }}
                size='small'
              />
            </InputGroup> */}
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='website'
                label='Website'
                className=''
                value={props.data.website}
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
                onChange={props.handleChange}
                id='street'
                label='Street'
                className=''
                value={props.data.street}
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
                onChange={props.handleChange}
                id='country'
                label='Country'
                className=''
                value={props.data.country}
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
                onChange={props.handleChange}
                id='state'
                label='State'
                className=''
                value={props.data.state}
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
                onChange={props.handleChange}
                id='city'
                label='City'
                className=''
                value={props.data.city}
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
                onChange={props.handleChange}
                id='zipCode'
                label='Zip Code'
                className=''
                value={props.data.zipCode}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
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

export default AccountInput;
