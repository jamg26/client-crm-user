import React, { useState, useEffect } from 'react';
import { Formik } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import { Checkbox, FormControlLabel, TextField } from "@material-ui/core";
import * as auth from "../../store/ducks/auth.duck";
import { register } from "../../services/user.service";
import { getBusinessLocationData } from "../../services/business.service";


const AcceptInvitation = (props) => {
  let id = props.match.params.id;

  const { intl } = props;
  const [formData, setFormData] = useState({
    data: {
      businessLocationName : '',
      id: '',
    }
  });
  debugger;
  useEffect(() => {
      const fetchData = async () => {
      const response = await getBusinessLocationData(id);
      debugger;
        setFormData(
            response.data.data
        );
      }
      fetchData();
    }, []);

  const handleChange = (e) => {

  }
  
  return (
    <div className="kt-login__body">
      <div className="kt-login__form">
        <div className="kt-login__title">
          <h3>
            <FormattedMessage id="Accept Invitation" />
          </h3>
        </div>

            <form autoComplete="off">

              <div className="form-group mb-0">
                <TextField
                  margin="normal"
                  label="First name"
                  className="kt-width-full"
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.businessName}
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  margin="normal"
                  label="Last name"
                  className="kt-width-full"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
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
                  onChange={handleChange}
                  value={formData.email}
                />
              </div>

              <div className="form-group mb-0">
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

              <div className="kt-login__actions">
                
                <Link to="/auth">
                  <button type="button" className="btn btn-secondary btn-elevate kt-login__btn-secondary">
                   Not now
                  </button>
                </Link>

                <button
                  className="btn btn-primary btn-elevate kt-login__btn-primary"
                >
                  Accept
                </button>
              </div>
            </form>

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
