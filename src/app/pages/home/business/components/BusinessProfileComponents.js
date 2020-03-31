import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Checkbox,
  FormControlLabel,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Button
} from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
import { notification } from 'antd';
import { connect } from 'react-redux';
import {
  updateBusinessLogo,
  updateBusinessBanner,
  getBusiness,
  updateBusinessProfile
} from '../../../../services/business.service';

class BusinessProfileComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        businessName: this.props.data.businessName,
        email: this.props.data.email,
        id: this.props.data.id
      },
      processing: this.props.onProcessing,
      banner: [],
      logo: [],
      bannerBlob: '',
      logoBlob: '',
      business: {}
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getBusinessDetails = async () => {
    const business = await getBusiness();
    this.setState({
      business: business.data
    });
  };

  componentDidMount() {
    this.getBusinessDetails();
  }

  handleChange(event) {
    let newFormData = this.state.formData;
    let keyName = event.target.name;
    newFormData[keyName] = event.target.value;
    this.setState({ formData: newFormData });
  }

  handleSubmit(event) {
    // this.setState({processing: true})
    this.props.onUpdateProfile(this.state.formData);
  }

  openNotification = message => {
    notification.open({
      message: 'Notification',
      description: `${message}`,
      onClick: () => {
        console.log('Notification Clicked!');
      }
    });
  };

  handleChangeLogo = e => {
    e.persist();
    const fileReaderInstance = new FileReader();
    fileReaderInstance.readAsDataURL(e.target.files[0]);
    fileReaderInstance.onload = async () => {
      var base64data = fileReaderInstance.result;
      var id = e.target.id;
      var idBlob = `${e.target.id}Blob`;
      this.setState({
        [id]: e.target.files[0],
        [idBlob]: base64data
      });
      var formData = new FormData();
      formData.append('file', e.target.files[0]);
      console.log(formData);
      const res = await updateBusinessLogo(this.props.data.id, formData);
      console.log(res);
      this.openNotification('Logo updated.');
    };
  };

  handleChangeBanner = e => {
    e.persist();
    const fileReaderInstance = new FileReader();
    fileReaderInstance.readAsDataURL(e.target.files[0]);
    fileReaderInstance.onload = async () => {
      var base64data = fileReaderInstance.result;
      var id = e.target.id;
      var idBlob = `${e.target.id}Blob`;
      this.setState({
        [id]: e.target.files[0],
        [idBlob]: base64data
      });
      var formData = new FormData();
      formData.append('file', e.target.files[0]);
      console.log(formData);
      const res = await updateBusinessBanner(this.props.data.id, formData);
      console.log(res);

      this.openNotification('Banner updated.');
    };
  };

  triggerBanner = () => this.banner.click();
  triggerLogo = () => this.logo.click();

  clearLogo = async () => {
    const logo = await updateBusinessProfile({
      id: this.props.data.id,
      businessName: this.props.data.businessName,
      logoUrl: null
    });
    console.log('Logo cleared.', logo);
  };

  clearBanner = async () => {
    const logo = await updateBusinessProfile({
      id: this.props.data.id,
      businessName: this.props.data.businessName,
      bannerUrl: null
    });
    console.log('Banner cleared.', logo);
  };

  render() {
    console.log(this.props.data);
    return (
      <div className='row'>
        <div className='col-md-12'>
          <div className='kt-container  kt-container--fluid  kt-grid__item kt-grid__item'>
            <div className='kt-portlet'>
              <div className='kt-portlet__body'>
                <Row>
                  <Col xs={3}>
                    <div>
                      <p>Click to set banner image.</p>
                      <img
                        onClick={this.triggerBanner}
                        src={
                          this.state.bannerBlob ||
                          this.state.business.bannerUrl ||
                          '/media/logos/logo-thecrmnetwork-dark.png'
                        }
                        alt='banner'
                        style={{ width: 100, border: '1px solid' }}
                      />
                    </div>
                    <input
                      ref={fileInput => (this.banner = fileInput)}
                      id='banner'
                      type='file'
                      onChange={this.handleChangeBanner}
                      hidden
                    />
                    <Button onClick={this.clearBanner}>Clear Banner</Button>
                    <hr />
                    <div>
                      <p>Click to set logo image.</p>
                      <img
                        onClick={this.triggerLogo}
                        src={
                          this.state.logoBlob ||
                          this.state.business.logoUrl ||
                          '/media/logos/logo-thecrmnetwork-dark.png'
                        }
                        style={{ width: 100, border: '1px solid' }}
                        alt='logo'
                      />
                    </div>
                    <input
                      ref={fileInput => (this.logo = fileInput)}
                      id='logo'
                      type='file'
                      onChange={this.handleChangeLogo}
                      hidden
                    />
                    <Button onClick={this.clearLogo}>Clear logo</Button>
                  </Col>
                  <Col>
                    <div className='form-group mb-0'>
                      <TextField
                        margin='normal'
                        label='Business Name'
                        variant='outlined'
                        className='kt-width-full'
                        name='businessName'
                        required
                        value={this.state.formData.businessName}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='form-group mb-0'>
                      <TextField
                        margin='normal'
                        label='Email'
                        variant='outlined'
                        className='kt-width-full'
                        name='email'
                        required
                        value={this.state.formData.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className='form-group mb-0'>
                      <button
                        className='btn btn-primary btn-elevate'
                        onClick={this.handleSubmit}
                        //disableelevation
                        disabled={this.state.processing}
                      >
                        Update
                      </button>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className='kt-portlet__footer'></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    business: state.auth.user.mainRole.business
  };
};

export default connect(mapStateToProps)(BusinessProfileComponents);
