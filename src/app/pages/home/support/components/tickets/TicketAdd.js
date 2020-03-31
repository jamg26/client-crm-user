import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import * as moment from 'moment';
import { getClosedSupportTicket } from '../../../../../services/support.service';
import TicketInput from './TicketInput';
import {
  addSupportTicket,
  saveAttachment
} from '../../../../../services/support.service';
import { awsServices, fileUpload } from '../../../../../services/aws.service';

import {
  TextField,
  Button,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Input
} from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const TicketAdd = () => {
  const initialInput = {
    id: '',
    subject: '',
    description: '',
    attachments: ''
  };
  const [input, setInput] = useState(initialInput);
  const [attached, setAttached] = useState({ fileName: '', filePath: '' });
  const [ticketBtn, setTicketBtn] = useState(false);

  // useEffect(() => {
  //   // const fetchData = async () => {
  //   // const response = await getClosedSupportTicket();
  //   //   setState({
  //   //     columns: [
  //   //       { title: 'Status', field: 'status' },
  //   //       { title: 'Name', field: 'user',
  //   //         render: rowData => `${rowData.user.firstName} ${rowData.user.lastName}`
  //   //       },
  //   //       { title: 'Email', field: 'email',
  //   //         render: rowData => `${rowData.user.email}`
  //   //       },
  //   //       { title: 'Phone', field: 'phone',
  //   //         render: rowData => `${rowData.user.phoneNumber}`
  //   //       },
  //   //       { title: 'Ticket#', field: 'supportTicketKey'},
  //   //       { title: 'Subject', field: 'subject'},
  //   //       { title: 'Requested On', field: 'dateCreated',
  //   //         render: rowData => `${moment(rowData.dateCreated).format('LLL')}`
  //   //       }
  //   //     ],
  //   //     data : response.data
  //   //   });
  //   //}
  //   //fetchData();
  // }, []);

  const handleChange = e => {
    console.log(e.target.value);
    setInput({
      ...input,
      [e.target.id]: e.target.value
    });
  };

  const addFile = async e => {
    var formData = new FormData();
    formData.append('files', e.target.files[0]);
    const file = await fileUpload(formData);
    setAttached({
      fileName: file.data[0].fileName,
      filePath: file.data[0].fileURL
    });
    console.log(file.data[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setTicketBtn(true);
    const newParam = {
      ...input,
      businessId: 'R2PPfBhpaLA.'
    };

    console.log(newParam);

    const ticket = await addSupportTicket(newParam);
    console.log(ticket);

    const newAttached = { ...attached, supportTicketId: ticket.data.id };
    const attachAdmin = await saveAttachment(newAttached);
    console.log(attachAdmin);

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
                  shrink: true
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
                  shrink: true
                }}
                size='small'
                fullWidth={true}
                rows={4}
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
