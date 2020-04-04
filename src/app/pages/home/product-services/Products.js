import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import viewProduct from './components/product/ViewComponent';
export default function Products() {
    return (
        <Switch>

            <Redirect exact={true} from="/" to="/product-list"/>
            <Route path="/product-list/" component={viewProduct} />

        </Switch>
    )
}