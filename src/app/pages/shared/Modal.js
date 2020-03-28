import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from 'react-bootstrap';

const ModalTable = props => {
  return (
    <div>
      <Modal
        size="lg"
        dialogClassName='modal-90w'
        show={props.open}
        onHide={props.handleClose}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </div>
  );
};

export default ModalTable;
