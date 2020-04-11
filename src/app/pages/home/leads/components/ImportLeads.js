import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Select, MenuItem, InputLabel, FormControl, CircularProgress, Button } from '@material-ui/core';
import { getLeadSourceList } from '../../../../services/leadSource.service';
import { importCVS } from '../../../../services/leads.service';

const ImportLeads = (props) => {

    const [state,setState] = useState([]);
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await getLeadSourceList(props.id);
            setState(response.data);
        };
        fetchData();
    }, []);

    // const notify = data => {
    //     if (data.success) {
    //       toast.success(data.message);
    //     } else {
    //       toast.error(data.message);
    //     }
    // };


    const handleSelectLeadSource = (e) => {
        setInput(e.target.value)
    }

    const onChangeHandler = (e) => {
        e.preventDefault()
        setFile(e.target.files[0])
    }

    const importSubmit = async (e) => {
        e.preventDefault();
        let data = {
            file:file,
            leadSoruceId: input,
            BusinessId: props.id
        };
        try {
            const importFile = await importCVS(data)
            props.importLeadSubmitHandler(importFile)
        } catch(err){
            props.importLeadSubmitHandler(false)
        }
    }
    

    return (
        <>
            <FormControl margin='dense' variant='outlined' style={{ width: '100%' }}>
                <InputLabel id='labelLeadSource'>Lead Source</InputLabel>
                <Select
                    labelId='labelLeadSource'
                    value={input}
                    onChange={handleSelectLeadSource}
                    label='Lead Source'
                    name='leadSourceId'
                >
                    <MenuItem><em>Select Lead Source</em></MenuItem>
                    {state.map(value => (
                        <MenuItem key={value.id} value={value.id}>{value.leadSourceName}</MenuItem>
                ))}
                </Select>
                <input
                    accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                    style={{display: 'none' }}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={onChangeHandler}
                />
                <label htmlFor="contained-button-file">
                    <Button 
                        variant="outlined"
                        color='secondary'
                        component="span"
                        className='mb-2'
                        size='large'
                        style={{marginTop: "10px"}}>
                            Upload File
                    </Button> {file ? file.name : ''}
                </label> 
                Please upload csv to import leads
            </FormControl>
            <Button 
                variant="contained"
                color='secondary'
                component="span"
                className='mb-2'
                size='large'
                style={{marginTop: "10px"}}
                onClick={importSubmit}
                >
                    Import
            </Button>
        </>
    );
  }

export default ImportLeads;



                
                