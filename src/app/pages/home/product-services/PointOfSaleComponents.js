import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ViewPointOfSaleComponents from './components/PointOfSale/ViewPointOfSaleComponents';

export default function PointOfSaleComponents() {
    return (
        <Switch>
            <Redirect exact={true} from="/" to="/point-of-sale"/>
            <Route path="/point-of-sale" component={ViewPointOfSaleComponents} />
        </Switch>
    )
}