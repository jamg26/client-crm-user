import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import viewUserTypes from './components/viewUserTypes';
export default function Accounts() {
  return (
    <Switch>
      <Redirect exact={true} from='/' to='/usertypes' />
      <Route path='/usertypes' component={viewUserTypes} />
    </Switch>
  );
}
