import React, { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from './Dashboard';

import { LayoutSplashScreen } from '../../../_metronic';

const AccountComponent = lazy(() => import('./account/Accounts'));

const ContactComponent = lazy(() => import('./contacts/Contacts'));

const LeadsComponent = lazy(() => import('./leads/Leads'));

const BusinessComponent = lazy(() => import('./business/Business'));

const SupportComponent = lazy(() => import('./support/SupportComponent'));

const InviteUserComponent = lazy(() => import('./inviteuser/inviteuser'));

const userTypes = lazy(() => import('./usertypes/UserTypes'));

const PasswordComponent = lazy(() => import('./myaccount/password'));

const ScheduledCalls = lazy(() => import('./scheduled-calls/ScheduledCalls'));

const pointOfSaleComponent = lazy(() =>
  import('./product-services/PointOfSaleComponents')
);

const ProductCategoryComponent = lazy(() =>
  import('./product-services/Category')
);

const ProductComponent = lazy(() => import('./product-services/Products'));

const LeadSource = lazy(() => import('./lead-source/LeadSource'));

const LeadStatus = lazy(() => import('./lead-status/LeadStatus'));

export default function HomePage() {
  // useEffect(() => {
  //   console.log('Home page');
  // }, []) // [] - is required if you need only one call
  // https://reactjs.org/docs/hooks-reference.html#useeffect

  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {
          /* Redirect from root URL to /dashboard. */
          <Redirect exact from='/' to='/dashboard' />
        }

        <Route path='/dashboard' component={Dashboard} />
        <Route path='/account' component={AccountComponent} />
        <Route path='/contacts' component={ContactComponent} />
        <Route path='/leads' component={LeadsComponent} />
        <Route path='/business' component={BusinessComponent} />
        <Route path='/supports' component={SupportComponent} />
        <Route path='/invite-user' component={InviteUserComponent} />
        <Route path='/change-password' component={PasswordComponent} />
        <Route path='/usertypes' component={userTypes} />
        <Route path='/scheduled-calls' component={ScheduledCalls} />
        <Route path='/product-category' component={ProductCategoryComponent} />
        <Route path='/products' component={ProductComponent} />
        {/* <Redirect to='/error/error-v1' /> */}
        <Route path='/point-of-sale' component={pointOfSaleComponent} />
        <Route path='/lead-source' component={LeadSource} />
        <Route path='/lead-status' component={LeadStatus} />
        {/* <Redirect to='/error/error-v1' /> */}
      </Switch>
    </Suspense>
  );
}
