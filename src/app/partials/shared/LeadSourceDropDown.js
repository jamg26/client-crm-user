import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

class LeadSourceDropDown extends React.Component {
    
    constructor(props){
        super(props);
        this.handleSelectLeadSource = this.handleSelectLeadSource.bind(this);
        this.state = {
            data : [],
            leadSourceId: props.currentLeadSource.leadSourceId
        }
         this.props.onSelectLeadSource({leadSourceId:props.currentLeadSource.leadSourceId, leadSourceName:props.currentLeadSource.leadSourceName});

    }

    componentDidMount(){
        this.setState({
            data : this.props.data.data,
        })
    }

    
    handleSelectLeadSource(event){
        let leadSourceId  = event.target.value;
        const leadSourceData = this.state.data;

        const findLeadSource = leadSourceData.find(leadSource => leadSource.id === leadSourceId);

        let leadSourceName  = findLeadSource.leadSourceName;
        this.setState({leadSourceId:leadSourceId, leadSourceName: leadSourceName});
        this.props.onSelectLeadSource({leadSourceId:leadSourceId, leadSourceName: leadSourceName});
    }

    render(){
        return (

            <FormControl>
            <InputLabel id="labelLeadSource">Lead Source</InputLabel>
            <Select labelId="labelLeadSource" onChange={ this.handleSelectLeadSource.bind(this,) } value={this.state.leadSourceId }>
                <MenuItem value="0" >
                    <em>Select Lead Source</em>
                </MenuItem>
                { this.state.data.map(value => <MenuItem key={value.id} value={value.id} data-leadSourceName={value.leadSourceName}>{value.leadSourceName}</MenuItem>) }
                
            </Select>
          </FormControl>
          )
    }

}

export default LeadSourceDropDown;