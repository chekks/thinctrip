import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//pages
import Homepage from './pages/Homepage'
import TourPackages from './pages/tour/TourPackages';
import DestinationSingle from './pages/destinations/DestinationSingle';

import UserHomepage from './user/components/UserHomepage'
import UserLogin from './user/UserLogin';
import UserRegister from './user/UserRegister';
import UserArticles from './user/UserArticles';
import UserEnquiries from './user/UserEnquiries';
import UserDashboard from './user/UserDashboard';
import UserUsers from './user/UserUsers';
import UserTourPackages from './user/userTourPackage/TourPackage';

import TourSingle from './pages/tour/TourSingle';
import ReviewForm from './component/forms/ReviewForm';

export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
                <Switch>
                    <Route exact path="/" component={Homepage} />
                    <Route path="/tour" exact component={TourPackages} />
                    <Route exact path="/destination/:permalink" exact component={DestinationSingle} />


                    {/* ADMIN ROUTES */}
                    <Route exact path="/user/dashboard" component={UserDashboard} />
                    <Route exact path="/user/users" component={UserUsers} />
                    <Route exact path="/login" component={UserLogin} />
                    <Route exact path="/register" component={UserRegister} />
                    <Route exact path="/user/testimonials" component={UserArticles} />
                    <Route exact path="/user/enquiries" component={UserEnquiries} />

                    // Contributor
                    <Route exact path="/user/tour-packages" component={UserTourPackages} />

                    <Route exact path="/tour/north-to-south-15d-14n" component={TourSingle} />
                    <Route exact path="/tour/north-to-south-15d-14n/review" component={ReviewForm} />

                    {/* <Route component={NotFound}/> */}

                </Switch>

            </React.Fragment>
        )
    }
}
