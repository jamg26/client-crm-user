import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
// import { getAccountList } from '../../services/account.service';


class ProductTypeDropdown extends React.Component {
    
    constructor(props){
        super(props);
        this.handleSelectProductType = this.handleSelectProductType.bind(this);
        this.state = {
            accountData : [],
            productTypeId: props.currentSelectedProductTYpe,
        }
    }

    // getAccount() {
    //     getAccountList()
    //       .then(results => this.setState({ accountData: results.data }))
    //       .catch(err => console.log(err));
    // }

    // componentDidMount(){
    //     this.getAccount();
    // }
    
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
                    <MenuItem value="product">
                        <em>Product</em>
                    </MenuItem>
                    <MenuItem value="service">
                        <em>Service</em>
                    </MenuItem>
                    
                </Select>
          </FormControl>
          )
    }

}

export default ProductTypeDropdown;