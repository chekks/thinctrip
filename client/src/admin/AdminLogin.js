import React, { useState , useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import l from "../assets/scss/admin/adminLogin.module.scss";
//import { InputGroup, FormControl, Button } from "react-bootstrap";
import {FaGoogle,FaFacebookSquare} from "react-icons/fa";

//For deletion
import AdminSidebarBackground from "../assets/images/admin_sidebar_logo.jfif";
import AdminLogoDefault from "../assets/images/logo-default.png";
import TextField from "../component/ui/Inputs/TextField";
import Button from "../component/ui/Button";
import { LeftContainer } from "./components/AdminLeftContainer";

//redux
import {connect} from 'react-redux'
import {postUsersLogin} from '../redux'

const mapStateToProps = state => {
  return {
      users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postUsersLogin : (payload) =>  dispatch(postUsersLogin(payload)),
  }
}

const AdminLogin = (props) => {
  let initial_data = {
    "email" : "",
    "password" : ""
  };

  let history = useHistory();

  //state
  const [data, setData] = useState(initial_data);

  useEffect (() => {
    console.log("use effect");
    console.log("props.users", props.users.data);
    if("access_token" in props.users.data){
      console.log("inside");
      const location = {
        pathname: '/admin/dashboard'
      }
      history.push(location);
    }
    
  }, [data, props.users]);

  const handleSubmit = async (event) =>{
    event.preventDefault();
  
    console.log("before post");
    let return_data= await props.postUsersLogin(data);
    
    console.log("after post");
  }

  const handleChangeTextEditor = (event) => {
    let current_data = data;
    let new_data = {
      ...current_data,
      [event.target.name]: event.target.value
    }
    setData(new_data);
  }

  return (
    <div className="flex adminMainContainer">
      <LeftContainer className={l.leftContainer} src={AdminSidebarBackground}/>
      <div className={l.rightContainer}>
        <img src={AdminLogoDefault} className={l.logo} />
        <div className={l.form}>
          <form method="post" onSubmit={(event) => handleSubmit(event)}>
            <TextField 
              className="form-control"
              type="text"
              size="lg"
              placeholder="Email"
              name="email"
              onchange={(event) => handleChangeTextEditor(event)}
              id="login_username"

            />
            <TextField 
              className="form-control"
              type="password"
              size="lg"
              name="password"
              placeholder="Password"
              id="login_password"
              onchange={(event) => handleChangeTextEditor(event)}

            />

            <Button 
              // onClick={(event) => this.handleSubmit(event)} 
              type="submit" 
              variant="primary" 
              size="lg" 
              label="Login"
              block
              class={l.loginButton}
              id="login_button">

              Login
            </Button>
          </form>
        </div> 
        <div className={l.lineContainer}>
          <div className={l.hr}></div>
          <div className={l.or}>OR</div>
        </div>
        <div className={l.socialMediaContainer}>
          <Button 
            onClick={(event) => handleSubmit(event)} 
            type="button" 
            variant="danger" 
            size="sm" 
            disabled={false}
            className={l.btn_login_social_media}
            >

            <FaGoogle/>Login with Google
          </Button>

          <Button 
            onClick={(event) => handleSubmit(event)} 
            type="button" 
            variant="blue" 
            size="sm" 
            className={l.btn_login_social_media}
            >

            <FaFacebookSquare/>Login with Facebook
          </Button>
          
        </div>
        <div className={l.copyright}>Copyright © Thinctrip 2021</div>

        <div className={l.lineContainerSignUp}>
          <div className={l.hr}></div>
        </div>

        <div className={l.signUpContainer}>
          <p>Don't have an account?</p>
          <Link to={{pathname: '/register'}} >Sign up now</Link>
        </div>
      </div>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)
