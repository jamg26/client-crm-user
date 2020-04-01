import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import viewPassword from './passwordcomponents/ViewComponent';
export default function Business() {
    return (
        <Switch>

            <Redirect exact={true} from="/" to="/change-password"/>
            <Route path="/change-password/" component={viewPassword} />

        </Switch>
    )
}