import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import CreateBusiness from './components/RegisterComponent';
import viewBusiness from './components/ViewComponent';
export default function Business() {
    return (
        <Switch>

            <Redirect exact={true} from="/" to="/business"/>
            <Route path="/business/register" component={CreateBusiness} />
            <Route path="/business/" component={viewBusiness} />

        </Switch>
    )
}