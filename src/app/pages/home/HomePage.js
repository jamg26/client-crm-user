import React, { Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Dashboard from "./Dashboard";

import { LayoutSplashScreen } from "../../../_metronic";

const AccountComponent = lazy(() =>
  import("./account/Accounts")
)

const ContactComponent = lazy(() =>
  import("./contacts/Contacts")
)

const LeadsComponent = lazy(() =>
  import("./leads/Leads")
)

const BusinessComponent = lazy(() =>
  import("./business/Business")
)

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
          <Redirect exact from="/" to="/dashboard" />
        }
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/account" component={AccountComponent} />
        <Route path="/contacts" component={ContactComponent}/>
        <Route path="/leads" component={LeadsComponent}/>
        <Route path="/business" component={BusinessComponent}/>
      </Switch>
    </Suspense>
  );
}
