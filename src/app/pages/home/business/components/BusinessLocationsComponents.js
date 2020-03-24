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
import { getBusinessLocationList, saveBusinessLocation } from '../../../../services/business.service';
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

var formData = {isMainAddress: false}

export default function BusinessLocationsComponents(props) {

  const classes = useStyles();
  const [state, setState] = useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [show, setShow] = useState(false);
  const [modalTitle, setModalTitle] = useState(0);
  const [modalBody, setModalBody] = useState(0);

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

   const handleSubmit = (event) => {
       saveBusinessLocation(formData)
        .then((result) => {
          debugger;
        })
        debugger;
    }

  const showAddModal = () => {

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
    
    setShow(true);
    setModalTitle('Add Business Location');
    setModalBody(
            <div className="kt-container  kt-container--fluid  kt-grid__item kt-grid__item">
                <div className="kt-portlet">
                    <div className="kt-portlet__body">
                      <form autoComplete="off"  >
                          <div className="form-group mb-0">
                          
                              <FormControlLabel
                                control={<Switch name ="isMainAddress" onChange={handleChange} />}
                                label="Normal"
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



                     </form>   
                    </div>
                    
                    <div className="kt-portlet__footer">
                      
                    </div>
                </div>
            </div>
        
    );
  }

  const showEditModal = () => {
    setShow(true);
    setModalTitle('Edit Business Location');
    setModalBody(
        'asdasdasd'
    );
  }

  // function BusinessLocation () {
  //   if (state !== 0) {
  //     const listlocation = state.dataLocation.map((item, index) => {
  //       debugger; 
  //     });
  //   }
  // }

  return (
  
      <div className={classes.container}>
          
          <Card className={classes.root} variant="outlined">
              <CardContent>
                  <Typography variant="h5" component="h2">
                      Fresh.vegas
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                      B12345643234
                  </Typography>
                  <Typography variant="body2" component="p">
                      6780 South Las Vegas Blvd Las Vegas, Nevada, USA-89119
                  </Typography>
              </CardContent>
              <CardActions>
                  <IconButton aria-label="edit">
                      <EditIcon fontSize="small" />
                  </IconButton>
                  <IconButton aria-label="delete">
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

          <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{modalTitle}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          {modalBody}
      </Modal.Body>
      <Modal.Footer>
      <button
                        className="btn btn-primary btn-elevate"
                        onClick={handleSubmit}
                      >
                        Add
                      </button>
      </Modal.Footer>
    </Modal>
      
      </div>
  );
}
