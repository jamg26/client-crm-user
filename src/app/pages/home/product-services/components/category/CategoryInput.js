import React from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';

const CategoryInput = props => {
  return (
      <form onSubmit={props.handleSubmit}>
          <Container>
            <Row>
                <Col xs={12}>
                    <InputGroup className='mb-4'>
                        <div className="form-group mb-0">
                          
                            <FormControlLabel
                                control={<Switch name ="active" onChange={props.handleChangeActive} checked={props.data.active} />}
                                label="Is active ?"
                            />
                          
                        </div>
                    </InputGroup>
                </Col>
                <Col xs={12}>
                    <InputGroup className='mb-4'>
                        <TextField
                            onChange={props.handleChange}
                            id='categoryName'
                            type='categoryName'
                            label='Category Name'
                            className=''
                            value={props.data.categoryName}
                            variant='outlined'
                            InputLabelProps={{
                            shrink: true
                            }}
                            size='small'
                            fullWidth={true}
                            required
                        />
                    </InputGroup>
                </Col>
                <Col xs={12}>
                    <InputGroup className='mb-4'>
                        <TextField
                        onChange={props.handleChange}
                        id='note'
                        label='Note'
                        className=''
                        value={props.data.note}
                        variant='outlined'
                        fullWidth={true}
                        multiline
                        rows="5"
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
                        color='secondary'
                    >
                        Confirm
                    </Button>
                    </InputGroup>
                </Col>
            </Row>

        </Container>
      </form>
  );
};

export default CategoryInput;
