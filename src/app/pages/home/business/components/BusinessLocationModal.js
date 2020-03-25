import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel, Switch, TextField, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

class BusinessLocationModal extends React.Component {
    constructor(props){
        super(props);
        this.state = props.data

        this.handleChange = this.handleChange.bind(this);



    }


    handleChange(event) {

        switch (event.target.name){

            case 'businessLocationName':
                this.setState({businessLocationName: event.target.value});
                break;
            case 'country':
                this.setState({country: event.target.value});
                break;
            case 'isMainAddress':
                // formData.isMainAddress = !formData.isMainAddress;
                break;
            case 'country':
                 this.setState({country: event.target.value});
                break;

            case 'state':
                 this.setState({state: event.target.value});
                break;
            case 'city':
                 this.setState({city: event.target.value});
                break;
            case 'zipCode':
                 this.setState({zipCode: event.target.value});
                break;
        }
        global = this.setState;

    }




    render(){
        return (
            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item">
                <div className="kt-portlet">
                  <form autoComplete="off"   >

                    <div className="kt-portlet__body">
                           
                      
                          <div className="form-group mb-0">
                          
                              <FormControlLabel
                                control={<Switch name ="isMainAddress" onChange={this.handleChange.bind(this)} />}
                                label="Defaul Main Address"
                              />
                          
                          </div>
                        <div className="form-group mb-0">

                            <TextField
                                margin="normal"
                                label="Business Location Name"
                                variant="outlined"
                                className="kt-width-full"
                                name="businessLocationName"
                                required="true"
                                value={this.state.businessLocationName}
                                onChange={this.handleChange.bind(this)}
                             />
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                  <div className="form-group mb-0">
                                      <TextField
                                            margin="normal"
                                            label="Country"
                                            variant="outlined"
                                            className="kt-width-full"
                                            name="country"
                                            onChange={this.handleChange.bind(this)}
                                            value={this.state.country}
                                      />
                                  </div>
                                  <div className="form-group mb-0">
                                      <TextField
                                            margin="normal"
                                            label="City"
                                            variant="outlined"
                                            className="kt-width-full"
                                            name="city"
                                            value={this.state.city}
                                            onChange={this.handleChange.bind(this)}
                                      />
                                  </div>
                            </div>
                            <div className="col-md-6"> 
                                <div className="form-group mb-0">
                                      <TextField
                                            margin="normal"
                                            label="State"
                                            variant="outlined"
                                            className="kt-width-full"
                                            name="state"
                                            value={this.state.state}
                                            onChange={this.handleChange.bind(this)}
                                      />
                                  </div>
                                  <div className="form-group mb-0">
                                      <TextField
                                            margin="normal"
                                            label="Zipcode"
                                            variant="outlined"
                                            className="kt-width-full"
                                            name="zipCode"
                                            state
                                            value={this.state.zipCode}
                                            onChange={this.handleChange.bind(this)}
                                      />
                                  </div>
                            </div>
                        </div> 
                    </div>
                    
                    <div className="kt-portlet__footer">
                        
                    </div>
                  </form>  
                </div>
            </div>
          )
    }

}


export  default BusinessLocationModal;