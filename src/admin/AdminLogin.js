import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import l from "../assets/scss/adminLogin.module.scss";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import {FaGoogle,FaFacebookSquare} from "react-icons/fa";

//For deletion
import AdminSidebarBackground from "../assets/images/admin_sidebar_logo.jfif";
import AdminLogoDefault from "../assets/images/logo-default.png";

export const LeftContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  width: 60%;
  height: 100vh;

  &:after {
    content: "";
    background: rgba(28, 40, 58, 0.5);
    width: 100%;
    height: 100%;
    z-index: 4;
    position: absolute;
    top: 0;
    transition: all 0.5s ease;
  }
`;

export default class AdminLogin extends Component {

  handleSubmit = (event) =>{
    console.log("handleSubmit");
    event.preventDefault();
    window.location.href = "http://localhost:3003/admin"; 
  }

  render() {
    
    return (
      <div className="flex">
        <LeftContainer className={l.leftContainer} src={AdminSidebarBackground}></LeftContainer>
        <div className={l.rightContainer}>
          <img src={AdminLogoDefault} className={l.logo} />
          <div className={l.form}>
            <form>
              <InputGroup className="mb-3" >
                <FormControl aria-label="Username" placeholder="Username *" size="lg"/>
              </InputGroup>

              <InputGroup className="mb-3" >
                <FormControl aria-label="Password" placeholder="Password *" type="password" size="lg"/>
              </InputGroup>

              <Button onClick={(event) => this.handleSubmit(event)} type="button" variant="primary" size="lg" block className={l.loginButton}>Login</Button>
            </form>
          </div> 
          <div className={l.lineContainer}>
            <div className={l.hr}></div>
            <div className={l.or}>OR</div>
          </div>
          <div className={l.socialMediaContainer}>
            <Button variant="primary" size="lg" block className={l.googleButton}><FaGoogle/>Login with Google</Button>
            <Button variant="primary" size="lg" block className={l.facebookButton}><FaFacebookSquare/>Login with Facebook</Button>
          </div>
          <div className={l.copyright}>Copyright © Thinctrip 2021</div>
        </div>
      </div>
    );
  }
}
