import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import UserTypeDropdown from '../../../../partials/shared/UserTypeDropDown';


const InputContainer = props => {
    let validate = props.formValidation

  return (
          <Container>
            <Row>
                <Col xs={12}>
                    <InputGroup className='mb-4'>
                        <UserTypeDropdown
                            currentUserType={{
                              businessUserRoleId: props.businessUserRoleId
                            }}
                            getSelectedUserType={props.handleSelectUserType}
                            businessId={props.data.businessId}
                            formValidation={props.formValidation}
                          />
                    </InputGroup>
                </Col>
                <Col xs={4}>
                    <InputGroup className='mb-4' >
                        <TextField
                        onChange={props.handleChange}
                        id='email'
                        label='Email'
                        className=''
                        value={props.data.email}
                        variant='outlined'
                        fullWidth={true}
                        error={validate?.email?.error}
                        helperText={validate?.email?.errorMessage}
                        InputLabelProps={{
                            shrink: true
                        }}
                        size='small'
                        />
                    </InputGroup>
                </Col>
                <Col xs={4}>
                    <InputGroup className='mb-4'>
                        <TextField
                        onChange={props.handleChange}
                        id='firstName'
                        label='First name'
                        className=''
                        value={props.data.firstName}
                        variant='outlined'
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true
                        }}
                        size='small'
                        />
                    </InputGroup>
                </Col>
                <Col xs={4}>
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
                        onClick={(e) => {
                            props.handleSubmit(e)
                        }}
                    >
                        Invite
                    </Button>
                    </InputGroup>
                </Col>
            </Row>
        </Container>

  );
};

export default InputContainer;
