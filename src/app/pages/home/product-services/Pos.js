import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import viewPos from './components/pos/ViewComponent';
export default function Pos() {
    return (
        <Switch>

            <Redirect exact={true} from="/" to="/POS"/>
            <Route path="/POS/" component={viewPos} />

        </Switch>
    )
}