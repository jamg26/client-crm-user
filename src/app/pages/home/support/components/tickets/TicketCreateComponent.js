import React from 'react';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import {
    ListItem,
    ListItemText,
    Grid,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    CircularProgress,
    Divider,
    List,
    Typography,
    IconButton,
    Button,
    Snackbar
}  from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { green } from '@material-ui/core/colors';
import { getFileName } from '../../../../../../_metronic/utils/utils';
import { awsServices } from '../../../../../services/aws.service';
import { saveAttachment, getAttachment, getCommentById, saveComment, saveNewTicketSupport } from '../../../../../services/support.service';

const classes = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        textAlign: 'center'
    },
    wrapper: {
        position: 'relative',
        width:'100%'
    },
    buttonProgress: {
        color: green[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    },
})

class TicketCreateComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tempAttachment : [],
            loading: false,
            isUploaded: false,
            description: "",
            subject: "",
            user : this.props.user,
            open:false,
            message:""
        }
        this.class = classes();
        // this.onUpload = this.onUpload.bind(this);
        this.descriptionHandler = this.descriptionHandler.bind(this);
        this.subjectHandler = this.subjectHandler.bind(this);
        this.saveCommentHandler = this.saveCommentHandler.bind(this);
        console.log(this.state)
    }

    descriptionHandler(event){
        this.setState({ description: event.target.value})
    }

    subjectHandler(event){
        this.setState({ subject: event.target.value});
    }

    saveCommentHandler(){
        this.saveTicketFunction()
            .then((result) => {
                this.setState({
                    description: "",
                    subject: "",
                    tempAttachment: [],
                    open:true,
                    message: 'Ticket Saved'
                })
            }).catch((err) => {
                console.log(err)
            })
            
            setTimeout(() => this.setState({open:false,message: ''}),5000)
    }

    async saveTicketFunction() {
        let ticket = await this.saveTicketSupport();
        let upload = await this.uploadToAws();
        if (upload){
            let attachments = await this.saveAttachmentToTicket({upload,ticket});
        }
        return true;
    }

    saveTicketSupport(){
        return new Promise((resolve, reject) =>{
            let obj = {
                businessId : this.state.user.id,
                userId: this.state.user.mainRole.business.id,
                subject: this.state.subject,
                description: this.state.description
            };
            saveNewTicketSupport(obj)
                .then((result) => resolve(result.data))
                .catch((err) => reject(err))
        })
    }

    uploadToAws(){
        return new Promise((resolve, reject) =>{
            if (this.state.selectedFile) {
                awsServices(this.state.selectedFile)
                    .then(results => resolve(results))
                    .catch(err => reject(err))
            } else {
                resolve(false)
            }
        })    
    }

    saveAttachmentToTicket(data){
        return new Promise((resolve, reject) =>{
            let file = {
                supportTicketId : data.ticket.id,
                filePath: data.upload.location,
                fileName: getFileName(data.upload.location),
                userId: this.state.user.id
            };
            saveAttachment(file)
                .then((response) => resolve(response))
                .catch((err) => reject(err))
        })
    }

    onChangeHandler=event=>{
        let obj = {
            name : event.target.files[0].name
        };
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
          isUploaded : true,
          isTemp: true,
          tempAttachment: [...this.state.tempAttachment, obj ]
        });
    }

    renderTempAttachment(){
        if (this.state.tempAttachment.length >= 1) {
            return (
                <>
                    <ListItem>
                        <Grid container spacing={3} justify="space-between">
                            <Grid item xs={6}><ListItemText primary="Filename" /></Grid>
                            <Grid item xs={6}><ListItemText primary="Action" /></Grid>
                        </Grid>
                    </ListItem>
                    <Divider light />
                    { this.state.tempAttachment.map((item,key) =>
                        <ListItem key={key}>
                        <Grid container spacing={3} justify="space-between">
                            <Grid item xs={6}><ListItemText primary={item.name} /></Grid>
                            <Grid item xs={6}>
                                <a href="javascript_void(0)">
                                    <IconButton aria-label="download">
                                        <GetAppIcon fontSize="small"/>
                                    </IconButton>
                                </a>
                                <IconButton aria-label="Delete">
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        </ListItem>
                    )}
                </>
            )
        } else {
            return(
                <>
                <ListItem>No Attachments</ListItem>
                </>
            )
        }
    }


    render() {
        return (
        <div className="kt-portlet kt-portlet--height-fluid">
        <div className="kt-portlet__head">
          <div className="kt-portlet__head-label">
            <h3 className="kt-portlet__head-title">
                Create New Ticket 
            </h3>
          </div>
          {/* <SupportTicketDropdown handleClose={this.handleCloseEvent}/> */}
        </div>
        <div className="kt-portlet__body">
          <div className="kt-widget4">
                <Form>
                    <Form.Group controlId="subject">
                        <Form.Label>Subject</Form.Label>
                            <Form.Control type="text" onChange={this.subjectHandler} value={this.state.subject}/>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows="3" onChange={this.descriptionHandler} value={this.state.description}/>
                    </Form.Group>
                    <Form.Group controlId="attachment">
                    <Grid container spacing={3} justify="center">
                            <Grid item xs={12}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>Attachments</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <Grid container spacing={3} justify="space-between">
                                        <Grid item xs={12}>
                                            <Typography>
                                                Note:Upload attachment extension allow:.pdf, .xlsx, .xls, .png, .doc, .docx, .jpg, .jpeg, .csv, .txt
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <input 
                                                style={{display: "none"}}
                                                id="contained-button-file"
                                                type="file"
                                                onChange={this.onChangeHandler}
                                            />
                                            <label htmlFor="contained-button-file">
                                                <Button variant="contained" color="default" component="span" startIcon={<CloudUploadIcon />}>
                                                    Upload
                                                </Button>
                                            </label>
                                        </Grid>
                                        <Grid item xs={12}>
                                            
                                        <List component="nav" className={classes.root} aria-label="Mailbox folders">
                                            { this.renderTempAttachment() }
                                        </List>
                                        </Grid>
                                        {/* <Grid item xs={12}>
                                            <div style={this.class.wrapper}>
                                                { this.state.isUploaded &&
                                                    <Button 
                                                        variant="contained"
                                                        color="primary"
                                                        disableElevation
                                                        style={this.class.wrapper}
                                                        disabled={this.state.loading}
                                                        onClick={this.onUpload}>
                                                        Save
                                                    </Button>
                                                }
                                                {this.state.loading && <CircularProgress size={24} style={this.class.buttonProgress}/>}
                                            </div>
                                        </Grid> */}
                                    </Grid>
                                </ExpansionPanelDetails>
                                </ExpansionPanel>
                            </Grid>
                        </Grid>
                    </Form.Group>
                    <Form.Group controlId="savebtn">
                        <Button variant="contained" color="primary" onClick={ this.saveCommentHandler }>Save</Button>
                    </Form.Group>
                </Form>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={this.state.open}
                    message={this.state.message}
                />
          </div>
        </div>
      </div>
        )
    }
}

const mapStateToProps = (state) => {
	return {
		user : state.auth.user
	}
}

export default connect(mapStateToProps)(TicketCreateComponent);