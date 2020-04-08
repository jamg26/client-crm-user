import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch, FormControlLabel, Typography, FormControl, FormLabel, RadioGroup, Radio } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import AddIcon from '@material-ui/icons/Add';

const defaultValidation = {
    'error': false,
    'errorMessage': ''
}


const Agents = (props) => {
    const [formValiation, setFormValidation] = useState(defaultValidation);

    return (
        <>
        <Container>
            <Row>
                <Col xs={5}>
                     <Typography variant="h6" gutterBottom style={{marginBottom: '1.2em'}}> SET TIERED COMMISSION FOR OPENER </Typography>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={2}><Typography variant="h6">Type:</Typography></Col>
                                <Col xs={5}>
                                    <RadioGroup aria-label="Type" name="type" style={{flexDirection: 'row'}}>
                                        <FormControlLabel value="%" control={<Radio color="primary" />} label="%" />
                                        <FormControlLabel value="$" control={<Radio color="primary" />} label="$"/>
                                    </RadioGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} style={{border:'1px solid #e4e4e6', margin: '0 0px 20px 5px'}}>
                            <Typography variant="h6" gutterBottom style={{marginBottom: '1.2em'}}> Tire 1 </Typography>
                            <Row>
                                <Col xs={5}>
                                    <InputGroup className='mb-4' >
                                        <TextField
                                            onChange={props.handleChange}
                                            id='oFrom'
                                            label='FROM'
                                            className=''
                                            value={props.data.oFrom}
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
                                <Col xs={5}>
                                    <InputGroup className='mb-4' >
                                        <TextField
                                            onChange={props.handleChange}
                                            id='oTo'
                                            label='To'
                                            className=''
                                            value={props.data.oTo}
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
                                <Col xs={2}><InputGroup className='mb-4' ><Typography variant="h6" gutterBottom >(SALES) </Typography></InputGroup></Col>
                                <Col xs={5}>
                                    <InputGroup className='mb-4' >
                                        <TextField
                                            onChange={props.handleChange}
                                            id='pay'
                                            label='Pay'
                                            className=''
                                            value={props.data.pay}
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
                                <Col xs={7}><Typography variant="h6" gutterBottom >(COMMISSION) </Typography></Col>
                            </Row>
                        </Col>

                        <Col xs={12}>
                            <Row>
                                <Col xs={7}>
                                    <InputGroup className='mb-4' >
                                        <TextField
                                            onChange={props.handleChange}
                                            id='payRemainingSales'
                                            label='And Pay Reamining Sales At'
                                            className=''
                                            value={props.data.payRemainingSales}
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
                                <Col xs={5}><InputGroup className='mb-4' ><Typography variant="h6" gutterBottom >COMMISSION</Typography></InputGroup></Col>
                            </Row>
                        </Col>

                        <Col xs={12}>
                            <InputGroup className='mb-4' >
                                <Button color="primary" startIcon={<AddIcon />}>Add another Tier</Button>

                            </InputGroup>
                        </Col>
                    </Row>
                </Col>
                <Col xs={1}></Col>
                <Col xs={5}>
                     <Typography variant="h6" gutterBottom style={{marginBottom: '1.2em'}}> SET TIERED COMMISSION FOR CLOSER </Typography>
                    <Row>
                        <Col xs={12}>
                            <Row>
                                <Col xs={2}><Typography variant="h6">Type:</Typography></Col>
                                <Col xs={5}>
                                    <RadioGroup aria-label="Type" name="type" style={{flexDirection: 'row'}}>
                                        <FormControlLabel value="%" control={<Radio color="primary" />} label="%" />
                                        <FormControlLabel value="$" control={<Radio color="primary" />} label="$"/>
                                    </RadioGroup>
                                </Col>
                            </Row>
                        </Col>
                        <Col xs={12} style={{border:'1px solid #e4e4e6', margin: '0 0px 20px 5px'}}>
                            <Typography variant="h6" gutterBottom style={{marginBottom: '1.2em'}}> Tire 1 </Typography>
                            <Row>
                                <Col xs={5}>
                                    <InputGroup className='mb-4' >
                                        <TextField
                                            onChange={props.handleChange}
                                            id='cFrom'
                                            label='FROM'
                                            className=''
                                            value={props.data.From}
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
                                <Col xs={5}>
                                    <InputGroup className='mb-4' >
                                        <TextField
                                            onChange={props.handleChange}
                                            id='cTo'
                                            label='To'
                                            className=''
                                            value={props.data.oTo}
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
                                <Col xs={2}><InputGroup className='mb-4' ><Typography variant="h6" gutterBottom >(SALES) </Typography></InputGroup></Col>
                                <Col xs={5}>
                                    <InputGroup className='mb-4' >
                                        <TextField
                                            onChange={props.handleChange}
                                            id='cpay'
                                            label='Pay'
                                            className=''
                                            value={props.data.pay}
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
                                <Col xs={7}><Typography variant="h6" gutterBottom >(COMMISSION) </Typography></Col>
                            </Row>
                        </Col>

                        <Col xs={12}>
                            <Row>
                                <Col xs={7}>
                                    <InputGroup className='mb-4' >
                                        <TextField
                                            onChange={props.handleChange}
                                            id='cpayRemainingSales'
                                            label='And Pay Reamining Sales At'
                                            className=''
                                            value={props.data.payRemainingSales}
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
                                <Col xs={5}><InputGroup className='mb-4' ><Typography variant="h6" gutterBottom >COMMISSION</Typography></InputGroup></Col>
                            </Row>
                        </Col>

                        <Col xs={12}>
                            <InputGroup className='mb-4' >
                                <Button color="primary" startIcon={<AddIcon />}>Add another Tier</Button>

                            </InputGroup>
                        </Col>
                    </Row>
                </Col>


            </Row>
        </Container>
        </>
    )
}

export default Agents