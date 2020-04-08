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
import TableModal from '../../../shared/Modal';
import { Alert, AlertTitle } from '@material-ui/lab';
import InputBusinessLocation from './businessLocations/InputBusinessLocation';
import BusinessLocationCards from './businessLocations/BusinessLocationCards';
import { getBusinessLocationList, saveBusinessLocation, deleteBusinessLocation, updateBusinessLocation, getBusinessLocationData } from '../../../../services/business.service';
import { Checkbox, FormControlLabel, Switch, TextField, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { Row, Col, Container } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(theme => ({
  container: {
    maxWidth: '100%'
  },
  root: {
    minWidth: 275,
    width:'19%',
    marginLeft: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  containerCard: {
    display:'flex',

  }
}));


const BusinessLocationsComponents = (props) => {
  const userData = useSelector(state => state.auth.user);
  const notify = data => {
    if (data.success) {
      toast.success(data.message);
    } else {
      toast.error(data.message);
    }
  }

  const classes = useStyles();
  const [state, setState] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [reRender, setRerender] = useState(false);
  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [alert, setAlert] = useState('');

  const closeModal = () => {
    setIsModalOpen(false);
  };


   const initialInput = {
    id: '',
    isMainAddress: false,
    businessLocationName: '',
    businessId: userData.mainRole.business.id,
    country: '',
    state: '',
    city: '',
    zipCode: '',
  };

  const [input, setInput] = useState(initialInput);

  useEffect(() => {
    setState({}); 
    const responseLocation = {}
      const fetchData = async () => {
        const responseLocation = await getBusinessLocationList(props.data.businessLocation.businessId);
        setState({
            dataLocation : responseLocation.data
         });   

      }
      fetchData();
    }, [reRender]);


    const handleSubmitButton = async e => {

      e.preventDefault();
      input.businessId = userData.mainRole.business.id;
      if (isUpdate) {
        try {
          await updateBusinessLocation(input);
          notify({ success: true, message: 'Success updating Business Location.' });
        } catch (error) {}
      }
      if (!isUpdate) {
        debugger;
        try {
          await saveBusinessLocation(input);
          notify({ success: true, message: 'Success adding Business Location.' });
        } catch (error) {}
      }
      setIsModalOpen(false);
      setRerender(!reRender);
    };


    const handleChange = (e) => {
      setInput({
      ...input,
      [e.target.id]: e.target.value
    });


    }

  const showEditModal = (locationData) => {
      const response = {};
       const fetchData = async () => {
        const response = await getBusinessLocationData(locationData);
            setIsUpdate(true);
            upBusinessLocation(response.data);
        }
    fetchData();

  }


   const showDeleteModal = async locationId => {
      await deleteBusinessLocation(locationId);
      notify({ success: true, message: 'Success Deleting Business Location.' });
      setRerender(!reRender);

  }

  const upBusinessLocation = data => {
    setInput({
        id: data.id,
        isMainAddress: data.isMainAddress,
        businessLocationName: data.businessLocationName,
        businessId: data.businessId,
        country: data.country,
        state: data.state,
        city: data.city,
        zipCode: data.zipCode,
    });

    setIsModalOpen(true);
    setRerender(!reRender);
  };

  function displayBusinessLocation () {
    if (state.dataLocation)   {
        return (<BusinessLocationCards data={state.dataLocation} cardStyle={classes} onDeleteBusinessLoc={showDeleteModal} onEditBusinessLoc={showEditModal}  />)
    }
        
  }

  return (
      <>
          <TableModal
            type='BusinessLocation'
            title='Business Location'
            open={isModalOpen}
            handleClose={closeModal}
          >
            <InputBusinessLocation
              data={input}
              handleChange={handleChange}
              handleSubmit={handleSubmitButton}
            />
          </TableModal>
         <Container className={classes.container}>
            <Button
              className='mb-2'
              variant='contained'
              color='primary'
              size='large'
              onClick={() => {
                setIsModalOpen(true);
                setIsUpdate(false);
                setInput(initialInput);
              }}
            >
              Add
            </Button>
            {displayBusinessLocation ()}

        </Container>
    </>
  );
}
export default BusinessLocationsComponents;