import React from 'react';
import { TextField, Switch, FormControlLabel } from '@material-ui/core';
import { Container, InputGroup, Row, Col } from 'react-bootstrap';
import ProductType from '../../../../../../partials/shared/ProductTypeDropDown';
import BusinessLocation from '../../../../../../partials/shared/BusinessLocationDropdown';
import ProductCategory from '../../../../../../partials/shared/ProductCategoryDropDown';
import ProductSubCategory from '../../../../../../partials/shared/ProductSubCategoryDropDown';

// const defaultValidation = {
//   error: false,
//   errorMessage: ''
// };

const ProductInfo = props => {
  // const [formValiation, setFormValidation] = useState(defaultValidation);

  return (
    <>
      <Container>
        <Row>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <ProductType
                currentSelectedProductTYpe={props.data.productTypeId}
                getSelectedProductType={props.handleSelection}
                businessId={props.businessLocationData.businessId}
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <BusinessLocation
                currentSelectedBusinessLocation={props.businessLocationData.businessLocationId}
                getSelectedBusinessLocation={props.handleSelection}
                businessId={props.businessLocationData.businessId}
              />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='productName'
                label='Product Name'
                className=''
                value={props.data.productName}
                variant='outlined'
                fullWidth={true}
                //error={validate?.email?.error}
                //helperText={validate?.email?.errorMessage}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
                required
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='productCode'
                label='Product Code'
                className=''
                value={props.data.productCode}
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
                type='number'
                id='productUniqueNo'
                label='Product Unique Number'
                className=''
                value={props.data.productUniqueNo}
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
                id='price'
                label='Price'
                className=''
                value={props.data.price}
                variant='outlined'
                fullWidth={true}
                type='number'
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
                required
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='minimumPrice'
                label='Minimum Price'
                className=''
                value={props.data.minimumPrice}
                type='number'
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
                required
              />
            </InputGroup>
          </Col>
          <Col xs={12}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='productDesc'
                label='Description'
                className=''
                value={props.data.productDesc}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                multiline
                rows='4'
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={6}>
            <InputGroup className='mb-4'>
              <ProductCategory
                currentSelectedProductCategory={props.data.categoryId}
                getSelectedProductCategory={props.handleSelection}
                businessId={props.businessLocationData.businessId}
              />
            </InputGroup>
          </Col>

          <Col xs={6}>
            <InputGroup className='mb-4'>
              <ProductSubCategory
                currentSelectedProductSubCategory={props.data.subCategoryId}
                getSelectedProductSubCategory={props.handleSelection}
                categoryId={props.data.categoryId}
              />
            </InputGroup>
          </Col>

          <Col xs={4}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='salesTax'
                label='Sales Tax (%)'
                className=''
                value={props.data.salesTax}
                type='number'
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                size='small'
              />
            </InputGroup>
          </Col>
          <Col xs={1}></Col>

          <Col xs={2}>
            <InputGroup className='mb-4'>
              <FormControlLabel
                control={
                  <Switch
                    name='isAddOn'
                    onChange={props.handleOption}
                    checked={props.data.isAddOn}
                  />
                }
                label='Is Add On?'
              />
            </InputGroup>
          </Col>

          <Col xs={2}>
            <InputGroup className='mb-4'>
              <FormControlLabel
                control={
                  <Switch name='isLead' onChange={props.handleOption} checked={props.data.isLead} />
                }
                label='Is Listed?'
              />
            </InputGroup>
          </Col>

          <Col xs={3}>
            <InputGroup className='mb-4'>
              <FormControlLabel
                control={
                  <Switch
                    name='canSetAnyPrice'
                    onChange={props.handleOption}
                    checked={props.data.canSetAnyPrice}
                  />
                }
                label='Can Set Any Price?'
              />
            </InputGroup>
          </Col>

          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='invoiceTerms'
                label='Invoice Term and Condition'
                className=''
                value={props.data.invoiceTerms}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                multiline
                rows='4'
                size='small'
              />
            </InputGroup>
          </Col>

          <Col xs={6}>
            <InputGroup className='mb-4'>
              <TextField
                onChange={props.handleChange}
                id='receiptTerms'
                label='Receipt Term and Condition'
                className=''
                value={props.data.receiptTerms}
                variant='outlined'
                fullWidth={true}
                InputLabelProps={{
                  shrink: true
                }}
                multiline
                rows='4'
                size='small'
              />
            </InputGroup>
          </Col>

          <Col xs={6}>
            <InputGroup className='mb-4'>
              <FormControlLabel
                control={
                  <Switch
                    name='showOnInvoice'
                    onChange={props.handleOption}
                    checked={props.data.showOnInvoice}
                  />
                }
                label='Show on Invoice?'
              />
            </InputGroup>
          </Col>

          <Col xs={6}>
            <InputGroup className='mb-4'>
              <FormControlLabel
                control={
                  <Switch
                    name='showOnReceipt'
                    onChange={props.handleOption}
                    checked={props.data.showOnReceipt}
                  />
                }
                label='Show on Receipt?'
              />
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductInfo;
