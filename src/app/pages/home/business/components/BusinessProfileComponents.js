import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel, TextField, Select, MenuItem, InputLabel, FormControl, Button } from "@material-ui/core";


class BusinessProfileComponents extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            formData : {
                businessName: this.props.data.businessName,
                email: this.props.data.email,
                id: this.props.data.id
            },
            processing: this.props.onProcessing,
            
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {
        let newFormData = this.state.formData;
        let keyName = event.target.name;
        newFormData[keyName] = event.target.value
        this.setState({formData: newFormData});
    }

    handleSubmit(event) {
        // this.setState({processing: true})
        this.props.onUpdateProfile(this.state.formData)
    }


    render(){

        return (
            <div className="row">
                <div className="col-md-6">
                    
                        <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item">
                            <div className="kt-portlet">
                                <div className="kt-portlet__body">
                                    <div className="form-group mb-0">
                                        <TextField
                                            margin="normal"
                                            label="Business Name"
                                            variant="outlined"
                                            className="kt-width-full"
                                            name="businessName"
                                            required="true"
                                            value={this.state.formData.businessName}
                                            onChange={this.handleChange}
                                         />
                                    </div>
                                    <div className="form-group mb-0">
                                        <TextField
                                            margin="normal"
                                            label="Email"
                                            variant="outlined"
                                            className="kt-width-full"
                                            name="email"
                                            required="true"
                                            value={this.state.formData.email}
                                            onChange={this.handleChange}
                                         />
                                    </div>
                                </div>
                                <div className="kt-portlet__footer">
                                    
                                      <button
                                        className="btn btn-primary btn-elevate"
                                        onClick={this.handleSubmit}
                                        disableElevation
                                        disabled={this.state.processing}
                                      >
                                        Update
                                      </button>
                                    
                                </div>
                            </div>
                        </div>
                   
                </div>
            </div>
          )
    }

}

export default BusinessProfileComponents;