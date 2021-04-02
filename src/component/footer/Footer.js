import React, { Component } from 'react'
import * as s from './Footer.styles'

export default class Footer extends Component {
    render() {
        return (
            <s.Footer>
                <s.FooterContainer>
                    <s.FooterItems>
                        <h1>Contact Info</h1>
                        <p>Address : PO Box 259, LINDFIELD, NSW Australia 2070</p>
                        <p>info@thinctrip.com</p>
                    </s.FooterItems>

                    <s.FooterItems>
                        <h1>Top Destinations</h1>
                        <p>Address : PO Box 259, LINDFIELD, NSW Australia 2070</p>
                        <p>info@thinctrip.com</p>
                    </s.FooterItems>

                    <s.FooterItems>
                        <h1>Partners</h1>
                        <s.FooterLinks>Our Tour Provider</s.FooterLinks>
                        <s.FooterLinks>Vendor Dashboard</s.FooterLinks>
                        <s.FooterLinks>Contributor Dashboard</s.FooterLinks>
                    </s.FooterItems>

                    <s.FooterItems>
                        <h1>Thinctrip</h1>
                        <s.FooterLinks>About ThincTrip</s.FooterLinks>
                        <s.FooterLinks>Why Book with Us?</s.FooterLinks>
                        <s.FooterLinks>Our Community</s.FooterLinks>
                        <s.FooterLinks>Terms and Conditions</s.FooterLinks>
                        <s.FooterLinks>Privacy Policy</s.FooterLinks>
                        <s.FooterLinks>Contact Us</s.FooterLinks>
                        <s.FooterLinks>FAQ</s.FooterLinks>
                    </s.FooterItems>
                </s.FooterContainer>
            </s.Footer>
        )
    }
}
