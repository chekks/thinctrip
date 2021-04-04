import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Header from './component/header/Navbar';
import Footer from './component/footer/Footer';
import Routes from './Routes';
import AdminHomepage from './admin/AdminHomepage';


export default class App extends Component {
  render() {
    let content;
    var pathArray = window.location.pathname.split('/');
    let publicPage = true;

    if(pathArray[1] == 'login' || pathArray[1] == 'admin'){
      content = <Routes></Routes>
    }else{
      if (publicPage == true){
        content = <div className="wrapper"><Header/><Routes/><Footer/></div>;
      }else{
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
