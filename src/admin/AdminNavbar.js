import React, { Component } from 'react'
import styled from 'styled-components'
import nv from '../assets/scss/admin/adminNavbar.module.scss'
import { BiMenu } from "react-icons/bi";
import { BiMessageRounded } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";

//FOR DELETION
import AdminNavLogo from '../assets/images/admin_nav_logo.JPG'

export const ImgContainer = styled.div`
    background-image: url(${props => props.src});
    background-size: cover;
    background-repeat: no-repeat;

`;


export default class AdminNavbar extends Component {
    render() {
        return (
            <nav className={nv.navbar}>
                <div>
                    <BiMenu className={nv.burgerLogo}/>
                </div>
                <div className="flexCenter">
                    <div className="mr-20"><BiMessageRounded className={nv.messageIcon} /></div>
                    <div className="flexCenter">
                        <ImgContainer src={AdminNavLogo} className={nv.imgContainer} />
                        <div className={nv.imgText}>Chris Wood</div>
                        <div className="ml-10"><BiChevronDown /></div>
                    </div>
                </div>
            </nav>
        )
    }
}
