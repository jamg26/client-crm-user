import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table';
import { makeStyles } from '@material-ui/core/styles';
import { getUserByToken} from '../../../../services/user.service';
import { getBusinessLocationList, updateBusinessProfile } from '../../../../services/business.service';
import BusinessProfile  from './BusinessProfileComponents';
import BusinessLocations  from './BusinessLocationsComponents'; 
import { Checkbox, FormControlLabel, TextField, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProfileIcon from '@material-ui/icons/Person';
import PaymentIcon from '@material-ui/icons/Payment';
import LocationIcon from '@material-ui/icons/Room';
import ShipAddressIcon from '@material-ui/icons/LocalShipping';
import TermsConditionIcon from '@material-ui/icons/ConfirmationNumber';
import LicenseIcon from '@material-ui/icons/Subtitles';
import InvoicingIcon from '@material-ui/icons/Receipt';
import Avatar from 'react-avatar-edit'

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

const notify = data => {
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  }



TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));






const ViewComponent = () => {
	const classes = useStyles();
	const [reRender, setRerender] = useState(false);

  	const [value, setValue] = useState(0);
  	const [processupdateBusinessProfile, setProcessupdateBusinessProfile] = useState(false);
 	const [state, setState] = useState(0);
 	
	const handleChange = (event, newValue) => {
	    setValue(newValue);
	};

	
	useEffect(() => {
	    const fetchData = async () => {
	    const response = await getUserByToken();
	      setState({
	        data : response.data.mainRole.business
	      });
	    }
	    fetchData();
	  }, [reRender]);


		const HandleUpdateBusinessProfile = (formDataBusinessProfile) => {
			updateBusinessProfile(formDataBusinessProfile)
		        .then(result => {
		          	setRerender(!reRender);
		          	notify({ success: true, message: 'Success Updating Business Profile.' });
					setProcessupdateBusinessProfile(false)	          
		    }).catch(err => console.log(err));

		}

		const  profileContainer = (props) => {
			if (props !== 0) {
				
				return (
					<BusinessProfile data={props.data} onUpdateProfile={HandleUpdateBusinessProfile} onProcessing={processupdateBusinessProfile}/>
					)
				
			}
		}

		const LocationsContainer = (props) => {

			return (
				<BusinessLocations data={props.data} />
				)
			
		}

	  	return (
		<div className={classes.root}>
			<ToastContainer />
			<AppBar position="static" color="default">
		        <Tabs
			        value={value}
			        onChange={handleChange}
			        id="BusinessProfileTab"
			        variant="scrollable"
			        scrollButtons="on"
			        indicatorColor="secondary"
			        textColor="secondary"
			        aria-label="scrollable force tabs example"
		        >
			        <Tab label="Profile" icon={<ProfileIcon />} {...a11yProps(0)} />
			        <Tab label="Payment Gateway" icon={<PaymentIcon />} {...a11yProps(1)} />
			        <Tab label="Locations" icon={<LocationIcon />} {...a11yProps(2)} />
			        <Tab label="Shipping Address" icon={<ShipAddressIcon />} {...a11yProps(3)} />
			        <Tab label="Terms & Conditions" icon={<TermsConditionIcon />} {...a11yProps(4)} />
			        <Tab label="License" icon={<LicenseIcon />} {...a11yProps(5)} />
			        <Tab label="Invoicing" icon={<InvoicingIcon />} {...a11yProps(6)} />
		        </Tabs>
		    </AppBar>
		    <TabPanel value={value} index={0}>
		    	{profileContainer(state)}
		     </TabPanel>
		    <TabPanel value={value} index={1}>
		        Payment Gateway
		    </TabPanel>
		    <TabPanel value={value} index={2}>
		        {LocationsContainer(state)}
		    </TabPanel>
		    <TabPanel value={value} index={3}>
		        Shipping Address
		    </TabPanel>
		    <TabPanel value={value} index={4}>
		        Terms and Conditions
		    </TabPanel>
		    <TabPanel value={value} index={5}>
		        License
		    </TabPanel>
		    <TabPanel value={value} index={6}>
		        Invoicing
		    </TabPanel>
	    </div>

	  )

}

export default ViewComponent;