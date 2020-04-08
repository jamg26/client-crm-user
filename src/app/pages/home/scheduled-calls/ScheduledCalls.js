import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ViewScheduledCalls from './components/viewScheduledCalls';

export default function Accounts() {
  return (
    <Switch>
      <Redirect exact={true} from='/' to='/scheduled-calls' />
      <Route path='/scheduled-calls' component={ViewScheduledCalls} />
    </Switch>
  );
}
