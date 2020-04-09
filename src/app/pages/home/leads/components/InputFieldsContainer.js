import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  FormControlLabel,
  Switch,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import LeadSourceDropdown from '../../../../partials/shared/LeadSourceDropDown';
import LeadStatusDropDown from '../../../../partials/shared/LeadStatusDropDown';
import {
  getLeadsDetails,
  getLeadsList,
} from '../../../../services/leads.service';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

class InputFieldsContainer extends React.Component {
  constructor(props) {
    super(props);
    let defaultReceiveDate = new Date();
    this.state = {
      firstName: '',
      leadSourceId: '4PDvakaYzWg.',
      companyName: '',
      ssn: '',
      equiment: '',
      email: '',
      phone: '',
      description: '',
      lastName: '',
      receivedDate: '',
      leadStatusId: 'JR1zcprJkUs.',
      estimatedtBilling: '',
      isdcode: '',
      mobile: '',
      note: '',
      receivedDate: defaultReceiveDate.toISOString(),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleReceivedDate = this.handleReceivedDate.bind(this);
    this.handleSelectLeadSource = this.handleSelectLeadSource.bind(this);
    this.handleSelectLeadStatus = this.handleSelectLeadStatus.bind(this);
  }

  componentDidMount() {
    let leadId = this.props.leadsourceId;

    if (typeof leadId !== 'undefined') {
      getLeadsDetails(leadId)
        .then((results) => {
          let leadData = results.data;
          this.setState(leadData);
        })
        .catch((err) => console.log(err));
    }
  }

  handleChange(event) {
    if (this.props.modalType !== 'details') {
      let keyName = event.target.name;
      let data = this.state;
      data[keyName] = event.target.value;

      this.setState(data);
      this.props.getFormData(data);
    }
  }

  handleReceivedDate(receivedDate) {
    if (this.props.modalType !== 'details') {
      let data = this.state;
      data.receivedDate = receivedDate.toISOString();
      this.setState(data);
      this.props.getFormData(data);
    }
  }

  handleSelectLeadSource(leadSourceId) {
    if (this.props.modalType !== 'details') {
      let data = this.state;
      data.leadSourceId = leadSourceId;
      this.setState(data);
      this.props.getFormData(data);
    }
  }

  handleSelectLeadStatus(leadStatusId) {
    if (this.props.modalType !== 'details') {
      let data = this.state;
      //data.leadStatusId = leadStatusId;
      this.setState(data);
      this.props.getFormData(data);
    }
  }

  render() {
    return (
      //   <div className='kt-container  kt-container--fluid  kt-grid__item kt-grid__item'>
      //     <div className='kt-portlet'>
      <form autoComplete='off'>
        {/* <div className='kt-portlet__body'> */}
        <div className='row'>
          <div className='col-md-6'>
            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='First name'
                variant='outlined'
                className='kt-width-full'
                name='firstName'
                value={this.state.firstName}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div
              className='form-group mb-0'
              style={{ paddingTop: '16px', paddingBottom: '8px' }}
            >
              <LeadSourceDropdown
                currentLeadSource={{
                  leadSourceId: this.state.leadSourceId,
                }}
                getSelectedLeadSource={this.handleSelectLeadSource}
              />
            </div>

            <div className='form-group mb-1'>
              <TextField
                margin='normal'
                label='Company Name'
                variant='outlined'
                className='kt-width-full'
                name='companyName'
                value={this.state.companyName}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='SSN'
                variant='outlined'
                className='kt-width-full'
                name='ssn'
                value={this.state.ssn}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='Equiment'
                variant='outlined'
                className='kt-width-full'
                name='equiment'
                value={this.state.equiment}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='Email'
                variant='outlined'
                className='kt-width-full'
                name='email'
                value={this.state.email}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='Phone'
                variant='outlined'
                className='kt-width-full'
                name='phone'
                value={this.state.phone}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='Description'
                variant='outlined'
                multiline
                rows='4'
                className='kt-width-full'
                name='description'
                value={this.state.description}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>
          </div>

          <div className='col-md-6'>
            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='Last name'
                variant='outlined'
                className='kt-width-full'
                name='lastName'
                value={this.state.lastName}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <FormControl margin='dense' style={{ width: '100%' }}>
              <div
                className='form-group mb-0'
                style={{
                  paddingTop: '0px',
                  paddingBottom: '0px',
                  marginBottom: '0px',
                }}
              >
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin='normal'
                    id='receivedDate'
                    name='receivedDate'
                    label='Lead Receive Date'
                    format='MM-dd-yyyy'
                    value={this.state.receivedDate}
                    onChange={this.handleReceivedDate}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                    style={{ paddingTop: '0px', paddingBottom: '0 px' }}
                  />
                </MuiPickersUtilsProvider>
              </div>
            </FormControl>

            <div
              className='form-group mb-0'
              style={{ paddingTop: '0px', paddingBottom: '8px' }}
            >
              <LeadStatusDropDown
                currentLeadStatus={{
                  leadStatusId: this.state.leadStatusId,
                }}
                getSelectedLeadStatus={this.handleSelectLeadStatus}
                businessId={this.props.businessId}
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='Number of location'
                variant='outlined'
                className='kt-width-full'
                name='noOfLocation'
                type='number'
                value={this.state.number}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='Estimated Billing'
                variant='outlined'
                className='kt-width-full'
                name='estimatedtBilling'
                value={this.state.estimatedtBilling}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='ISD Code'
                variant='outlined'
                className='kt-width-full'
                name='isdcode'
                value={this.state.isdcode}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='ISD Code'
                variant='outlined'
                className='kt-width-full'
                name='mobile'
                value={this.state.mobile}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>

            <div className='form-group mb-0'>
              <TextField
                margin='normal'
                label='Notes'
                variant='outlined'
                multiline
                rows='4'
                className='kt-width-full'
                name='note'
                value={this.state.note}
                onChange={this.handleChange}
                fullWidth={true}
                InputLabelProps={{
                  shrink: true,
                }}
                size='small'
              />
            </div>
          </div>
        </div>
        {/* </div> */}
      </form>
      //     </div>
      //   </div>
    );
  }
}

export default InputFieldsContainer;
