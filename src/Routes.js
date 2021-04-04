import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom";

//pages
import Homepage from './pages/homepage/Homepage'
import TourPackages from './pages/tour/TourPackages';


export default class Routes extends Component {
    render() {
        return (
            <React.Fragment>
            <Switch>
                <Route exact path="/" component={Homepage}/>
                <Route exact path="/tour" component={TourPackages}/>

                {/* <Route component={NotFound}/> */}
                
            </Switch>
            </React.Fragment>
        )
    }
}
