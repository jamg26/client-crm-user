import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { getUserTypeList } from '../../services/userType.service';


class UserTypeDropDown extends React.Component {
    
    constructor(props){

        super(props);
        this.handleSelectUserType = this.handleSelectUserType.bind(this);
        this.state = {
            userTypeData : [],
            businessId: props.businessId
        }
        debugger;
    }

    componentDidMount(){
        this.getUserType();
    }

    getUserType() {
        getUserTypeList(this.state.businessId)
            .then(results => 
                this.setState({userTypeData : results.data}))
            .catch(err => console.log(err))
    }
    
    handleSelectUserType(event){
        debugger;
        this.setState({userTypeId:event.target.value})
        this.props.getSelectedUserType({userTypeId: event.target.value, userTypeName: event.currentTarget.dataset.usertypename});

    }

    render(){
        return (
            <FormControl variant="outlined" style={{width:'100%'}}>
                <InputLabel id="labelLeadSource" >Invited As</InputLabel>
                <Select
                  labelId="labelLeadSource"
                  value={this.props.currentUserType.userTypeId}
                  onChange={this.handleSelectUserType.bind(this)}
                  label="Lead Source"
                  name="leadSourceId"
                  style={{height:36}}
                >
                <MenuItem value="0" >
                    <em>Select User Type</em>
                </MenuItem>
                    { this.state.userTypeData.map(value => 
                        <MenuItem key={value.userTypeId} value={value.userTypeId} data-userTypeName={value.userTypeName}>
                            {value.userTypeName}
                        </MenuItem>) 
                    }
            </Select>
        </FormControl>
          )
    }

}

export default UserTypeDropDown;