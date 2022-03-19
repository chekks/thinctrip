import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import lr from "../assets/scss/user/loginRegister/userLoginRegister.module.scss";
//import { InputGroup, FormControl, Button } from "react-bootstrap";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";

//For deletion
import UserSidebarBackground from "../assets/images/siargao.jpg";
import UserLogoDefault from "../assets/images/logo-default.png";
import TextField from "../component/ui/Inputs/TextField";
import Button from "../component/ui/Button";
import { ImageBgContainer } from "./components/UserImageBgContainer";

//redux
import { connect } from 'react-redux'
import { postUsersLogin } from '../redux'
import LocalStorage from "../helpers/LocalStorage";

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postUsersLogin: (payload) => dispatch(postUsersLogin(payload)),
  }
}

const UserLogin = (props) => {
  let initial_data = {
    "email": "",
    "password": ""
  };

  let history = useHistory();

  //state
  const [data, setData] = useState(initial_data);

  useEffect(() => {
    console.log("use effect");
    console.log("props.users", props.users.data);
    if ("access_token" in props.users.data) {
      console.log("inside");
      const location = {
        pathname: '/user/dashboard'
      };

      let currentdate = new Date();
      let dt = new Date();
      dt.setHours(dt.getHours() + 3);
      LocalStorage.set("access_token", props.users.data.access_token, dt);
      LocalStorage.set("user_role", props.users.data.user_role, dt);
      LocalStorage.set("email", props.users.data.email, dt);
      history.push(location);
    }

  }, [data, props.users]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("before post");
    let return_data = await props.postUsersLogin(data);

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
    <div className="flex userMainContainer">
      <ImageBgContainer className={lr.leftContainer} src={UserSidebarBackground} />
      <div className={lr.rightContainer}>
        <img src={UserLogoDefault} className={lr.logo} />
        <div className={lr.form}>
          <form method="post" onSubmit={(event) => handleSubmit(event)}>
            <TextField
              className="form-control"
              type="text"
              size="lg"
              placeholder="Email"
              name="email"
              onChange={handleChangeTextEditor}
              id="login_username"

            />
            <TextField
              className="form-control"
              type="password"
              size="lg"
              name="password"
              placeholder="Password"
              id="login_password"
              onChange={handleChangeTextEditor}

            />

            <Button
              // onClick={(event) => this.handleSubmit(event)} 
              type="submit"
              variant="primary"
              size="lg"
              label="Login"
              block
              class={lr.loginButton}
              id="login_button">

              Login
            </Button>
          </form>
        </div>
        <div className={lr.lineContainer}>
          <div className={lr.hr}></div>
          <div className={lr.or}>OR</div>
        </div>
        <div className={lr.socialMediaContainer}>
          <Button
            onClick={(event) => handleSubmit(event)}
            type="button"
            variant="danger"
            size="sm"
            disabled={false}
            className={lr.btn_login_social_media}
          >

            <FaGoogle />Login with Google
          </Button>

          <Button
            onClick={(event) => handleSubmit(event)}
            type="button"
            variant="blue"
            size="sm"
            className={lr.btn_login_social_media}
          >

            <FaFacebookSquare />Login with Facebook
          </Button>

        </div>
        <div className={lr.copyright}>Copyright © Thinctrip 2021</div>

        <div className={lr.lineContainerSignUp}>
          <div className={lr.hr}></div>
        </div>

        <div className={lr.signUpContainer}>
          <p>Don't have an account?</p>
          <Link to={{ pathname: '/register' }} >Sign up now</Link>
        </div>
      </div>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(UserLogin)
