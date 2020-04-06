import React from 'react';
import {
  TextField,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  FormControl,
  FormLabel,
  Checkbox,
} from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const UserTypesInput = (props) => {
  const { userType } = props.data;
  return (
    <form onSubmit={props.handleSubmit}>
      <Container>
        <Row>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='businessUserRoleName'
                label='Name'
                className=''
                value={props.data.businessUserRoleName}
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
          {/* <Col xs={12}>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>User Type</FormLabel>
              <RadioGroup
                row
                name='position'
                defaultValue={userType || ''}
                onChange={props.handleChangeUserType}
              >
                <FormControlLabel
                  value='Business Owner'
                  control={<Radio color='primary' />}
                  label='Business Owner'
                />
                <FormControlLabel
                  value='Admin'
                  control={<Radio color='primary' />}
                  label='Admin'
                />
                <FormControlLabel
                  value='Agent'
                  control={<Radio color='primary' />}
                  label='Agent'
                />
                <FormControlLabel
                  value='Affiliate'
                  control={<Radio color='primary' />}
                  label='Affiliate'
                />
              </RadioGroup>
            </FormControl>
          </Col> */}
          <Col xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={props.data.active}
                  onChange={props.handleChangeActive}
                  id='active'
                  color='primary'
                />
              }
              label='Active'
            />
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
      </Container>
    </form>
  );
};

export default UserTypesInput;
