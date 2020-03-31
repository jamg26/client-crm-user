import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from 'react-bootstrap';

const ModalContainer = props => {
  return (
    <div>
      <Modal
        dialogClassName='modal-90w'
        show={props.handleOpen}
        onHide={props.handleClose}
        size={props.modalSize}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{props.modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.modalBody}
          {props.modalFooter}
        </Modal.Body>
        {/* <Modal.Footer></Modal.Footer> */}
      </Modal>
    </div>
  );
};

export default ModalContainer;
