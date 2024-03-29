import React, { Component } from 'react';
import { Link, useLocation, withRouter } from "react-router-dom";
import './assets/scss/ui_components.scss';


//components
import Routes from './Routes';
import UserHomepage from './user/components/UserHomepage';
import ClientContainer from './pages/ClientContainer';



class App extends Component {

  componentDidUpdate = (prevProps) => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  }

  render() {
    let content;
    var pathArray = window.location.pathname.split('/');
    let publicPage = true;

    if (pathArray[1] == 'user') {
      publicPage = false;
    }

    if (pathArray[1] == 'login' || pathArray[1].includes('register') || pathArray[1] == 'contributor') {
      content = <Routes></Routes>
      //require('bootstrap/dist/css/bootstrap.min.css'); 
      console.log("App 1");
    } else {
      if (publicPage == true) {
        content = <div className="wrapper"><ClientContainer /></div>;
        //console.log("App 2");
      } else {
        //require('bootstrap/dist/css/bootstrap.min.css'); 
        //console.log("App 3");
        content = <UserHomepage />
      }

    }

    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }
}

export default withRouter(props => <App {...props} />);
