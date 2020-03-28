import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { getLeadSourceList } from '../../services/leadSource.service';


class LeadSourceDropDown extends React.Component {
    
    constructor(props){
        super(props);
        this.handleSelectLeadSource = this.handleSelectLeadSource.bind(this);
        this.state = {
            leadData : [],
            leadSourceId: this.props.currentLeadSource.leadSourceId
        }
    }

    componentDidMount(){
        this.getLeadsSource();
        this.setState({leadSourceId:this.props.currentLeadSource.leadSourceId})
    }

    getLeadsSource() {
        getLeadSourceList()
            .then(results => this.setState({leadData : results.data}))
            .catch(err => console.log(err))
    }
    
    handleSelectLeadSource(event){
        this.setState({leadSourceId:event.target.value})
        this.props.getSelectedLeadSource(event.target.value);

    }

    render(){
        return (
            <FormControl variant="outlined" style={{width:'100%'}}>
                <InputLabel id="labelLeadSource">Lead Source</InputLabel>
                <Select
                  labelId="labelLeadSource"
                  value={this.props.currentLeadSource.leadSourceId}
                  onChange={this.handleSelectLeadSource.bind(this)}
                  label="Lead Source"
                  name="leadSourceId"
                >
                <MenuItem value="0" >
                    <em>Select Lead Source</em>
                </MenuItem>
                    { this.state.leadData.map(value => 
                        <MenuItem key={value.id} value={value.id}>
                            {value.leadSourceName}
                        </MenuItem>) 
                    }
            </Select>
        </FormControl>
          )
    }

}

export default LeadSourceDropDown;