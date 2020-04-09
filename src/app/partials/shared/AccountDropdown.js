// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";

// const AccountDropdown = (props) => {

//     let data = props.data.data;

//     const useStyles = makeStyles(theme => ({
//         formControl: {
//             minWidth: '100%',
//         },
//     }));

//   const classes = useStyles();

//   const handleSelectAccount = (events) => {
//       console.log(events)
//   }

//   return (
//     <FormControl className={classes.formControl}>
//     <InputLabel id="labelIndustry">Accounts</InputLabel>
//     <Select
//         labelId="labelIndustry"
//         onChange={ () => handleSelectAccount.bind() } 
//     >
//         <MenuItem value="">
//             <em>Select Parent Account</em>
//         </MenuItem>
//         { data.map(value => <MenuItem key={value.id} value={value.id}>{value.accountName}</MenuItem>) }
        
//     </Select>
//   </FormControl>
//   )
 
// }




import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import { getAccountList } from '../../services/account.service';


class AccountDropdown extends React.Component {
    
    constructor(props){
        super(props);
        this.handleSelectAccount = this.handleSelectAccount.bind(this);
        this.state = {
            accountData : [],
            accountId: props.currentAccount.accountId,
            disableSelection: props.readOnly
        }
    }

    getAccount() {
        getAccountList()
          .then(results => this.setState({ accountData: results.data }))
          .catch(err => console.log(err));
    }

    componentDidMount(){
        this.getAccount();
    }
    
    handleSelectAccount(event){
        this.setState({ accountId: event.target.value });
        this.props.getSelectedAccount(event.target.value);
    }

    render(){
        return (
            <FormControl style={{ width: '100%' }}>
            <InputLabel id="labelIndustry">Accounts</InputLabel>
            <Select labelId="labelIndustry" onChange={ this.handleSelectAccount.bind(this) } value={this.state.accountId} inputProps={{ readOnly: this.state.disableSelection }}>
                <MenuItem value="0">
                    <em>Select Parent Account</em>
                </MenuItem>
                { this.state.accountData.map(value => <MenuItem key={value.id} value={value.id}>{value.accountName}</MenuItem>) }
                
            </Select>
          </FormControl>
          )
    }

}

export default AccountDropdown;