import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CreateAccount from './components/RegisterComponent';
import viewAccount from './components/ViewComponent';
export default function Accounts() {
    return (
        <Switch>

            <Redirect exact={true} from="/" to="/account"/>
            <Route path="/account/register" component={CreateAccount} />
            <Route path="/account/" component={viewAccount} />

        </Switch>
    )
}