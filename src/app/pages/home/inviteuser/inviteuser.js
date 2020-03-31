import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import viewAccount from './components/ViewComponent';
export default function Accounts() {
    return (
        <Switch>

            <Redirect exact={true} from="/" to="/invite-user"/>
            <Route path="/invite-user/" component={viewAccount} />

        </Switch>
    )
}