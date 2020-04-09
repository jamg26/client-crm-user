import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ViewLeadSource from './components/ViewLeadSource';

export default function LeadSource() {
  return (
    <Switch>
      <Redirect exact={true} from='/' to='/lead-source' />
      <Route path='/lead-source' component={ViewLeadSource} />
    </Switch>
  );
}
