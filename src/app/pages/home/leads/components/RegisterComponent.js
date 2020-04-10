import React from 'react';
import { Formik } from 'formik';
import { connect } from 'react-redux';
//import { Link } from "react-router-dom";
import { injectIntl } from 'react-intl';
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import * as auth from '../../../../store/ducks/auth.duck';
import { registerAccount } from '../../../../services/account.service';

function RegisterComponent(props) {
  const { intl } = props;

  const useStyles = makeStyles(theme => ({
    formControl: {
      marginTop: 16,
      marginBottom: 8,
      minWidth: '100%'
    }
  }));

  const selectIndustryHandleChange = event => {
    setIndustry(event.target.value);
  };

  const selectParentAccountHandleChange = event => {
    setParentAccount(event.target.value);
  };

  const selectCountryHandleChange = event => {
    setCountry(event.target.value);
  };

  const selectCityHandleChange = event => {
    setCity(event.target.value);
  };

  const selectStateHandleChange = event => {
    setState(event.target.value);
  };

  const selectAccountTypeHandleChange = event => {
    setAccountType(event.target.value);
  };

  const [industryId, setIndustry] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [city, setCity] = React.useState('');
  const [state, setState] = React.useState('');
  const [parentAccountId, setParentAccount] = React.useState('');
  const [accountType, setAccountType] = React.useState('');

  const classes = useStyles();

  return (
    <div className='row'>
      <div className='col-md-6'>
        <div className='kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid'>
          <div className='kt-portlet'>
            <div className='kt-portlet__head'>
              <div className='kt-portlet__head-label'>
                <h3 className='kt-portlet__head-title'>Account Details</h3>
              </div>
            </div>

            <Formik
              initialValues={{
                email: '',
                fullname: '',
                username: '',
                businessName: '',
                password: '',
                acceptTerms: true,
                confirmPassword: ''
              }}
              validate={values => {
                const errors = {};

                if (!values.accountName) {
                  errors.accountName = intl.formatMessage({
                    id: 'AUTH.VALIDATION.REQUIRED_FIELD'
                  });
                }

                if (!values.phone) {
                  errors.phone = intl.formatMessage({
                    id: 'AUTH.VALIDATION.REQUIRED_FIELD'
                  });
                }

                if (!values.website) {
                  errors.website = intl.formatMessage({
                    id: 'AUTH.VALIDATION.REQUIRED_FIELD'
                  });
                }

                if (!values.addressLine) {
                  errors.addressLine = intl.formatMessage({
                    id: 'AUTH.VALIDATION.REQUIRED_FIELD'
                  });
                }

                if (!values.zipCode) {
                  errors.zipCode = intl.formatMessage({
                    id: 'AUTH.VALIDATION.REQUIRED_FIELD'
                  });
                }
                return errors;
              }}
              onSubmit={(values, { setStatus, setSubmitting }) => {
                registerAccount({
                  /*values.email,
                  values.fullname,
                  values.businessName,
                  values.username,
                  values.password*/
                })
                  .then(({ data: { accessToken } }) => {
                    props.register(accessToken);
                  })
                  .catch(() => {
                    setSubmitting(false);
                    setStatus('Invalid Registration');
                  });
              }}
            >
              {({
                values,
                status,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting
              }) => (
                <form
                  className='kt-form kt-form--label-right'
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete='off'
                >
                  <div className='form-body'>
                    <div className='kt-portlet__body'>
                      {status && (
                        <div className='form-group form-group-last'>
                          <div className='alert alert-secondary' role='alert'>
                            <div className='alert-icon'>
                              <i className='flaticon-warning kt-font-brand'></i>
                            </div>
                            <div className='alert-text'>{status}</div>
                          </div>
                        </div>
                      )}
                      <div className='kt-portlet__head'>
                        <div className='kt-portlet__head-label'>
                          <h3 className='kt-portlet__head-title'>
                            Account Info
                          </h3>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <div className='form-group mb-0'>
                            <TextField
                              margin='normal'
                              label='Account Name'
                              className='kt-width-full'
                              name='accountName'
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.accountName}
                              helperText={
                                touched.accountName && errors.accountName
                              }
                              error={Boolean(
                                touched.accountName && errors.accountName
                              )}
                            />
                          </div>

                          <div className='form-group mb-0'>
                            <TextField
                              margin='normal'
                              label='Phone Number'
                              className='kt-width-full'
                              name='phone'
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.phone}
                              helperText={touched.phone && errors.phone}
                              error={Boolean(touched.phone && errors.phone)}
                            />
                          </div>

                          <div className='form-group mb-0'>
                            <TextField
                              margin='normal'
                              label='Website'
                              className='kt-width-full'
                              name='website'
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.website}
                              helperText={touched.website && errors.website}
                              error={Boolean(touched.website && errors.website)}
                            />
                          </div>
                        </div>

                        <div className='col-md-6'>
                          <div className='form-group mb-0'>
                            <FormControl className={classes.formControl}>
                              <InputLabel id='labelIndustry'>
                                Industry
                              </InputLabel>
                              <Select
                                labelId='labelIndustry'
                                name='industryId'
                                value={industryId}
                                onChange={selectIndustryHandleChange}
                              >
                                <MenuItem value=''>
                                  <em>Select Parent Account</em>
                                </MenuItem>
                                <MenuItem value='investor'>Investor</MenuItem>
                                <MenuItem value='other'>Other</MenuItem>
                                <MenuItem value='partner'>Partner</MenuItem>
                                <MenuItem value='press'>Press</MenuItem>
                                <MenuItem value='prospect'>Prospect</MenuItem>
                                <MenuItem value='reseller'>Reseller</MenuItem>
                              </Select>
                            </FormControl>
                          </div>

                          <div className='form-group mb-0'>
                            <FormControl className={classes.formControl}>
                              <InputLabel id='labelParentAccount'>
                                Parent Account
                              </InputLabel>
                              <Select
                                labelId='labelParentAccount'
                                name='parentAccountId'
                                value={parentAccountId}
                                onChange={selectParentAccountHandleChange}
                              >
                                <MenuItem value=''>
                                  <em>Select Industry</em>
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>

                          <div className='form-group mb-0'>
                            <FormControl className={classes.formControl}>
                              <InputLabel id='labelAccountType'>
                                Account Type
                              </InputLabel>
                              <Select
                                labelId='labelAccountType'
                                value={accountType}
                                onChange={selectAccountTypeHandleChange}
                              >
                                <MenuItem value=''>
                                  <em>Select Account Type</em>
                                </MenuItem>
                                <MenuItem value='analyst'>Analyst</MenuItem>
                                <MenuItem value='competitor'>
                                  Competitor
                                </MenuItem>
                                <MenuItem value='customer'>Customer</MenuItem>
                                <MenuItem value='distribtor'>
                                  Distribtor
                                </MenuItem>
                                <MenuItem value='integrator'>
                                  Integrator
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>
                        </div>
                      </div>

                      <div className='kt-portlet__head'>
                        <div className='kt-portlet__head-label'>
                          <h3 className='kt-portlet__head-title'>
                            Address Info
                          </h3>
                        </div>
                      </div>
                      <div className='form-group mb-0'>
                        <TextField
                          margin='normal'
                          label='Address Line'
                          className='kt-width-full'
                          name='addressLine'
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.addressLine}
                          helperText={touched.addressLine && errors.addressLine}
                          error={Boolean(
                            touched.addressLine && errors.addressLine
                          )}
                        />
                      </div>
                      <div className='row'>
                        <div className='col-md-6'>
                          <FormControl className={classes.formControl}>
                            <InputLabel id='labelCountry'>Country</InputLabel>
                            <Select
                              labelId='labelCountry'
                              name='country'
                              value={country}
                              onChange={selectCountryHandleChange}
                            >
                              <MenuItem value=''>
                                <em>Select Country</em>
                              </MenuItem>
                            </Select>
                          </FormControl>

                          <FormControl className={classes.formControl}>
                            <InputLabel id='labelState'>State</InputLabel>
                            <Select
                              labelId='labelState'
                              name='state'
                              value={state}
                              onChange={selectStateHandleChange}
                            >
                              <MenuItem value=''>
                                <em>Select State</em>
                              </MenuItem>
                            </Select>
                          </FormControl>
                        </div>

                        <div className='col-md-6'>
                          <div className='form-group mb-0'>
                            <FormControl className={classes.formControl}>
                              <InputLabel id='labelCity'>City</InputLabel>
                              <Select
                                labelId='labelCity'
                                name='city'
                                value={city}
                                onChange={selectCityHandleChange}
                              >
                                <MenuItem value=''>
                                  <em>Select City</em>
                                </MenuItem>
                              </Select>
                            </FormControl>
                          </div>

                          <div className='form-group mb-0'>
                            <TextField
                              margin='normal'
                              label='Zip Code'
                              className='kt-width-full'
                              name='zipCode'
                              onBlur={handleBlur}
                              onChange={handleChange}
                              value={values.zipCode}
                              helperText={touched.zipCode && errors.zipCode}
                              error={Boolean(touched.zipCode && errors.zipCode)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='kt-portlet__body'>
                      <div className='form-actions'>
                        <button
                          disabled={isSubmitting || !values.acceptTerms}
                          className='btn btn-primary btn-elevate'
                        >
                          Register
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(RegisterComponent));
