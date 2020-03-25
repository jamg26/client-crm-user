import React, {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import IconButton from '@material-ui/core/IconButton';
import Modal from 'react-bootstrap/Modal'
import { Alert, AlertTitle } from '@material-ui/lab';
import BusinessLocationModal from './BusinessLocationModal';
import { getBusinessLocationList, saveBusinessLocation, deleteBusinessLocation, updateBusinessLocation } from '../../../../services/business.service';
import { Checkbox, FormControlLabel, Switch, TextField, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";


const useStyles = makeStyles(theme => ({
  container: {
    display:'flex',
    
  },
  root: {
    minWidth: 275,
    width:'20%',
    marginLeft: 10
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

var formData = {isMainAddress: false, businessLocationName: '', businessId: ''}

const BusinessLocationsComponents = (props) => {

  const classes = useStyles();
  const [state, setState] = useState({
    dataLocation: props.data.businessLocation
  });
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);
  const [modalBody, setModalBody] = useState(0);
  const [modalFooter, setModalFooter] = useState(0);
  const [modalSize, setModalSize] = useState(0);
  const [alert, setAlert] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  useEffect(() => {
      const fetchData = async () => {
        const responseLocation = await getBusinessLocationList(props.data.businessLocation.businessId);
        setState({
            dataLocation : responseLocation.data
         });    

      }
      fetchData();
    }, []);

   const handleSave = (event) => {
      formData.businessId = props.data.businessLocation.businessId
       saveBusinessLocation(formData)
        .then((result) => {
           window.location.reload(); 
        })
    }

    const handleDelete = (event) => {
       deleteBusinessLocation(props.data.businessLocation.businessId)
        .then((result) => {
           window.location.reload(); 
        })
    }


    const handleUpdateBusinessLocation = (event) => {
      

      
    }

    const handleChange = (event) => {
        switch (event.target.name){
            case 'businessLocationName':
                formData.businessLocationName = event.target.value
                break;
            case 'country':
                formData.country = event.target.value
                break;
            case 'isMainAddress':
                formData.isMainAddress = !formData.isMainAddress;
                break;
            case 'country':
                 formData.state = event.target.value
                break;

            case 'state':
                 formData.state = event.target.value
                break;
            case 'city':
                 formData.city = event.target.value
                break;
            case 'zipCode':
                 formData.zipCode = event.target.value
                break;
        }
    }

     const toggleChecked = (event) => {
        formData.isMainAddress = !formData.isMainAddress
    }

  const showAddModal = () => {
    setShow(true);
    setModalSize('lg');
    setModalTitle('Add Business Location');
    setModalBody(
        <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item">
                <div className="kt-portlet">
                  <form autoComplete="off"  onSubmit={handleSave}>

                    <div className="kt-portlet__body">
                          
                      
                          <div className="form-group mb-0">
                          
                              <FormControlLabel
                                control={<Switch name ="isMainAddress" onChange={handleChange} />}
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
                                onChange={handleChange}
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
                                            onChange={handleChange}
                                      />
                                  </div>
                                  <div className="form-group mb-0">
                                      <TextField
                                            margin="normal"
                                            label="City"
                                            variant="outlined"
                                            className="kt-width-full"
                                            name="city"
                                            onChange={handleChange}
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
                                            onChange={handleChange}
                                      />
                                  </div>
                                  <div className="form-group mb-0">
                                      <TextField
                                            margin="normal"
                                            label="Zipcode"
                                            variant="outlined"
                                            className="kt-width-full"
                                            name="zipCode"
           
                                            onChange={handleChange}
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
        
    );
    setModalFooter (
      <>
        <button
          className="btn btn-primary btn-elevate"
          onClick={handleSave}
        >
          Add
        </button>

        <button className="btn btn-danger btn-elevate" onClick={handleClose}>Close</button>
      </>
    )
  }



  const showEditModal = (locationData) => {

    setShow(true);
    setModalSize('lg');
    setModalTitle('Edit Business Location');
    setModalBody(
        <BusinessLocationModal data={locationData} />
        
    );
    setModalFooter (
      <>
        <button
          className="btn btn-primary btn-elevate"
          onClick={handleUpdateBusinessLocation}
        >
          Update
        </button>

        
      </>
    )



  }

  const showDeleteModal = () => {
    setShow(true);
    setModalTitle('Delete Business Location');
    setModalSize('');
    setModalBody(
      <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item">
              <div className="kt-portlet">
                <form autoComplete="off"  onSubmit={handleDelete}>
                  <div className="kt-portlet__body">
                      <Typography variant="h5" component="h2">
                          Are you sure you want to Delete?
                      </Typography>
                  </div>
                  
                  <div className="kt-portlet__footer">
                  </div>
                </form>  
              </div>
          </div>
    );
    setModalFooter (

          <>
          <button className="btn btn-primary btn-elevate">YES</button>
          <button className="btn btn-danger btn-elevate" onClick={handleClose}>NO</button>
          </>

        
    )
  }



  return (
  
      <div className={classes.container}>
          
          <Card className={classes.root} variant="outlined">
              <CardContent>
                  <Typography variant="h5" component="h2">
                    {state.dataLocation.businessLocationName}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                      {state.dataLocation.addressLine}
                  </Typography>
                  <Typography variant="body2" component="p">
                      {state.dataLocation.city} {state.dataLocation.state} {state.dataLocation.country} {state.dataLocation.zipCode}
                  </Typography>
              </CardContent>
              <CardActions>

                    <IconButton aria-label="edit" onClick={(event) => showEditModal(state.dataLocation)}>
                        <EditIcon fontSize="small" />
                    </IconButton>

                    <IconButton aria-label="delete" onClick={showDeleteModal}>
                        <DeleteIcon fontSize="small" />
                    </IconButton>
              </CardActions>
          </Card>

          <Card className={classes.root} variant="outlined">
              <CardContent>
                  <Typography variant="h5" component="h2">
                      Add Location
                  </Typography>
                  <Typography variant="body2" component="p">
                      <CardActions>
                          <IconButton aria-label="add" onClick={showAddModal}>
                              <AddIcon fontSize="large" />
                          </IconButton>
                      </CardActions>
                  </Typography>
              </CardContent>
          </Card>

          <Modal show={show} onHide={handleClose} size={modalSize}>
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {modalBody}
      </Modal.Body>
      <Modal.Footer>
          {modalFooter}
      </Modal.Footer>
    </Modal>
      
      </div>
  );
}
export default BusinessLocationsComponents;