import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

//pages
import Homepage from './pages/Homepage'
import TourPackages from './pages/tour/TourPackages';

import AdminHomepage from './admin/components/AdminHomepage'
import AdminLogin from './admin/AdminLogin'
import AdminArticles from './admin/AdminArticles';

import TourSingle from './pages/tour/TourSingle'
import ReviewForm from './component/forms/ReviewForm'

export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/tour" component={TourPackages}/>
                    

                    {/* ADMIN ROUTES */}
                    {/* <Route exact path="/admin" component={AdminHomepage}/> */}
                    <Route exact path="/login" component={AdminLogin}/>
                    <Route exact path="/admin/articles" component={AdminArticles}/>
                    
                    <Route exact path="/tour/north-to-south-15d-14n" component={TourSingle}/>
                    <Route exact path="/tour/north-to-south-15d-14n/review" component={ReviewForm}/>

                    {/* <Route component={NotFound}/> */}
                    
                </Switch>
            </React.Fragment>
        )
    }
}
