import React, {Component} from 'react'
import f from '../../assets/scss/client/forms.module.scss'
import { Button }from '../../mainStyles'

export default class EnquiryForm extends Component {
    render() {
        return (
            <form method="post" onSubmit={()=>this.submitEnquiryForm()}>
                <div className={f.formWrapper}>
                    <div className={f.formInput}>
                        <label className={f.inputLabel}>Full Name</label>
                        <input type="text" autoComplete="off" className={f.inputText} value={this.state.value} onChange={this.handleChange} name="name"/>
                    </div>
                    <div className={f.formInput}>
                        <label className={f.inputLabel}>Email Address</label>
                        <input type="text" autoComplete="off" className={f.inputText} value={this.state.email} onChange={this.handleChange} name="email"/>
                    </div>

                    <div className={f.formInput}>
                        <label className={f.inputLabel}>Message</label>
                        <textarea type="text" autoComplete="off" className={`${f.inputText} ${f.inputTextarea}`} value={this.state.message} onChange={this.handleChange} name="message"></textarea>
                    </div>

                    <div className={`${f.formInput} ${f.formFlex}`}>
                        <input type="checkbox" autoComplete="off" className={f.inputCheckbox}/>
                        <p className={f.inputLabel}>* By submitting an enquiry, you agree to ThincTrip's <a href="https://staging.thinctrip.com/terms-and-conditions/">Terms &amp; Conditions</a> and <a href="https://staging.thinctrip.com/privacy-policy/">Privacy Policy</a> and to receiving marketing communications from thinctrip.com</p>
                    </div>

                    <div className={`${f.formInput} ${f.formFlex}`}>
                        <input type="checkbox" autoComplete="off" className={f.inputCheckbox}/>
                        <p className={f.inputLabel}>I want to send this enquiry to other tour providers so I can compare quotes</p>
                    </div>

                    <Button big="true" className={f.formButton}>Submit Enquiry</Button>
                </div>
            </form>
        )
    }
}

