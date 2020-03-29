import React from 'react';
import {
  TextField,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Input
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const ContactsInput = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Container>
        <Row>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='subject'
                label='Subject'
                className=''
                value={props.data.subject}
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
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='description'
                label='Description'
                className=''
                value={props.data.description}
                variant='outlined'
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
                fullWidth={true}
                rows={4}
                multiline
                required
              />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <ExpansionPanel>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls='panel1bh-content'
                id='panel1bh-header'
              >
                Attachments
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <Input type='file' />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Col>
          <Col xs={12}>
            <InputGroup>
              <Button
                type='submit'
                size='large'
                className='float-right mt-3'
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

export default ContactsInput;
