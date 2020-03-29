import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { getUserTypeList } from '../../services/userType.service';


class UserTypeDropDown extends React.Component {
    
    constructor(props){

        super(props);
        this.handleSelectLeadSource = this.handleSelectLeadSource.bind(this);
        this.state = {
            userTypeData : [],
            businessId: props.businessId
        }
        debugger;
    }

    componentDidMount(){
        this.getUserType();
        debugger;
    }

    getUserType() {
        getUserTypeList(this.state.businessId)
            .then(results => this.setState({userTypeData : results.data}))
            .catch(err => console.log(err))
    }
    
    handleSelectLeadSource(event){
        this.setState({leadSourceId:event.target.value})
        this.props.getSelectedLeadSource(event.target.value);

    }

    debugger;

    render(){
        return (
            <FormControl variant="outlined" style={{width:'100%'}}>
                <InputLabel id="labelLeadSource" >Lead Source</InputLabel>
                <Select
                  labelId="labelLeadSource"
                  value={this.props.currentLeadSource.leadSourceId}
                  
                  label="Lead Source"
                  name="leadSourceId"
                  style={{height:36}}
                >
                <MenuItem value="0" >
                    <em>Select Lead Source</em>
                </MenuItem>
                    {/*{ this.state.leadData.map(value => 
                        <MenuItem key={value.id} value={value.id}>
                            {value.leadSourceName}
                        </MenuItem>) 
                    }*/}
            </Select>
        </FormControl>
          )
    }

}

export default UserTypeDropDown;