import React, { useState, useEffect } from 'react';
import { Formik } from "formik";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import * as auth from "../../store/ducks/auth.duck";
import { getUserInviteData, acceptInviteUser } from "../../services/userInvite.service";
import { Alert, AlertTitle } from '@material-ui/lab';

const AcceptInvitation = (props) => {
  let id = props.match.params.id;
  const { intl } = props;
  
  const [formData, setFormData] = useState({
      firstName : '',
      lastName: '',
      phoneNumber: '',
      email:'',
      password: '',
      confirmPassword: ''
  });

  const [notifyAccept, setNotifyAccept] = useState('')
  const [isRejected, setIsRejected] = useState(false)
  const [validate, setFormValidation] = useState(clearValidation)

  const clearValidation = {
    error: false,
    errorMessage: ''
  }

  const notifySuccess = <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
            Thank you for accepting the invitation.
      </Alert>;

  const notifyRejected = <Alert severity="error">
        <AlertTitle>Rejected</AlertTitle>
            Please be inform that this request is already rejected.
      </Alert>;

  useEffect(() => {
      const fetchData = async () => {
      const response = await getUserInviteData(id);

        if (response.data.status === 'Accepted') {
            window.location.href = "/"
        } else if (response.data.status === 'Rejected') {
            setNotifyAccept(notifyRejected);
            setIsRejected(true);
        }
        setFormData(
            response.data
        );
      }
      fetchData();
    }, []);

  const handleChange = (e) => {
    if (isRejected === false) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value
      });
      setFormValidation(clearValidation);
    }

  }

  const handleNotNow = e => {
      window.location.href = "/"
  }
  
  const handleAcceptInvite = async e => {
    if (isRejected === false) {
      setFormValidation(clearValidation);
      if (formData.password.length < 8) {
          setFormValidation({
            password : {
              error: true,
              errorMessage: 'Password should contain atleast 8 characters.'
            }
          });
      } else if (formData.password !== formData.confirmPassword) {
          setFormValidation({
            confirmPassword : {
              error: true,
              errorMessage: 'Confirm password did not match.'
            }
          });
      } else {
          try {
              await acceptInviteUser(formData);
              setNotifyAccept(notifySuccess);
              setTimeout(() => { window.location.href = "/"; }, 2000);
          } catch (error) {}
      }
    }
  }

  let rejectedElement =  (isRejected === true ? 'none' : '');
  

  return (

    <div className="kt-login__body">
      <div className="kt-login__form">
        <div className="kt-login__title">
          <h3>
            <FormattedMessage id="Accept Invitation" />
          </h3>
        </div>
            <form autoComplete="off">
              {notifyAccept}

              <div className="form-group mb-0">
                <TextField
                  margin="normal"
                  label="First name"
                  className="kt-width-full"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  margin="normal"
                  label="Last name"
                  className="kt-width-full"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  label="Email"
                  margin="normal"
                  className="kt-width-full"
                  id="email"
                  name="email"
                  value={formData.email}
                  
                />
              </div>

              <div className="form-group mb-0" style={{display:rejectedElement}}>
                <TextField
                  margin="normal"
                  label="Phone number"
                  className="kt-width-full"
                  id="phoneNumber"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                />
              </div>

              <div className="form-group mb-0" style={{display:rejectedElement}}>
                <TextField
                  margin="normal"
                  label="Password"
                  className="kt-width-full"
                  id="password"
                  type='password'
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
                  helperText={validate?.password?.errorMessage}
                  error={validate?.password?.error}
                />
              </div>

              <div className="form-group mb-0" style={{display:rejectedElement}}>
                <TextField
                  margin="normal"
                  label="Confirm Password"
                  className="kt-width-full"
                  type='password'
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  helperText={validate?.confirmPassword?.errorMessage}
                  error={validate?.confirmPassword?.error}
                />
              </div>
            </form>
              <div className="kt-login__actions" style={{display:rejectedElement}}>
                
                <button 
                    type="button" 
                    className="btn btn-secondary btn-elevate kt-login__btn-secondary" 
                    onClick={handleNotNow}
                >
                 Not now
                </button>


                <button
                  className="btn btn-primary btn-elevate kt-login__btn-primary"
                  onClick={handleAcceptInvite}
                >
                  Accept
                </button>
              </div>
            

      </div>
    </div>
  );
}

export default injectIntl(
  connect(
    null,
    auth.actions
  )(AcceptInvitation)
);
