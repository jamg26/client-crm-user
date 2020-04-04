import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const defaultValidation = {
    'error': false,
    'errorMessage': ''
}

const form = {
    firstName : '',
    lastName: '',
    email: '',
    phoneNumber: ''
}

const CustomerDetailsForm = () => {

    const [formValiation, setFormValidation] = useState(defaultValidation);
    const [state, setState] = useState(form);

    const handleChange = (e) => {
        setState({...state,[e.target.id]: e.target.value});
    }

    return (
        <>
        <Container>
            <Row>
                <Col xs={6}>
                        <InputGroup className='mb-4'>
                            <TextField
                                onChange={handleChange}
                                id='firstName'
                                label='First name'
                                className=''
                                value={state.firstName}
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
                            onChange={handleChange}
                            id='lastName'
                            label='Last name'
                            className=''
                            value={state.lastName}
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
                    <InputGroup className='mb-4' >
                        <TextField
                            onChange={handleChange}
                            id='email'
                            label='Email'
                            className=''
                            value={state.email}
                            variant='outlined'
                            fullWidth={true}
                            //error={validate?.email?.error}
                            //helperText={validate?.email?.errorMessage}
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
                        onChange={handleChange}
                        id='phoneNumber'
                        label='Phone number'
                        className=''
                        value={state.phoneNumber}
                        variant='outlined'
                        fullWidth={true}
                        InputLabelProps={{
                            shrink: true
                        }}
                        size='small'
                        />
                    </InputGroup>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default CustomerDetailsForm