import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getLeadSourceList } from '../../services/leadSource.service';

class LeadStatusDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectLeadStatus = this.handleSelectLeadStatus.bind(this);
    this.state = {
      leadData: [],
      leadStatusId: this.props.currentLeadStatus.leadStatusId
    };
  }

  componentDidMount() {
    // this.getLeadsSource();
    this.setState({ leadStatusId: this.props.currentLeadStatus.leadStatusId });
  }

  // getLeadsSource() {
  //     getLeadSourceList()
  //         .then(results => this.setState({leadData : results.data}))
  //         .catch(err => console.log(err))
  // }

  handleSelectLeadStatus(event) {
    this.setState({ leadStatusId: event.target.value });
    this.props.getSelectedLeadStatus(event.target.value);
  }
  render() {
    return (
      <FormControl margin='dense' variant='outlined' style={{ width: '100%' }}>
        <InputLabel id='labelLeadStatus'>Lead Status</InputLabel>
        <Select
          labelId='labelLeadSource'
          value={this.props.currentLeadStatus.leadStatusId}
          onChange={this.handleSelectLeadStatus.bind(this)}
          label='Lead Status'
          name='leadStatusId'
        >
          <MenuItem value='0'>
            <em>Select Lead Status</em>
          </MenuItem>
          <MenuItem value='8'>
            <em>Lead Pending</em>
          </MenuItem>
          <MenuItem value='24'>
            <em>Active Customer</em>
          </MenuItem>
          {/*{ this.state.leadData.map(value => 
                        <MenuItem key={value.id} value={value.id} data-leadStatusName={value.leadStatusName}>
                            {value.leadStatusName}
                        </MenuItem>) 
                    }*/}
        </Select>
      </FormControl>
    );
  }
}

export default LeadStatusDropDown;
