import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Modal } from 'react-bootstrap';
import Button from '@material-ui/core/Button';

class CrudButtonOPtions extends React.Component {
  constructor(props) {
    super(props);

    this.handleButton1 = this.handleButton1.bind(this);
    this.handleButton2 = this.handleButton2.bind(this);
    let button1 = this.props.buttonDisplayType;
    let button2 = 'CLOSE';
    let displayButton1 = 'block';
    if (this.props.buttonDisplayType === 'DELETE') {
      button1 = 'YES';
      button2 = 'NO';
    }

    if (this.props.buttonDisplayType === 'DETAILS') {
      displayButton1 = 'none';
    }

    this.state = {
      labelButton1: button1,
      labelButton2: button2,
      showButton1: displayButton1
    };
  }

  handleButton1(event) {
    this.props.handleButton1();
  }

  handleButton2() {
    this.props.handleButton2();
  }

  render() {
    return (
      <>
        <button
          className='btn btn-primary btn-elevate'
          onClick={this.handleButton1.bind(this)}
          style={{ display: this.state.showButton1 }}
        >
          {this.state.labelButton1}
        </button>
        {/* <button className="btn btn-danger btn-elevate" 
                onClick={this.handleButton2   .bind(this)}
        >
          {this.state.labelButton2}
        </button> */}
      </>
    );
  }
}

export default CrudButtonOPtions;
