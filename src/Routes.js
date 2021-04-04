import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

//pages
import Homepage from './pages/homepage/Homepage'
import TourPackages from './pages/tour/TourPackages';

import AdminHomepage from './admin/AdminHomepage'
import AdminLogin from './admin/AdminLogin'

export default class Routes extends Component {
    render() {
        return (
            <>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/tour" component={TourPackages}/>
                

                {/* ADMIN ROUTES */}
                <Route exact path="/admin" component={AdminHomepage}/>
                <Route exact path="/login" component={AdminLogin}/>
                {/* <Route component={NotFound}/> */}
                
            </Switch>
            </>
        )
    }
}
