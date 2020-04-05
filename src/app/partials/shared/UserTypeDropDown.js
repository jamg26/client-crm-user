import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, FormHelperText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { getUserTypeList } from '../../services/userType.service';


class UserTypeDropDown extends React.Component {
    
    constructor(props){

        super(props);
        this.handleSelectUserType = this.handleSelectUserType.bind(this);
        this.state = {
            userTypeData : [],
            businessId: props.businessId,

        }
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
        this.setState({businessUserRoleId:event.target.value})
        this.props.getSelectedUserType({businessUserRoleId: event.target.value});

    }
    render(){
        return (
            <FormControl variant="outlined" style={{width:'100%'}} error={this.props.formValidation.invitedAs?.error}>
                <InputLabel id="labelUserType" >Invited As</InputLabel>
                <Select
                  labelId="labelUserType"
                  value={this.props.currentUserType.businessUserRoleId}
                  onChange={this.handleSelectUserType.bind(this)}
                  label="Invited As"
                  name="businessUserRoleId"
                
                >
                <MenuItem value="0" >
                    <em>Select User Type</em>
                </MenuItem>
                    { this.state.userTypeData.map(value => 
                        <MenuItem key={value.id} value={value.id} >
                            {value.businessUserRoleName}
                        </MenuItem>) 
                    }
            </Select>
            <FormHelperText>{this.props.formValidation.invitedAs?.errorMessage}</FormHelperText>
        </FormControl>
          )
    }

}

export default UserTypeDropDown;