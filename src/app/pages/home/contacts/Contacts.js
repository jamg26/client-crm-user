import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CreateComponent from './components/RegisterComponent';
import ViewComponent from './components/ViewComponent';

export default function Contacts() {
    return (
        <Switch>
            <Redirect exact={true} from="/" to="/contacts"/>
            <Route path="/contacts/register" component={CreateComponent} />
            <Route path="/contacts" component={ViewComponent} />
        </Switch>
    )
}