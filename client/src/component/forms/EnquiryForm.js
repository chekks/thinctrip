import React, {Component} from 'react'
import f from '../../assets/scss/client/forms.module.scss'
import Button from '../ui/Button';

//redux
import {connect} from 'react-redux'
import {postEnquiries} from '../../redux'
import TextValidation from '../ui/alert/TextValidation';
import TextField from '../ui/Inputs/TextField';
import TextAlerts from '../ui/alert/TextAlerts';

const mapStateToProps = state => {
    return {
        enquiries: state.enquiries
    }
}

const mapDispatchToProps = dispatch => {
    return {
        postEnquiries : (payload) =>  dispatch(postEnquiries(payload)),
    }
}

class EnquiryForm extends Component {
    state = {
        name: "",
        email: "",
        message: "",
        errors: {
            name : [],
            email : [],
            message : []
        },
        errorClasses:{
            name: "",
            email :"",
            message : ""
        },
        alertMessage: false
    }

    handleChange = (event) =>{
        console.log("ajkshdkjahdkjasd", event.target.name);
        let name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    submitEnquiryForm = async (event) =>{
        event.preventDefault();
        console.log("event", event);
        let params = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        await this.props.postEnquiries(params);
        this.checkErrors();
    }

    checkErrors = () =>{
        if(Object.keys(this.props.enquiries.errors).length != 0){
            this.hasErrors();
            console.log("With errors");
            this.setState({alertMessage : false});
        }else{
            console.log("No errors");
            this.setState({alertMessage : true});
        }
    }

    hasErrors = () =>{
        let errorClasses_ = this.state.errorClasses;
            for (const [key, value] of Object.entries(errorClasses_)) {
                console.log(`${key}: ${value}`);
                if(key in this.props.enquiries.errors){
                    console.log(this.props.enquiries.errors[key]);
                    errorClasses_[key] = "error"
                }else{
                    errorClasses_[key] =  "";
                }
            }
            this.setState({errors : this.props.enquiries.errors});
    }

    render() {
        return (
            <form method="post" onSubmit={(event)=>this.submitEnquiryForm(event)}>
                <div className={f.formWrapper}>
                    <div className={f.formInput}>
                        <label className={f.inputLabel}>Full Name <span class="required">*</span></label>
                        <TextField type="text" className={this.state.errorClasses.name} name="name" autoComplete="off" value={this.state.name} onChange={this.handleChange}></TextField>
                        <TextValidation>{this.state.errors.name}</TextValidation>
                    </div>
                    <div className={f.formInput}>
                        <label className={f.inputLabel}>Email Address <span class="required">*</span></label>
                        <TextField type="text" name="email" className={this.state.errorClasses.email} autoComplete="off" value={this.state.name} onChange={this.handleChange}></TextField>
                        <TextValidation>{this.state.errors.email}</TextValidation>
                    </div>

                    <div className={f.formInput}>
                        <label className={f.inputLabel}>Message <span class="required">*</span></label>
                        <textarea type="text" autoComplete="off" className={`${f.inputText} ${f.inputTextarea} ${this.state.errorClasses.message} form-control`} value={this.state.message} onChange={this.handleChange} name="message"></textarea>
                        <TextValidation>{this.state.errors.message}</TextValidation>
                    </div>

                    <div className={`${f.formInput} ${f.formFlex}`}>
                        <input type="checkbox" autoComplete="off" className={f.inputCheckbox}/>
                        <p className={f.inputLabel}>* By submitting an enquiry, you agree to ThincTrip's <a href="https://staging.thinctrip.com/terms-and-conditions/">Terms &amp; Conditions</a> and <a href="https://staging.thinctrip.com/privacy-policy/">Privacy Policy</a> and to receiving marketing communications from thinctrip.com</p>
                    </div>

                    <div className={`${f.formInput} ${f.formFlex}`}>
                        <input type="checkbox" autoComplete="off" className={f.inputCheckbox}/>
                        <p className={f.inputLabel}>I want to send this enquiry to other tour providers so I can compare quotes</p>
                    </div>

                    <Button size="" variant="primary" className={f.formButton} type="submit" block>Submit Enquiry</Button>
                    {/* <Button big="true" className={f.formButton} type="submit">Submit Enquiry</Button> */}
                    {
                        this.state.alertMessage ? <TextAlerts className="alert-primary">Enquiry submitted successfully!</TextAlerts> : ""
                    }
                    
                </div>
            </form>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EnquiryForm)

