import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import UserTypeDropdown from '../../../../partials/shared/UserTypeDropDown';

const InputContainer = props => {
    let error = props.formValidation.error;
    let errMsg = props.formValidation.errorMessage;
    
  return (
          <Container>
            <Row>
                <Col xs={6}>
                    <InputGroup className='mb-4'>
                        <TextField
                        onChange={props.handleChange}
                        id='firstName'
                        label='First name'
                        className=''
                        value={props.data.firstName}
                        variant='outlined'
                        fullWidth={true}
                        size='small'
                        />
                    </InputGroup>
                </Col>

                <Col xs={6}>
                    <InputGroup className='mb-4'>
                        <TextField
                        onChange={props.handleChange}
                        id='lastName'
                        label='Last name'
                        className=''
                        value={props.data.lastName}
                        variant='outlined'
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true
                        }}
                        size='small'
                        helperText={errMsg}
                        />
                    </InputGroup>
                </Col>

                <Col xs={6}>
                    <InputGroup className='mb-4'>
                        <TextField
                        onChange={props.handleChange}
                        id='email'
                        label='Email'
                        className=''
                        value={props.data.email}
                        variant='outlined'
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true
                        }}
                        size='small'
                        InputProps={{
                            readOnly: true,
                          }}
                        />
                    </InputGroup>
                </Col>

                <Col xs={6}>
                    <InputGroup className='mb-4'>
                        <TextField
                        onChange={props.handleChange}
                        id='phone'
                        label='Phone'
                        className=''
                        value={props.data.phoneNumber}
                        variant='outlined'
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true
                        }}
                        size='small'
                        />
                    </InputGroup>
                </Col>

                <Col xs={6}>
                    <InputGroup className='mb-4'>
                        <TextField
                        onChange={props.handleChange}
                        id='password'
                        label='Password'
                        className=''
                        value={props.data.password}
                        variant='outlined'
                        type="password"
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true
                        }}
                        size='small'
                        />
                    </InputGroup>
                </Col>

                <Col xs={6}>
                    <InputGroup className='mb-4'>
                        <TextField
                        onChange={props.handleChange}
                        id='confirmPassword'
                        label='Confirm Password'
                        className=''
                        type="password"
                        value={props.data.confirmPassword}
                        variant='outlined'
                        fullWidth={true}
                        helperText={errMsg}
                        error={error}
                        InputLabelProps={{
                            shrink: true
                        }}
                        size='small'
                        />
                    </InputGroup>
                </Col>





                <Col xs={12}>
                <InputGroup>
                    <Button
                        type='submit'
                        size='large'
                        className='float-right'
                        variant='contained'
                        color='primary'
                        onClick={props.handleSubmit}
                    >
                        CONFIRM
                    </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>

  );
};

export default InputContainer;
