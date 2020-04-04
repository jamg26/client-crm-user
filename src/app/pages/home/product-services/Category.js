import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import viewCategory from './components/category/ViewComponent';
export default function Category() {
    return (
        <Switch>
            <Redirect exact={true} from="/" to="/product-category"/>
            <Route path="/product-category/" component={viewCategory} />
        </Switch>
    )
}