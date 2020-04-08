import React, { useState, useEffect } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import ProductType from '../../../../../../partials/shared/ProductTypeDropDown';
import BusinessLocation from '../../../../../../partials/shared/BusinessLocationDropdown';
import ProductCategory from '../../../../../../partials/shared/ProductCategoryDropDown';
import ProductSubCategory from '../../../../../../partials/shared/ProductSubCategoryDropDown';

const defaultValidation = {
    'error': false,
    'errorMessage': ''
}


const CommisionSetupForm = (props) => {
    const [formValiation, setFormValidation] = useState(defaultValidation);

    return (
        <>
            CommisionSetupForm
        </>
    )
}

export default CommisionSetupForm