import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import ReactDOM from 'react-dom';
import { Row, Col, Container } from 'react-bootstrap';

class BusinessLocationCards extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            data : props.data,
            classes : props.cardStyle
        } 
        this.showDeleteModal = this.showDeleteModal.bind(this)
        this.showEditModal = this.showEditModal.bind(this)
    }

    showDeleteModal (event) {
       let id = event.currentTarget.dataset.id
       this.props.onDeleteBusinessLoc(id);
       debugger;
    }

    showEditModal (event) {
       let data = event.currentTarget.dataset.id
       this.props.onEditBusinessLoc(data);

    }

    handleUpdate (event) {
      let id = {id:event.currentTarget.dataset.id}

    }
    debugger;
    render(){

        return (
          <Row>
            
            { this.state.data.map(value => 
                
                  <Card  variant="outlined" className={this.state.classes.root}>
                      <CardContent>
                          <Typography variant="h5" component="h2">
                            {value.businessLocationName}
                          </Typography>
                          <Typography  color="textSecondary" className={this.state.classes.pos}>
                            {value.addressLine}
                          </Typography>
                          <Typography variant="body2" component="p">
                             {value.city} {value.state} {value.country} {value.zipCode}
                          </Typography>
                      </CardContent>
                      <CardActions>

                            <IconButton aria-label="edit" data-id={value.id}  onClick={this.showEditModal.bind(value)} data-two={value.name}>
                                <EditIcon fontSize="small" />
                            </IconButton>
                            
                            <IconButton aria-label="delete" data-id={value.id} onClick={this.showDeleteModal.bind(this)}>
                                <DeleteIcon fontSize="small" />
                            </IconButton>
                      </CardActions>
                  </Card>

                ) 
            }

          </Row>
            
          )
    }

}

export default BusinessLocationCards;