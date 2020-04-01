import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage, injectIntl } from "react-intl";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField, FormControl } from "@material-ui/core";
import { changePassword } from '../../services/user.service';
import { Link } from "react-router-dom";

const ResetPassword = () => {

  const notify = data => {
      if (data.success) {
          toast.success(data.message);
      } else {
          toast.error(data.message);
      }
  }

  const clearValidation = {
    error: false
  }

  const clearFormData = {
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  }

  const [formData, setformData] = useState(clearFormData);
  const [validation, setValidation] = useState(clearValidation)

  const handleChange = (e) => {
    setformData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleResetPassword = (e) => {
    if (validateData()) {
        // changePassword(formData)
        //         .then( (data ) => {
        //           if (data.data.result === 'Password did not match') {
        //             setValidation({oldPassword : {
        //         error: true,
        //         errorMessage: 'Incorrect password.'
        //       }
        //     });
        //           } else  {
        //             notify({ success: true, message: 'Changing password successful.' });
        //             setformData(clearFormData)
        //           }

        //         }).catch(() => {});
    }
    
  } 

  const validateData = () => {
    setValidation(clearValidation);
    if (formData.oldPassword === '') {
      setValidation({oldPassword : {
          error: true,
          errorMessage: 'This field is required.'
        }
      });
      return false;
    } else if (formData.newPassword === '') {
      setValidation({newPassword : {
          error: true,
          errorMessage: 'This field is required.'
        }
      });
      return false
    } else if (formData.newPassword.length < 8) {
      setValidation({newPassword : {
          error: true,
          errorMessage: 'New password must container atleast 8 characters.'
        }
      });
      return false;
    } else if (formData.confirmPassword === '') {
      setValidation({confirmPassword : {
          error: true,
          errorMessage: 'Please confirm your password.'
        }
      });
      return false
    } else if (formData.newPassword !== formData.confirmPassword) {
      setValidation({confirmPassword : {
          error: true,
          errorMessage: 'Confirm password did not match.'
        }
      });
      return false;
    }
    return true
  }
    

  return (
    <div className="kt-login__body">
      <div className="kt-login__form">
        <div className="kt-login__title">
          <h3>
            <FormattedMessage id="Reset Password" />
          </h3>
        </div>
            <form className="kt-form kt-form--label-right" oValidate autoComplete="off">
                    <div className="form-body">
                      <div className="kt-portlet__body">
                              <div className="form-group mb-4">
                                  <TextField
                                    margin="normal"
                                    label="Old Password"
                                    className="kt-width-full"
                                    name="oldPassword"
                                    type="password"
                                    onChange={handleChange}
                                    value={formData?.oldPassword}
                                    helperText={validation?.oldPassword?.errorMessage}
                                    error={validation?.oldPassword?.error}
                                 />
                            </div>
                            <div className="form-group mb-4">
                                  <TextField
                                    margin="normal"
                                    label="New Password"
                                    className="kt-width-full"
                                    name="newPassword"
                                    type="password"
                                    onChange={handleChange}
                                    value={formData?.newPassword}
                                    helperText={validation?.newPassword?.errorMessage}
                                    error={validation?.newPassword?.error}
                                 />
                            </div>
                            <div className="form-group mb-4">
                                  <TextField
                                    margin="normal"
                                    label="Confirm Password"
                                    className="kt-width-full"
                                    name="confirmPassword"
                                    type="password"
                                    onChange={handleChange}
                                    value={formData?.confirmPassword}
                                    helperText={validation?.confirmPassword?.errorMessage}
                                    error={validation?.confirmPassword?.error}
                                 />
                            </div>
                            
                        </div>
                    </div>
            </form>
            
            <div className="kt-portlet__body">
                    <div className="row">
                      <div className="col-md-5"></div>
                      <div className="col-md-2">
                        <div className="form-group mb-4">
                          <Link
                                to="/"
                              >
                                <Button
                                    type='submit'
                                    size='large'
                                    className='float-right'
                                    variant='contained'
                                    color='default'
                                >
                                    CANCEL
                                </Button>
                            </Link>

                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="form-group mb-4">
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
  )

}

export default ResetPassword;