import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { getProductTypeList } from '../../services/productType.service';


class ProductTypeDropdown extends React.Component {
    
    constructor(props){
        super(props);
        this.handleSelectProductType = this.handleSelectProductType.bind(this);
        this.state = {
            productTypeData : [],
            productTypeId: props.currentSelectedProductTYpe,
        }
    }
    
    getProductType() {
        getProductTypeList(this.props.businessId)
          .then(results => this.setState({ productTypeData: results.data }))
          .catch(err => console.log(err));
    }

    componentDidMount(){
        this.getProductType();
    }
    
    handleSelectProductType(event){
        this.setState({ accountId: event.target.value });
        this.props.getSelectedProductType(event);
    }

    render(){
        return (
            <FormControl variant="outlined" style={{ width: '100%' }}>
                <InputLabel id="labelProductType">Product Type</InputLabel>
                <Select 
                    labelId="labelProductType" 
                    onChange={ this.handleSelectProductType.bind(this) } 
                    value={this.props.currentSelectedProductTYpe} 
                    name='productTypeId'
                    label="Product Type"
                >
                    <MenuItem value="0">
                        <em>Select Product Type</em>
                    </MenuItem>
                    { this.state.productTypeData.map(value => 
                        <MenuItem key={value.id} value={value.id} >
                            {value.productTypeName}
                        </MenuItem>) 
                    }
                    
                </Select>
          </FormControl>
          )
    }

}

export default ProductTypeDropdown;