import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';


const CommissionSetUp = (props) => {

    return (
        <Container id='comissisionSetUp'>
            <Row>
                <Col xs={6}>
                    <InputGroup className='mb-4' >
                        <TextField
                            onChange={props.handleChange}
                            id='boPart'
                            label='BO Part (%)'
                            className=''
                            value={props.data.boPart}
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
                <Col xs={6}></Col>

                <Col xs={6}>
                    <InputGroup className='mb-4' >
                        <TextField
                            onChange={props.handleChange}
                            id='affiliateFixedCommissionAmount'
                            label='Affiliate Fixed Commission Amount'
                            className=''
                            value={props.data.affiliateFixedCommissionAmount}
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
                    <InputGroup className='mb-4' >
                        <TextField
                            onChange={props.handleChange}
                            id='affiliateCommission'
                            label='Affiliate Commission (%)'
                            className=''
                            value={props.data.affiliateCommission}
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
                    <InputGroup className='mb-4' >
                        <TextField
                            onChange={props.handleChange}
                            id='paymentProcessorCharge'
                            label='Payment Processor Charge (%)'
                            className=''
                            value={props.data.paymentProcessorCharge}
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
                    <InputGroup className='mb-4' >
                        <TextField
                            onChange={props.handleChange}
                            id='transactionFees'
                            label='Transaction Fees (USD)'
                            className=''
                            value={props.data.transactionFees}
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

                <Col xs={6}></Col>
                <Col xs={3} >
                    <InputGroup style={{justifyContent:'flex-end'}}>
                        <Button
                            type='submit'
                            size='large'
                            className='float-right'
                            variant='contained'
                            color='default'
                        >
                            Cancel
                        </Button>
                    </InputGroup>
                </Col>
                <Col xs={3}>
                    <InputGroup>
                        <Button
                            type='submit'
                            size='large'
                            className='float-right'
                            variant='contained'
                            color='primary'
                        >
                            Save
                        </Button>
                    </InputGroup>
                </Col>

            </Row>
        </Container>

    )
}

export default CommissionSetUp