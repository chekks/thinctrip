import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import r from "../assets/scss/user/loginRegister/userRegister.module.scss";
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
import { postUsersRegistration } from '../redux'

const mapStateToProps = state => {
  return {
    users: state.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postUsersRegistration: (payload) => dispatch(postUsersRegistration(payload)),
  }
}

const UserRegister = (props) => {
  let initial_data = {
    "firstname": "",
    "lastname": "",
    "email": "",
    "password": "",
    "confirm_password": ""
  };

  let history = useHistory();

  //state
  const [data, setData] = useState(initial_data);

  useEffect(() => {

  }, [data, props.users]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log("before post");
    let return_data = await props.postUsersRegistration(data);
    // history.push("/user/dashboard");
    console.log("after post");
  }

  const handleChangeTextEditor = (event) => {
    console.log("handleChangeTextEditor:", data);
    let current_data = data;
    let new_data = {
      ...current_data,
      [event.target.name]: event.target.value
    }
    setData(new_data);
  }

  return (
    <div className="flex userMainContainer">
      <ImageBgContainer className={r.leftContainer} src={UserSidebarBackground} />
      <div className={r.rightContainer}>
        <img src={UserLogoDefault} className={r.logo} />
        <div className={r.form}>
          <form method="post" onSubmit={(event) => handleSubmit(event)}>
            <div className="flex">
              <TextField
                className="form-control"
                type="text"
                placeholder="First name"
                name="firstname"
                onChange={handleChangeTextEditor}
                id="register_firstname"

              />
              <TextField
                className="form-control ml-10"
                type="text"
                placeholder="Last name"
                name="lastname"
                onChange={handleChangeTextEditor}
                id="register_lastname"

              />
            </div>
            <TextField
              className="form-control"
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChangeTextEditor}
              id="register_username"

            />
            <div className="flex">
              <TextField
                className="form-control"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                onChange={handleChangeTextEditor}

              />

              <TextField
                className="form-control ml-10"
                type="password"
                name="confirm_password"
                placeholder="Confirm Password"
                id="confirm_password"
                onChange={handleChangeTextEditor}

              />
            </div>



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

            <FaGoogle />Sign up using Google
          </Button>

          <Button
            onClick={(event) => handleSubmit(event)}
            type="button"
            variant="blue"
            size="sm"
            className={r.btn_register_social_media}
          >

            <FaFacebookSquare />Sign up using Facebook
          </Button>

        </div>
        <div className={r.copyright}>Copyright © Thinctrip 2021</div>

        <div className={r.lineContainerSignUp}>
          <div className={r.hr}></div>
        </div>

        <div className={r.signUpContainer}>
          <p>Already have an account?</p>
          <Link to={{ pathname: '/login' }} >Login here</Link>
        </div>
      </div>
    </div>
  )
}


export default connect(mapStateToProps, mapDispatchToProps)(UserRegister)
