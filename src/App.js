import React, { Component } from 'react';


//components
import Header from './component/header/Navbar';
import Footer from './component/Footer';
import Routes from './Routes';
import AdminHomepage from './admin/components/AdminHomepage';


export default class App extends Component {
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
