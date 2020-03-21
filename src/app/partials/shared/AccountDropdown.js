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

class AccountDropdown extends React.Component {
    
    constructor(props){
        super(props);
        this.handleSelectAccount = this.handleSelectAccount.bind(this);
        this.state = {
            data : [],
            accountId: props.currentAccount.accountId,
            disableSelection: props.readOnly
        }

        this.props.onSelecAccount({accountId:props.currentAccount.accountId, accountName:props.currentAccount.account.accountName});
    }

    componentDidMount(){
        this.setState({
            data : this.props.data.data
        })
    }
    
    handleSelectAccount(event){
        let accountId  = event.target.value;
        const accountData = this.state.data;
        const findAccount = accountData.find(account => account.id === accountId);
        this.setState({accountId:accountId, accountName:findAccount.accountName});
        this.props.onSelecAccount({accountId:accountId, accountName:findAccount.accountName});
    }

    render(){
        return (
            <FormControl >
            <InputLabel id="labelIndustry">Accounts</InputLabel>
            <Select labelId="labelIndustry" onChange={ this.handleSelectAccount.bind(this) } value={this.state.accountId} inputProps={{ readOnly: this.state.disableSelection }}>
                <MenuItem value="0">
                    <em>Select Parent Account</em>
                </MenuItem>
                { this.state.data.map(value => <MenuItem key={value.id} value={value.id}>{value.accountName}</MenuItem>) }
                
            </Select>
          </FormControl>
          )
    }

}

export default AccountDropdown;