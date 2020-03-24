import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox, FormControlLabel, TextField, Select, MenuItem, InputLabel, FormControl, Button } from "@material-ui/core";


class BusinessProfileComponents extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            businessName: this.props.data.businessName,
            email: this.props.data.email
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleChange(event) {

        switch (event.target.name){
            case 'email':
                this.setState({email: event.target.value});
                break;
            case 'businessName':
                this.setState({businessName: event.target.value});
                break;
        }
    }

    handleSubmit(event) {
       console.log(this.state);
    }



    render(){
        return (
            <div className="row">
                <div className="col-md-6">
                    <form autoComplete="off" onSubmit={this.handleSubmit}>
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
                                            value={this.state.businessName}
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
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                         />
                                    </div>
                                </div>
                                <div className="kt-portlet__footer">
                                    
                                      <button
                                        className="btn btn-primary btn-elevate"
                                        
                                      >
                                        Update
                                      </button>
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
          )
    }

}

export default BusinessProfileComponents;