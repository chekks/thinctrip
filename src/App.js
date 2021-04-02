import React, { Component } from 'react';

//components
import Header from './component/header/Navbar';
import Footer from './component/footer/Footer';
import Routes from './Routes';

export default class App extends Component {
  render() {
    let content;
    var path = window.location.pathname.split('/');
    console.log("path", path);
    
    if(path[1] == 'admin'){
      content = <Routes/>;
    }else{
      content = <div className="wrapper"><Header/><Routes/><Footer/></div>;
    }

    return (
      <>
        {content}
      </>
    )
  }
}
