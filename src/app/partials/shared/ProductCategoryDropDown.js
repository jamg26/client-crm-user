import React from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText
} from '@material-ui/core';
//  import { makeStyles } from '@material-ui/core/styles';
import { getCategoryList } from '../../services/productCategory.service';

class ProductCategoryDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectProductCategory = this.handleSelectProductCategory.bind(
      this
    );
    this.state = {
      ProductCategory: [],
      businessId: props.businessId
    };
  }

  componentDidMount() {
    this.getProductCategory();
  }

  getProductCategory() {
    getCategoryList(this.state.businessId)
      .then(results => this.setState({ ProductCategory: results.data }))
      .catch(err => console.log(err));
  }

  handleSelectProductCategory(event) {
    this.props.getSelectedProductCategory(event);
  }
  render() {
    return (
      <FormControl variant='outlined' style={{ width: '100%' }}>
        <InputLabel id='labelProductCategory'>Product Category</InputLabel>
        <Select
          labelId='labelProductCategory'
          value={this.props.currentSelectedProductCategory}
          onChange={this.handleSelectProductCategory.bind(this)}
          label='Product Category'
          name='categoryId'
        >
          <MenuItem value='0'>
            <em>Select Product Category</em>
          </MenuItem>
          {this.state.ProductCategory.map(value => (
            <MenuItem key={value.id} value={value.id}>
              {value.categoryName}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    );
  }
}

export default ProductCategoryDropDown;
