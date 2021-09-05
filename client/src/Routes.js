import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

//pages
import Homepage from './pages/Homepage'
import TourPackages from './pages/tour/TourPackages';
import DestinationSingle from './pages/destinations/DestinationSingle';

import AdminHomepage from './admin/components/AdminHomepage'
import AdminLogin from './admin/AdminLogin';
import AdminRegister from './admin/AdminRegister';
import AdminArticles from './admin/AdminArticles';
import AdminEnquiries from './admin/AdminEnquiries';
import AdminDashboard from './admin/AdminDashboard';
import AdminUsers from './admin/AdminUsers';
import AdminTourPackages from './admin/adminTourPackage/TourPackage';

import TourSingle from './pages/tour/TourSingle';
import ReviewForm from './component/forms/ReviewForm';

export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/tour" exact component={TourPackages}/>
                    <Route exact path="/destination/:permalink" exact component={DestinationSingle}/>
                    

                    {/* ADMIN ROUTES */}
                    <Route exact path="/admin/dashboard" component={AdminDashboard} />
                    <Route exact path="/admin/users" component={AdminUsers} />
                    <Route exact path="/login" component={AdminLogin}/>
                    <Route exact path="/register" component={AdminRegister}/>
                    <Route exact path="/admin/testimonials" component={AdminArticles}/>
                    <Route exact path="/admin/enquiries" component={AdminEnquiries}/>

                    // Contributor
                    <Route exact path="/admin/tour-packages" component={AdminTourPackages}/>
                    
                    <Route exact path="/tour/north-to-south-15d-14n" component={TourSingle}/>
                    <Route exact path="/tour/north-to-south-15d-14n/review" component={ReviewForm}/>

                    {/* <Route component={NotFound}/> */}
                    
                </Switch>
  
            </React.Fragment>
        )
    }
}
