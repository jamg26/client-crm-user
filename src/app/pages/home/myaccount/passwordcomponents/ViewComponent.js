import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { getUserByToken} from '../../../../services/user.service';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, TextField, FormControl } from "@material-ui/core";
import { changePassword } from '../../../../services/user.service';
import { Link } from "react-router-dom";

const ViewComponent = () => {

	const notify = data => {
	    if (data.success) {
	      	toast.success(data.message);
	    } else {
	      	toast.error(data.message);
	    }
	}

	const clearValidation = {
 		error: false
 	}

 	const clearFormData = {
 		oldPassword: '',
 		newPassword: '',
 		confirmPassword: ''
 	}

 	const [formData, setformData] = useState(clearFormData);
 	const [validation, setValidation] = useState(clearValidation)

	const handleChange = (e) => {
		setformData({
			...formData,
			[e.target.name]: e.target.value
		})
	}


	const handleChangePassword = (e) => {
		if (validateData()) {
   			changePassword(formData)
                .then( (data ) => {
                	if (data.data.result === 'Password did not match') {
                		setValidation({oldPassword : {
								error: true,
								errorMessage: 'Incorrect password.'
							}
						});
                	} else if (data.data.result === 'Incorrect password.') {
						setValidation({oldPassword : {
							error: true,
							errorMessage: 'Incorrect password.'
						}
					});
					} else {
                		notify({ success: true, message: 'Changing password successful.' });
                		setformData(clearFormData)
                	}
                }).catch(() => {});
		}
		
	} 

	const validateData = () => {
		setValidation(clearValidation);
		if (formData.oldPassword === '') {
			setValidation({oldPassword : {
					error: true,
					errorMessage: 'This field is required.'
				}
			});
			return false;
		} else if (formData.newPassword === '') {
			setValidation({newPassword : {
					error: true,
					errorMessage: 'This field is required.'
				}
			});
			return false
		} else if (formData.newPassword.length < 4) {
			setValidation({newPassword : {
					error: true,
					errorMessage: 'New password must container atleast 8 characters.'
				}
			});
			return false;
		} else if (formData.confirmPassword === '') {
			setValidation({confirmPassword : {
					error: true,
					errorMessage: 'Please confirm your password.'
				}
			});
			return false
		} else if (formData.newPassword !== formData.confirmPassword) {
			setValidation({confirmPassword : {
					error: true,
					errorMessage: 'Confirm password did not match.'
				}
			});
			return false;
		}
		return true
	}
		

	return (
		<div className="row">
			<ToastContainer />
		    <div className="col-md-12">
				<div className="form-container"
					style={{
						width:"70%",
						margin:"0 auto",
						background:"#fff",
						border: "1px solid #000",
    					padding: "1px",
						borderRadius: "5px"
					}}>
					<div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item--fluid">
						<div className="kt-portlet">
							<div className="kt-portlet__head">
								<div className="kt-portlet__head-label">
									<h3 className="kt-portlet__head-title">
										Change Password
									</h3>
								</div>
							</div>

							<form className="kt-form kt-form--label-right" autoComplete="off">
								<div className="form-body">
									<div className="kt-portlet__body">
										<div className="form-group mb-4">
											<TextField
												margin="normal"
												label="Old Password"
												className="kt-width-full"
												name="oldPassword"
												type="password"
												onChange={handleChange}
												value={formData?.oldPassword}
												helperText={validation?.oldPassword?.errorMessage}
												error={validation?.oldPassword?.error}
											/>
										</div>
										<div className="form-group mb-4">
											<TextField
												margin="normal"
												label="New Password"
												className="kt-width-full"
												name="newPassword"
												type="password"
												onChange={handleChange}
												value={formData?.newPassword}
												helperText={validation?.newPassword?.errorMessage}
												error={validation?.newPassword?.error}
											/>
										</div>
										<div className="form-group mb-4">
											<TextField
												margin="normal"
												label="Confirm Password"
												className="kt-width-full"
												name="confirmPassword"
												type="password"
												onChange={handleChange}
												value={formData?.confirmPassword}
												helperText={validation?.confirmPassword?.errorMessage}
												error={validation?.confirmPassword?.error}
											/>
										</div>
										
									</div>
								</div>
							</form>

							<div className="kt-portlet__body">
								<div className="row">
									<div className="col-md-6"></div>
									<div className="col-md-2">
										<div className="form-group mb-4">
											<Link
												to="/dashboard"
											>
												<Button
													type='submit'
													size='large'
													className='float-right'
													variant='contained'
													color='default'
												>
													CANCEL
												</Button>
											</Link>

										</div>
									</div>
									<div className="col-md-4">
										<div className="form-group mb-4">
											<Button
												type='submit'
												size='large'
												className='float-left'
												variant='contained'
												color='secondary'
												onClick={handleChangePassword}
											>
												CHANGE PASSWORD
											</Button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					</div>
			</div>
		</div>
	)

}

export default ViewComponent;