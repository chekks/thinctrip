import React from 'react'
import { Link } from 'react-router-dom';
import s from "../assets/scss/client/footer.module.scss";

const Footer = () => {
    return (
        <React.Fragment>
            <div className={s.footer}>
                <div className={s.footerContainer}>
                    <div className={s.footerItems}>
                        <h1>Contact Info</h1>
                        <p>Address : PO Box 259, LINDFIELD, NSW Australia 2070</p>
                        <p>info@thinctrip.com</p>
                    </div>

                    <div className={s.footerItems}>
                        <h1>Top Destinations</h1>
                        <p>Address : PO Box 259, LINDFIELD, NSW Australia 2070</p>
                        <p>info@thinctrip.com</p>
                    </div>

                    <div className={s.footerItems}>
                        <h1>Partners</h1>
                        <Link className={s.footerLinks}>Our Tour Provider</Link>
                        <Link className={s.footerLinks}>Vendor Dashboard</Link>
                        <Link className={s.footerLinks}>Contributor Dashboard</Link>
                    </div>

                    <div className={s.footerItems}>
                        <h1>Thinctrip</h1>
                        <Link className={s.footerLinks}>About ThincTrip</Link>
                        <Link className={s.footerLinks}>Why Book with Us?</Link>
                        <Link className={s.footerLinks}>Our Community</Link>
                        <Link className={s.footerLinks}>Terms and Conditions</Link>
                        <Link className={s.footerLinks}>Privacy Policy</Link>
                        <Link className={s.footerLinks}>Contact Us</Link>
                        <Link className={s.footerLinks}>FAQ</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Footer
