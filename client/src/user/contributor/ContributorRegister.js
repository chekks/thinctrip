import React, { useState, useEffect } from 'react'
import cr from "../../assets/scss/user/contributor/contributorRegister.module.scss";
import "../../assets/scss/user/loginRegister/register.scss";
import { FaGoogle, FaFacebookSquare } from "react-icons/fa";
import { Link, useHistory } from "react-router-dom";
//import { useSelector, useDispatch } from 'react-redux';

// import { getCountries } from '../../redux'

//For deletion
import UserSidebarBackground from "../../assets/images/siargao.jpg";
import UserLogoDefault from "../../assets/images/logo-default.png";
import TextField from "../../component/ui/Inputs/TextField";
import Button from "../../component/ui/Button";
import { ImageBgContainer } from "../../user/components/UserImageBgContainer";
import UploadFile from '../../component/ui/UploadFile';

//REDUX
import { connect } from 'react-redux'
import { postUsersRegistrationContributor, getCountries } from '../../redux';


const mapStateToProps = state => {
    return {
        users: state.users,
        countries: state.users.countries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postUsersRegistrationContributor: (payload) => dispatch(postUsersRegistrationContributor(payload)),
        getCountries: () => dispatch(getCountries())
    }
}

const ContributorRegister = (props) => {
    //state
    const header_label = ["Personal Details", "Profile", "Places you travelled to"];
    const [step, setStep] = useState(1);
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [avatar, setAvatar] = useState("");

    // const dispatch = useDispatch();

    //const countries = useSelector(state => state.users.countries);
    //console.log("countries ----------", countries);

    const renderCountry = () => {
        let countries_ = props.countries != undefined ? props.countries.map((country) => {
            return <option>{country.name}</option>
        }) : [];
        return countries_;
    }


    const handleChangeTextEditor = (mySetFunction, event) => {
        const value = event.currentTarget.value;
        console.log("value", value);
        mySetFunction(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("handle submit", event);
        console.log("firstname", firstname);
        const params = new FormData();
        params.append('firstname', firstname);
        params.append('lastname', lastname);
        params.append('email', email);
        params.append('username', username);
        params.append('password', password);
        params.append('confirm_password', confirmPassword);
        params.append('avatar', avatar);
        console.log("params", params);
        props.postUsersRegistrationContributor(params);
    }

    const handleNextStep = (step) => {
        console.log("setStep", step);
        setStep(step);
        let step_box_number = document.getElementsByClassName("step_box_number");
        for (let i = 0; i < step_box_number.length; i++) {
            step_box_number[i].classList.remove("active");
        }

        document.getElementById("stepper" + step).classList.add("active");
    }

    const handleFile = (file_, field_name) => {
        console.log("file", file_);
        console.log("field_name", field_name);
    }

    useEffect(() => {
        if (props.countries.length == 0) {
            props.getCountries();
        }
        return () => {
            console.log("steppppppppppppp", step);
            //cleanup
        }
    }, [step, props.users])


    return (
        <div className="flex userMainContainer register_contributor">
            <ImageBgContainer className={cr.leftContainer} src={UserSidebarBackground} />
            <div className={cr.rightContainer}>
                <img src={UserLogoDefault} className={cr.logo} />
                <div className="step">
                    <div className="step_wrapper">
                        <div id="stepper1" className="step_box_number active">1</div>
                        <div className={cr.stepLabel}>Personal Details</div>
                    </div>
                    <div className="step_wrapper">
                        <div id="stepper2" className="step_box_number">2</div>
                        <div className={cr.stepLabel}>Profile</div>
                    </div>
                    <div className="step_wrapper">
                        <div id="stepper3" className="step_box_number">3</div>
                        <div className={cr.stepLabel}>Places you travelled to</div>
                    </div>
                </div>

                <div className={cr.registerLabelContainer}>
                    <div className={cr.subLabel}>Step {step}/3</div>
                    <div className={cr.mainLabel}>{header_label[step - 1]}</div>
                </div>


                <form method="post" onSubmit={(event) => handleSubmit(event)}>
                    <div id="step1" className={step != 1 ? "hide form" : "form"}>

                        <div className="flex">
                            <TextField
                                className="form-control"
                                type="text"
                                placeholder="First name"
                                name="firstname"
                                onChange={(e) => handleChangeTextEditor(setFirstname, e)}
                                id="register_firstname"

                            />
                            <TextField
                                className="form-control ml-10"
                                type="text"
                                placeholder="Last name"
                                name="lastname"
                                onChange={(e) => handleChangeTextEditor(setLastname, e)}
                                id="register_lastname"

                            />
                        </div>
                        <TextField
                            className="form-control"
                            type="text"
                            placeholder="Email"
                            name="email"
                            onChange={(e) => handleChangeTextEditor(setEmail, e)}
                            id="register_email"

                        />

                        <TextField
                            className="form-control"
                            type="text"
                            placeholder="Username"
                            name="username"
                            onChange={(e) => handleChangeTextEditor(setUsername, e)}
                            id="register_username"

                        />
                        <div className="flex">
                            <TextField
                                className="form-control"
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                                onChange={(e) => handleChangeTextEditor(setPassword, e)}

                            />

                            <TextField
                                className="form-control ml-10"
                                type="password"
                                name="confirm_password"
                                placeholder="Confirm Password"
                                id="confirm_password"
                                onChange={(e) => handleChangeTextEditor(setConfirmPassword, e)}

                            />
                        </div>
                        <div>
                            <select name="country" className="select">
                                <option hidden selected>--- Select your country from ---</option>;
                                {renderCountry()}
                            </select>
                        </div>



                        <div className={cr.stepperButtonContainer}>
                            <Button
                                // onClick={(event) => this.handleSubmit(event)} 
                                type="button"
                                variant="primary"
                                label="Login"
                                class={cr.loginButton}
                                id="register_button"
                                onClick={() => handleNextStep(2)}>

                                Next Step
                            </Button>
                        </div>

                    </div>

                    <div id="step2" className={step != 2 ? "hide form" : "form"}>
                        <div className="mb-10">Upload avatar</div>
                        <UploadFile
                            name="blog_upload_file"
                            handleFile={handleFile}
                            main_text=""
                            sub_text=""
                            select_id="show_upload_btn_select"
                            upload_filename_label=""
                            img_src="" />
                        <div className={cr.stepperButtonContainer}>
                            <Button
                                // onClick={(event) => this.handleSubmit(event)} 
                                type="button"
                                variant="link"
                                label="Login"
                                class={cr.loginButton}
                                id="register_button"
                                onClick={() => handleNextStep(1)}>
                                Back
                            </Button>
                            <Button
                                // onClick={(event) => this.handleSubmit(event)} 
                                type="submit"
                                variant="primary"
                                label="Login"
                                class={cr.loginButton}
                                id="register_button"
                                onClick={() => handleNextStep(3)}>

                                Next Step
                            </Button>
                        </div>
                    </div>

                    <div id="step3" className={step != 3 ? "hide form" : "form"}>
                        <div className="mb-10">
                            Places in the Philippines that you have travelled to
                        </div>
                        <div className="flex">
                            <TextField
                                className="form-control"
                                type="text"
                                placeholder="Name of the place"
                                name="name_of_the_place[]"
                            //onChange={handleChangeTextEditor}

                            />
                            <TextField
                                className="form-control ml-10"
                                type="text"
                                placeholder="Year travelled"
                                name="year_travelled[]"
                            //onChange={handleChangeTextEditor}

                            />
                        </div>
                        <div className="flex">
                            <TextField
                                className="form-control"
                                type="text"
                                placeholder="Name of the place"
                                name="name_of_the_place[]"
                            //onChange={handleChangeTextEditor}

                            />
                            <TextField
                                className="form-control ml-10"
                                type="text"
                                placeholder="Year travelled"
                                name="year_travelled[]"
                            //onChange={handleChangeTextEditor}

                            />
                        </div>
                        <div className="flex">
                            <TextField
                                className="form-control"
                                type="text"
                                placeholder="Name of the place"
                                name="name_of_the_place[]"
                            //onChange={handleChangeTextEditor}

                            />
                            <TextField
                                className="form-control ml-10"
                                type="text"
                                placeholder="Year travelled"
                                name="year_travelled[]"
                            //onChange={handleChangeTextEditor}

                            />
                        </div>
                        <div className={cr.stepperButtonContainer}>
                            <Button
                                // onClick={(event) => this.handleSubmit(event)} 
                                type="submit"
                                variant="link"
                                label="Login"
                                class={cr.loginButton}
                                id="register_button"
                                onClick={() => handleNextStep(2)}>
                                Back
                            </Button>
                            <Button
                                type="submit"
                                variant="primary"
                                label="Login"
                                class={cr.loginButton}
                                id="register_button"
                                onClick={(event) => handleSubmit(event)}>

                                Submit
                            </Button>
                        </div>
                    </div>
                </form>


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
        </div >
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(ContributorRegister)
