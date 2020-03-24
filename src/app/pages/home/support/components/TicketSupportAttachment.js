import React from 'react';
import { ListItem , ListItemText, Divider, Grid, IconButton} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import GetAppIcon from '@material-ui/icons/GetApp';
import { getFileName } from '../../../../../_metronic/utils/utils';
import { deleteAttachment, getAttachment } from '../../../../services/support.service';

class TicketSupportAttachment extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            data : null
        }
        this.deleteAttachmentHandler = this.deleteAttachmentHandler.bind(this);
    }

    componentDidMount(){
        this.setState({data: this.props.data});
    }

    UNSAFE_componentWillReceiveProps (){
        this.setState({data: this.props.data});
    }

    downloadFile(file){
        const response = {
            file: file,
        };
        window.location.href = response.file;
    }

    async deleteAttachmentHandler(id){
       let deleteData = await deleteAttachment(id);
       let getdata = await getAttachment(deleteData.data.id);
       this.props.onAttachmentChanged(getdata.data);
    }

    renderAttachments() {
        if (this.state.data){
           return (
                <>
                     <ListItem>
                        <Grid container spacing={3} justify="space-between">
                            <Grid item xs={6}><ListItemText primary={this.state.data.fileName ? this.state.data.fileName : getFileName(this.state.data.filePath)} /></Grid>
                            <Grid item xs={6}>
                                <a href={this.state.data.filePath}
                                    download={this.state.data.filePath} target="_blank">
                                    <IconButton aria-label="download">
                                        <GetAppIcon fontSize="small"/>
                                    </IconButton>
                                </a>
                                <IconButton aria-label="Delete" onClick={() => this.deleteAttachmentHandler(this.state.data.id)}>
                                    <DeleteIcon fontSize="small" />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </ListItem>
                    <Divider light />
                </>
           )
        }
    }

    render() {

        return (
            <>
                { this.renderAttachments() }
            </>
        )
    }
}

export default TicketSupportAttachment;