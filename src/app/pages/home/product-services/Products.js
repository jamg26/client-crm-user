import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import viewProduct from './components/product/ViewComponent';
import inputProduct from './components/product/ProductInput';
export default function Products() {
    return (
        <Switch>

            <Redirect exact={true} from="/" to="/products"/>
            <Route path="/products/add" component={inputProduct} />
            <Route path="/products/" component={viewProduct} />

        </Switch>
    )
}