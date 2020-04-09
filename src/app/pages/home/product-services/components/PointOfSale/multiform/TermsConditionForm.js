import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const defaultValidation = {
    'error': false,
    'errorMessage': ''
}

const form = {
    termsConditions: ''
}

const TermsConditionForm = () => {

    const [formValiation, setFormValidation] = useState(defaultValidation);
    const [state, setState] = useState(form);

    const handleChange = (e) => {
        setState({...state,[e.target.id]: e.target.value});
    }

    return (
        <>
        <Container>
            <Row>
                <Col xs={12}>
                        <InputGroup className='mb-4'>
                            <TextField
                                 onChange={handleChange}
                                 multiline
                                 variant="outlined"
                                 rows="4"
                                 id='termsConditions'
                                 label='Terms and Condition'
                                 className=''
                                 value={state.termsConditions}
                                 variant='outlined'
                                 fullWidth={true}
                                 InputLabelProps={{
                                     shrink: true
                                 }}
                                />
                        </InputGroup>
                    </Col>
            </Row>
        </Container>
        </>
    )
}

export default TermsConditionForm