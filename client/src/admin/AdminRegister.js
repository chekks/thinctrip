import React, { useState , useEffect} from "react";
import { Link, useHistory } from "react-router-dom";
import r from "../assets/scss/admin/adminRegister.module.scss";
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
import {postUsersRegistration} from '../redux'

const mapStateToProps = state => {
  return {
      users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postUsersRegistration : (payload) =>  dispatch(postUsersRegistration(payload)),
  }
}

const AdminRegister = (props) => {
  let initial_data = {
    "firstname" : "",
    "lastname" : "",
    "email" : "",
    "password": "",
    "confirm_password": ""
  };

  let history = useHistory();

  //state
  const [data, setData] = useState(initial_data);

  useEffect (() => {
    
  }, [data, props.users]);

  const handleSubmit = async (event) =>{
    event.preventDefault();
  
    console.log("before post");
    let return_data = await props.postUsersRegistration(data);
    history.push("/admin/dashboard");
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
      <LeftContainer className={r.leftContainer} src={AdminSidebarBackground}/>
      <div className={r.rightContainer}>
        <img src={AdminLogoDefault} className={r.logo} />
        <div className={r.form}>
          <form method="post" onSubmit={(event) => handleSubmit(event)}>
            <TextField 
              className="form-control"
              type="text"
              placeholder="First name"
              name="firstname"
              onchange={(event) => handleChangeTextEditor(event)}
              id="register_firstname"

            />
            <TextField 
              className="form-control"
              type="text"
              placeholder="Last name"
              name="lastname"
              onchange={(event) => handleChangeTextEditor(event)}
              id="register_lastname"

            />
            <TextField 
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              onchange={(event) => handleChangeTextEditor(event)}
              id="register_username"

            />
            <TextField 
              className="form-control"
              type="password"
              name="password"
              placeholder="Password"
              id="register_password"
              onchange={(event) => handleChangeTextEditor(event)}

            />

            <TextField 
              className="form-control"
              type="password"
              name="password"
              placeholder="Confirm Password"
              id="register_password"
              onchange={(event) => handleChangeTextEditor(event)}

            />

            <Button 
              // onClick={(event) => this.handleSubmit(event)} 
              type="submit" 
              variant="primary" 
              label="Login"
              block
              class={r.loginButton}
              id="register_button">

              Sign up
            </Button>
          </form>
        </div> 
        <div className={r.lineContainer}>
          <div className={r.hr}></div>
          <div className={r.or}>OR</div>
        </div>
        <div className={r.socialMediaContainer}>
          <Button 
            onClick={(event) => handleSubmit(event)} 
            type="button" 
            variant="danger" 
            size="sm" 
            disabled={false}
            className={r.btn_register_social_media}
            >

            <FaGoogle/>Sign up using Google
          </Button>

          <Button 
            onClick={(event) => handleSubmit(event)} 
            type="button" 
            variant="blue" 
            size="sm" 
            className={r.btn_register_social_media}
            >

            <FaFacebookSquare/>Sign up using Facebook
          </Button>
          
        </div>
        <div className={r.copyright}>Copyright © Thinctrip 2021</div>

        <div className={r.lineContainerSignUp}>
          <div className={r.hr}></div>
        </div>

        <div className={r.signUpContainer}>
          <p>Already have an account?</p>
          <Link to={{pathname: '/login'}} >Login here</Link>
        </div>
      </div>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(AdminRegister)
