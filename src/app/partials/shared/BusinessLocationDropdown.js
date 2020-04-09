import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, FormHelperText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { getBusinessLocationList } from '../../services/business.service';

class BusinessLocationDropDown extends React.Component {
    
    constructor(props){
        super(props);
        this.handleSelectBusinessLocation = this.handleSelectBusinessLocation.bind(this);
        this.state = {
            businessLocationData : [],
            businessId: props.businessId,

        }
    }

    componentDidMount(){
        this.getUserType();
    }

    getUserType() {
        getBusinessLocationList(this.state.businessId)
            .then(results => 
                this.setState({businessLocationData : results.data}))
            .catch(err => console.log(err))
    }
    
    handleSelectBusinessLocation(event){
        this.props.getSelectedBusinessLocation(event);

    }
    render(){
        return (
            <FormControl variant="outlined" style={{width:'100%'}} >
                <InputLabel id="labelBusinessLocation" >Business Location</InputLabel>
                <Select
                  labelId="labelBusinessLocation"
                  value={this.props.currentSelectedBusinessLocation}
                  onChange={this.handleSelectBusinessLocation.bind(this)}
                  label="Business Location"
                  name="businessLocationId"
                
                >
                <MenuItem value="0" >
                    <em>Select Business Location</em>
                </MenuItem>
                    { this.state.businessLocationData.map(value => 
                        <MenuItem key={value.id} value={value.id} >
                            {value.businessLocationName}
                        </MenuItem>) 
                    }
            </Select>
            <FormHelperText></FormHelperText>
        </FormControl>
          )
    }

}

export default BusinessLocationDropDown;