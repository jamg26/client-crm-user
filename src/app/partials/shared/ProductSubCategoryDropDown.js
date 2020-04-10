import React from 'react';
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText
} from '@material-ui/core';
//import { makeStyles } from '@material-ui/core/styles';
import { getSubCategoryList } from '../../services/productCategory.service';

class ProductSubCategoryDropDown extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelectProductSubCategory = this.handleSelectProductSubCategory.bind(
      this
    );
    this.state = {
      ProductSubCategory: [],
      categoryId: props.categoryId
    };
  }

  componentWillReceiveProps(prevProps) {
    if (prevProps.categoryId !== this.state.categoryId) {
      this.setState({
        categoryId: prevProps.categoryId
      });
      this.getProductSubCategory();
    }
  }

  getProductSubCategory() {
    if (
      typeof this.state.categoryId !== 'undefined' &&
      this.state.categoryId !== '0'
    ) {
      getSubCategoryList(this.state.categoryId)
        .then(results => this.setState({ ProductSubCategory: results.data }))

        .catch(err => console.log(err));
    }
  }

  handleSelectProductSubCategory(event) {
    this.props.getSelectedProductSubCategory(event);
  }
  render() {
    return (
      <FormControl variant='outlined' style={{ width: '100%' }}>
        <InputLabel id='labelProductSubCategory'>
          Product Sub Category
        </InputLabel>
        <Select
          labelId='labelProductSubCategory'
          value={this.props.currentSelectedProductSubCategory}
          onChange={this.handleSelectProductSubCategory.bind(this)}
          label='Product Sub Category'
          name='subCategoryId'
        >
          <MenuItem value='0'>
            <em>Select Product Sub Category</em>
          </MenuItem>
          {this.state.ProductSubCategory.map(value => (
            <MenuItem key={value.id} value={value.id}>
              {value.subCategoryName}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText></FormHelperText>
      </FormControl>
    );
  }
}

export default ProductSubCategoryDropDown;
