import React, { useState, useEffect } from 'react';
import {
  addSupportTicket,
  saveAttachment,
} from '../../../../../services/support.service';
import { fileUpload } from '../../../../../services/aws.service';

import {
  TextField,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Input,
} from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { notify } from '../../../../shared/Notify';

const TicketAdd = () => {
  const initialInput = {
    id: '',
    subject: '',
    description: '',
    attachments: '',
  };
  const [input, setInput] = useState(initialInput);
  const [attached, setAttached] = useState({ fileName: '', filePath: '' });
  const [ticketBtn, setTicketBtn] = useState(false);

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.id]: e.target.value,
    });
  };

  const addFile = async (e) => {
    var formData = new FormData();
    formData.append('files', e.target.files[0]);
    const file = await fileUpload(formData);
    setAttached({
      fileName: file.data[0].fileName,
      filePath: file.data[0].fileURL,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTicketBtn(true);
    const newParam = {
      ...input,
      businessId: 'R2PPfBhpaLA.',
    };

    const ticket = await addSupportTicket(newParam);

    const newAttached = { ...attached, supportTicketId: ticket.data.id };
    const attachAdmin = await saveAttachment(newAttached);

    setInput(initialInput);
    setAttached({ fileName: '', filePath: '' });
    setTicketBtn(false);
    notify('Ticket submitted.');
    window.location.reload(false);
  };

  return (
    <div className='mt-5'>
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={handleChange}
                id='subject'
                label='Subject'
                className=''
                value={input.subject}
                variant='outlined'
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
                fullWidth={true}
                // required
              />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={handleChange}
                id='description'
                label='Description'
                className=''
                value={input.description}
                variant='outlined'
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
                fullWidth={true}
                rows={8}
                multiline
                // required
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
                <Input id='attachments' type='file' onChange={addFile} />
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
                disabled={ticketBtn}
              >
                Confirm
              </Button>
            </InputGroup>
          </Col>
        </Row>
      </form>
    </div>
  );
};

export default TicketAdd;
