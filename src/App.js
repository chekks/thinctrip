import React, { Component } from 'react';
import { Link, useLocation, withRouter } from "react-router-dom";

//components
import Header from './component/header/Navbar';
import Footer from './component/Footer';
import Routes from './Routes';
import AdminHomepage from './admin/components/AdminHomepage';


class App extends Component {
  
  componentDidUpdate = (prevProps) =>{
    if (this.props.location.pathname !== prevProps.location.pathname) {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
   }
  }

  render() {
    let content;
    var pathArray = window.location.pathname.split('/');
    let publicPage = true;

    if(pathArray[1] == 'admin'){
      publicPage = false;
    }

    if(pathArray[1] == 'login'){
      content = <Routes></Routes>
      require('bootstrap/dist/css/bootstrap.min.css'); 
    }else{
      if (publicPage == true){
        content = <div className="wrapper"><Header/><Routes/><Footer/></div>;
      }else{
        require('bootstrap/dist/css/bootstrap.min.css'); 
        content = <AdminHomepage/>
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
