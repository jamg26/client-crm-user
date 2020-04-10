import React from 'react';
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const LeadStatusInput = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Container>
        <Row>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='leadStatusName'
                label='Source Name'
                className=''
                value={props.data.leadStatusName}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={4}>
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
                onClick={e => {
                  props.handleSubmit(e);
                }}
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

export default LeadStatusInput;
