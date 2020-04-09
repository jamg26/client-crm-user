import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import SupportViewComponent from './components/SupportViewComponent';
import TicketViewUpdateComponent from './components/TicketViewUpdateComponent';
export default function SupportComponent() {
    return (
        <Switch>
            <Redirect exact={true} from="/" to="/supports"/>
            <Route path="/supports/:id" component={TicketViewUpdateComponent} />
            <Route path="/supports" component={SupportViewComponent} />
        </Switch>
    )
}