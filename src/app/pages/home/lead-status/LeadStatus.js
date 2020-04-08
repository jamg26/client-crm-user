import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ViewLeadStatus from './components/ViewLeadStatus';

export default function LeadStatus() {
  return (
    <Switch>
      <Redirect exact={true} from='/' to='/lead-status' />
      <Route path='/lead-status' component={ViewLeadStatus} />
    </Switch>
  );
}
