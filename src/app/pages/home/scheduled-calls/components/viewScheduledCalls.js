import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import { Badge, Button, Divider, Card } from 'antd';
import {
  UnorderedListOutlined,
  TableOutlined,
  UserOutlined,
  UserAddOutlined,
  PhoneOutlined,
  SendOutlined,
  MailOutlined,
  AuditOutlined,
} from '@ant-design/icons';
import PhoneControl from '../../../shared/PhoneControl';
import InputFieldsContainer from '../../leads/components/InputFieldsContainer';
import { sendVoiceMessage } from '../../../../services/twilio.service';

const ViewScheduledCalls = (props) => {
  const [dialpadOpen, setDialpadOpen] = useState(false);
  const [dial, setDial] = useState('');
  var formData = {};
  const handleChange = (newData) => {
    formData = newData;
  };

  const handleClose = () => {
    setDialpadOpen(false);
  };

  const handleDial = (e) => {
    e.persist();
    if (dial.length >= 13) return;
    setDial(dial + e.target.innerText);
  };

  const clearDial = () => {
    setDial('');
  };

  const callNumber = async () => {
    console.log('calling', dial);
    const res = await sendVoiceMessage(dial, 'testing');
    console.log(res);
  };

  return (
    <>
      <Modal
        size='sm'
        dialogClassName='modal-90w'
        show={dialpadOpen}
        onHide={handleClose}
        //centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Dialpad</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={12}>
              <Card bodyStyle={{ padding: 0 }}>
                <h1>{dial}</h1>
              </Card>
            </Col>
            <Col xs={12}>
              <hr />
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                7
              </Button>
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                8
              </Button>
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                9
              </Button>
            </Col>
            <Col xs={12}>
              <hr />
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                4
              </Button>
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                5
              </Button>
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                6
              </Button>
            </Col>
            <Col xs={12}>
              <hr />
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                1
              </Button>
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                2
              </Button>
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                3
              </Button>
            </Col>
            <Col xs={12}>
              <hr />
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                +
              </Button>
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={handleDial}>
                0
              </Button>
            </Col>
            <Col xs={4}>
              <Button size='large' block onClick={clearDial}>
                Clear
              </Button>
            </Col>
            <Col xs={12}>
              <hr />
            </Col>
            <Col xs={12}>
              <Button size='large' block onClick={callNumber}>
                CALL
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
      {/* <Row>
        <Col md={4}>
          <Row>
            <Col md={8}>
              <h5>
                Outgoing Call <Badge status='error' />
              </h5>
              <h2>Derek</h2>
              <Button>Scheduled Call</Button>
            </Col>
            <Col md={4}>
              <PhoneControl label='Lead Details'>
                <UnorderedListOutlined
                  style={{ fontSize: 30, color: '#ccc' }}
                />
              </PhoneControl>
            </Col>
          </Row>
        </Col>
        <Col md={1}>
          <Divider type='vertical' />
        </Col>
        <Col md={3}>
          <Row>
            <Col>
              <PhoneControl
                label='Dial Pad'
                onClick={() => setDialpadOpen(true)}
              >
                <TableOutlined style={{ fontSize: 30, color: '#ccc' }} />
              </PhoneControl>
            </Col>
            <Col>
              <PhoneControl label='Participant'>
                <UserOutlined style={{ fontSize: 30, color: '#ccc' }} />
              </PhoneControl>
            </Col>
            <Col>
              <PhoneControl label='Add'>
                <UserAddOutlined style={{ fontSize: 30, color: '#ccc' }} />
              </PhoneControl>
            </Col>
            <Col>
              <PhoneControl label='Hang Up'>
                <PhoneOutlined style={{ fontSize: 30, color: '#ccc' }} />
              </PhoneControl>
            </Col>
          </Row>
        </Col>
        <Col md={1}>
          <Divider type='vertical' />
        </Col>
        <Col md={3}>
          <Row>
            <Col>
              <PhoneControl label='Send Bid'>
                <SendOutlined style={{ fontSize: 30, color: '#ccc' }} />
              </PhoneControl>
            </Col>
            <Col>
              <PhoneControl label='Invoice'>
                <MailOutlined style={{ fontSize: 30, color: '#ccc' }} />
              </PhoneControl>
            </Col>
            <Col>
              <PhoneControl label='Sale Ref'>
                <AuditOutlined style={{ fontSize: 30, color: '#ccc' }} />
              </PhoneControl>
            </Col>
          </Row>
        </Col>
      </Row> */}
      <Row>
        <Col md={8}>
          <div className='mt-3'>
            <Card>
              <h4>Lead Detail</h4>
              <InputFieldsContainer getFormData={handleChange} />
              <Button color='danger'>Save</Button>
            </Card>
          </div>
        </Col>
        <Col md={1}>
          <Divider type='vertical' />
        </Col>
        <Col>
          <h4>Files</h4>
          <div className='mt-3'>
            <Card>
              image.jpg
              <hr />
              <Button>Upload files</Button>
            </Card>
          </div>
          <br />
          <h4>Call logs</h4>
          <div className='mt-3'>
            <Card>No Data</Card>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default ViewScheduledCalls;
