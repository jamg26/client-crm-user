import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CreateComponent from './components/RegisterComponent';
import ViewComponent from './components/ViewComponent';

export default function Leads() {
    return (
        <Switch>
            <Redirect exact={true} from="/" to="/leads"/>
            <Route path="/leads/register" component={CreateComponent} />
            <Route path="/leads" component={ViewComponent} />
        </Switch>
    )
}