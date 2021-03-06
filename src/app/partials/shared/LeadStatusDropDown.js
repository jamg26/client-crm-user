import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import { getLeadStatus } from '../../services/leadStatus.service';

class LeadStatusDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectLeadStatus = this.handleSelectLeadStatus.bind(this);
    this.state = {
      leadData: [],
      leadStatusId: this.props.currentLeadStatus.leadStatusId,
      listStatusList: []
    };
  }

  getLeadStatusList = async () => {
    const leadStatus = await getLeadStatus(this.props.businessId);
    this.setState({
      leadStatusList: leadStatus.data
    });
  };

  componentDidMount() {
    // this.getLeadsSource();
    this.setState({ leadStatusId: this.props.currentLeadStatus.leadStatusId });
    this.getLeadStatusList();
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
          //value={this.props.currentLeadStatus.leadStatusId}
          onChange={this.handleSelectLeadStatus.bind(this)}
          label='Lead Status'
          name='leadStatusId'
        >
          <MenuItem value='0'>
            <em>
              Select Lead Status
              {/* {!this.state?.leadStatusList ? 'Loading' : 'Select Lead Status'} */}
            </em>
          </MenuItem>

          {this.state?.leadStatusList?.map(value => {
            console.log(value);
            return (
              <MenuItem key={value.id} value={value.id}>
                {value.leadStatusName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    );
  }
}

export default LeadStatusDropDown;
