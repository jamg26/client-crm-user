
import React, {useState} from "react";
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'
import { Checkbox, FormControlLabel, TextField, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

const AccountsDetailsComponent = (props) => {

  const [smShow, setSmShow] = useState(true);
  const [lgShow, setLgShow] = useState(true);
  const accountData = props.data;

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            {accountData.accountName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        	<form id="accountInfo">
        	<div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
	          	<div className="kt-portlet">
	            	<div className="kt-portlet__head">
	              		<div className="kt-portlet__head-label">
	                		<h3 className="kt-portlet__head-title">
	                  			Account Info
	                		</h3>

	              		</div>
	              	</div>
	              	<div className="kt-portlet__body">
	              		<div className="form-group mb-0">
	                        <TextField
	                            margin="normal"
	                            label="Business Name"
	                            className="kt-width-full"
	                            name="BusinessName"
	                            value={accountData.businessId}
	                         />
                        </div>
	                    <div className="row">
		                    <div className="col-md-6">
		                    	<div className="form-group mb-0">
			                        <TextField
			                            margin="normal"
			                            label="Industry"
			                            className="kt-width-full"
			                            name="industry"
			                            value={accountData.industryId}
			                         />
		                        </div>
		                        <div className="form-group mb-0">
			                        <TextField
			                            margin="normal"
			                            label="Website"
			                            className="kt-width-full"
			                            name="website"
			                            value={accountData.website}
			                         />
		                        </div>
		                    </div>
		                    <div className="col-md-6">
		                    	<div className="form-group mb-0">
			                        <TextField
			                            margin="normal"
			                            label="Parent Account"
			                            className="kt-width-full"
			                            name="parentAccount"
			                            value={accountData.parentAccountId}
			                         />
		                        </div>
		                        <div className="form-group mb-0">
			                        <TextField
			                            margin="normal"
			                            label="Phone"
			                            className="kt-width-full"
			                            name="phone"
			                            value={accountData.phone}
			                         />
		                        </div>
		                    </div>
		                </div>
			            
	              	</div>
	            </div>

	            <div className="kt-portlet">
	            	<div className="kt-portlet__head">
	              		<div className="kt-portlet__head-label">
	                		<h3 className="kt-portlet__head-title">
	                  			Address Info
	                		</h3>

	              		</div>
	              	</div>
	              	<div className="kt-portlet__body">
	              		<div className="form-group mb-0">
	                        <TextField
	                            margin="normal"
	                            label="Address Line"
	                            className="kt-width-full"
	                            name="addressLine"
	                            value={accountData.addressLine}
	                         />
                        </div>
	                    <div className="row">
		                    <div className="col-md-6">
		                    	<div className="form-group mb-0">
			                        <TextField
			                            margin="normal"
			                            label="Country"
			                            className="kt-width-full"
			                            name="country"
			                            value={accountData.country}
			                         />
		                        </div>
		                        <div className="form-group mb-0">
			                        <TextField
			                            margin="normal"
			                            label="City"
			                            className="kt-width-full"
			                            name="city"
			                            value={accountData.city}
			                         />
		                        </div>
		                    </div>
		                    <div className="col-md-6">
		                    	<div className="form-group mb-0">
			                        <TextField
			                            margin="normal"
			                            label="State"
			                            className="kt-width-full"
			                            name="state"
			                            value={accountData.state}
			                         />
		                        </div>
		                        <div className="form-group mb-0">
			                        <TextField
			                            margin="normal"
			                            label="Zip Code"
			                            className="kt-width-full"
			                            name="zipCode"
			                            value={accountData.zipCode}
			                         />
		                        </div>
		                    </div>
		                </div>
			            
	              	</div>
	            </div>
	        </div>
	        </form>
        </Modal.Body>
        <Modal.Footer>
        	<div className="form-actions">
              	
            </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AccountsDetailsComponent