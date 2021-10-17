import React, { useState, useEffect } from 'react'
import cr from "../../assets/scss/user/contributor/contributorRegister.module.scss";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";

//For deletion
import UserSidebarBackground from "../../assets/images/siargao.jpg";
import UserLogoDefault from "../../assets/images/logo-default.png";
import TextField from "../../component/ui/Inputs/TextField";
import Button from "../../component/ui/Button";
import { ImageBgContainer } from "../../user/components/UserImageBgContainer";

export default function ContributorRegister() {
    //state
    const [step, setStep] = useState(1);


    const handleChangeTextEditor = () => {

    }

    const handleSubmit = () => {

    }


    return (
        <div className="flex userMainContainer">
            <ImageBgContainer className={cr.leftContainer} src={UserSidebarBackground} />
            <div className={cr.rightContainer}>
                <img src={UserLogoDefault} className={cr.logo} />
                <div className={cr.step}>
                    <div className={cr.stepWrapper}>
                        <div className={cr.stepBoxNumber}>1</div>
                        <div className={cr.stepLabel}>Personal Details</div>
                    </div>
                    <div className={cr.stepWrapper}>
                        <div className={cr.stepBoxNumber}>2</div>
                        <div className={cr.stepLabel}>Profile</div>
                    </div>
                    <div className={cr.stepWrapper}>
                        <div className={cr.stepBoxNumber}>3</div>
                        <div className={cr.stepLabel}>Places you travelled to</div>
                    </div>
                </div>

                <div>
                    <div>Step 1/3</div>
                    <div>Sign Up</div>
                </div>



                <div className={cr.form}>
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
                            class={cr.loginButton}
                            id="register_button">

                            NEXT
                        </Button>
                    </form>
                </div>
                {/* <div className={cr.lineContainer}>
                    <div className={cr.hr}></div>
                    <div className={cr.or}>OR</div>
                </div>
                <div className={cr.socialMediaContainer}>
                    <Button
                        onClick={(event) => handleSubmit(event)}
                        type="button"
                        variant="danger"
                        size="sm"
                        disabled={false}
                        className={cr.btn_register_social_media}
                    >

                        <FaGoogle />Sign up using Google
                    </Button>

                    <Button
                        onClick={(event) => handleSubmit(event)}
                        type="button"
                        variant="blue"
                        size="sm"
                        className={cr.btn_register_social_media}
                    >

                        <FaFacebookSquare />Sign up using Facebook
                    </Button>

                </div> */}
                <div className={cr.copyright}>Copyright © Thinctrip 2021</div>

                <div className={cr.lineContainerSignUp}>
                    <div className={cr.hr}></div>
                </div>

                <div className={cr.signUpContainer}>
                    <p>Already have an account?</p>
                    <Link to={{ pathname: '/login' }} >Login here</Link>
                </div>
            </div>
        </div>
    )
}
