import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  input: {
    display: 'none',
  },
}));

const defaultValidation = {
  error: false,
  errorMessage: '',
};

const form = {
  termsConditions: '',
};

const DocumentForm = () => {
  const [formValiation, setFormValidation] = useState(defaultValidation);
  const [state, setState] = useState(form);

  const classes = useStyles();

  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className='kt-portlet kt-portlet--height-fluid'>
        <div className='kt-portlet__head'>
          <div className='kt-portlet__head-label'>
            <h3 className='kt-portlet__head-title'>Attachments</h3>
          </div>
          <input
            accept='*'
            className={classes.input}
            id='contained-button-file'
            multiple
            type='file'
          />
          <label htmlFor='contained-button-file'>
            <Button variant='contained' color='secondary' component='span'>
              Upload
            </Button>
          </label>
        </div>
        <div className='kt-portlet__body'>
          <div className='kt-widget4'>
            <Typography variant='subtitle1' gutterBottom>
              File Types Allowed:{' '}
            </Typography>
            <Typography variant='body1' gutterBottom>
              pdf, .xlsx, .xls, .png, .doc, .docx, .jpg, .jpeg, .csv, .txt
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default DocumentForm;
