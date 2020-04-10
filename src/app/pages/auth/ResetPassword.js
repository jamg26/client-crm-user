import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import { Button, TextField } from '@material-ui/core';
import { changePassword } from '../../services/user.service';
// import { Link } from "react-router-dom";
import { Alert, AlertTitle } from '@material-ui/lab';

const ResetPassword = props => {
  let userId = props.match.params.id;

  const [notifyAccept, setNotifyAccept] = useState('');

  const clearValidation = {
    error: false
  };

  const clearFormData = {
    userId: userId,
    newPassword: '',
    confirmPassword: ''
  };

  const [formData, setformData] = useState(clearFormData);
  const [validation, setValidation] = useState(clearValidation);

  const handleChange = e => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNotNow = e => {
    window.location.href = '/';
  };

  const notifySuccess = (
    <Alert severity='success'>
      <AlertTitle>Success</AlertTitle>
      Resetting password was successful.
    </Alert>
  );

  const notifyFailed = (
    <Alert severity='error'>
      <AlertTitle>Failed</AlertTitle>
      Resetting password was not successful..
    </Alert>
  );

  const handleResetPassword = e => {
    if (validateData()) {
      changePassword(formData)
        .then(data => {
          if (data.data.status === 'Success') {
            setNotifyAccept(notifySuccess);
            setTimeout(() => {
              window.location.href = '/';
            }, 2000);
          } else {
            setNotifyAccept(notifyFailed);
          }
        })
        .catch(() => {});
    }
  };

  const validateData = () => {
    setValidation(clearValidation);
    if (formData.newPassword.length < 8) {
      setValidation({
        newPassword: {
          error: true,
          errorMessage: 'New password must container atleast 8 characters.'
        }
      });
      return false;
    } else if (formData.confirmPassword === '') {
      setValidation({
        confirmPassword: {
          error: true,
          errorMessage: 'Please confirm your password.'
        }
      });
      return false;
    } else if (formData.newPassword !== formData.confirmPassword) {
      setValidation({
        confirmPassword: {
          error: true,
          errorMessage: 'Confirm password did not match.'
        }
      });
      return false;
    }
    return true;
  };

  return (
    <div className='kt-login__body'>
      <div className='kt-login__form'>
        <div className='kt-login__title'>
          <h3>
            <FormattedMessage id='Reset Password' />
          </h3>
        </div>
        <form
          className='kt-form kt-form--label-right'
          oValidate
          autoComplete='off'
        >
          <div className='form-body'>
            <div className='kt-portlet__body'>
              {notifyAccept}
              <div className='form-group mb-4'>
                <TextField
                  margin='normal'
                  label='New Password'
                  className='kt-width-full'
                  name='newPassword'
                  type='password'
                  onChange={handleChange}
                  value={formData?.newPassword}
                  helperText={validation?.newPassword?.errorMessage}
                  error={validation?.newPassword?.error}
                />
              </div>
              <div className='form-group mb-4'>
                <TextField
                  margin='normal'
                  label='Confirm Password'
                  className='kt-width-full'
                  name='confirmPassword'
                  type='password'
                  onChange={handleChange}
                  value={formData?.confirmPassword}
                  helperText={validation?.confirmPassword?.errorMessage}
                  error={validation?.confirmPassword?.error}
                />
              </div>
            </div>
          </div>
        </form>

        <div className='kt-portlet__body'>
          <div className='row'>
            <div className='col-md-5'></div>
            <div className='col-md-2'>
              <div className='form-group mb-4'>
                <Button
                  type='submit'
                  size='large'
                  className='float-right'
                  variant='contained'
                  color='default'
                  onClick={handleNotNow}
                >
                  CANCEL
                </Button>
              </div>
            </div>
            <div className='col-md-5'>
              <div className='form-group mb-4'>
                <Button
                  type='submit'
                  size='large'
                  className='float-left'
                  variant='contained'
                  color='primary'
                  onClick={handleResetPassword}
                >
                  Reset Password
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
