import React, { useState } from 'react';
import {
  //TextField,
  Typography,
  // FormControl,
  FormHelperText
} from '@material-ui/core';
import { Container, Row, Col } from 'react-bootstrap';
// import AddIcon from '@material-ui/icons/Add';

//Card
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import CardMedia from '@material-ui/core/CardMedia';

import Fab from '@material-ui/core/Fab';
// import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
// import Avatar from '@material-ui/core/Avatar';

// import red from '@material-ui/core/colors/red';
// import pink from '@material-ui/core/colors/pink';
// import blue from '@material-ui/core/colors/blue';

// import Icon from '@material-ui/core/Icon';
// import PageviewIcon from '@material-ui/icons/Pageview';
// import SearchIcon from '@material-ui/icons/Search';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
// import CollectionsIcon from '@material-ui/icons/Collections';

// import Popover from '@material-ui/core/Popover';

// Search
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';
// import ReplayIcon from '@material-ui/icons/Replay';

// const defaultValidation = {
//   error: false,
//   errorMessage: ''
// };

const ProductInfo = props => {
  // const [formValiation, setFormValidation] = useState(defaultValidation);
  const [state, setState] = useState({
    mainState: 'initial',
    imageUploaded: 0,
    selectedFile: null
  });

  const handleUploadClick = event => {
    let file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function(e) {
      setState({
        selectedFile: [reader.result]
      });
    };

    setState({
      mainState: 'uploaded',
      selectedFile: event.target.files[0],
      imageUploaded: 1
    });
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={3}></Col>
          <Col xs={3}>
            <Typography
              variant='h6'
              gutterBottom
              style={{ marginBottom: '1.2em' }}
            >
              {' '}
              File Types Allowed:{' '}
              <FormHelperText style={{ color: 'red' }}>
                {' '}
                jpg, jpeg, .png{' '}
              </FormHelperText>
            </Typography>
          </Col>

          <Col xs={3}>
            <Typography
              variant='h6'
              gutterBottom
              style={{ marginBottom: '1.2em' }}
            >
              {' '}
              File Size Allowed:{' '}
              <FormHelperText style={{ color: 'red' }}>
                {' '}
                2048 KB{' '}
              </FormHelperText>
            </Typography>
          </Col>
          <Col xs={3}></Col>

          <Col xs={12}>
            <React.Fragment>
              <CardContent>
                <Grid container justify='center' alignItems='center'>
                  <input
                    accept='image/*'
                    className=''
                    id='contained-button-file'
                    multiple
                    type='file'
                    style={{ display: 'none' }}
                    onChange={handleUploadClick}
                  />
                  <label htmlFor='contained-button-file'>
                    <Fab component='span' className=''>
                      <AddPhotoAlternateIcon />
                    </Fab>
                  </label>
                </Grid>
              </CardContent>
            </React.Fragment>

            <img
              alt='file'
              width='100%'
              className=''
              src={state.selectedFile}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductInfo;
