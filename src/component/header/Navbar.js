import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import h from "../../assets/scss/client/header.module.scss";

//image
import LogoWhite from '../../assets/images/logo-white.png'

//icons
import { FaBars, FaTimes } from 'react-icons/fa'

//components
import { NavbarItems } from './MenuItems'
import Dropdown from './Dropdown'
import { Container, Navbar, NavbarMenu } from '../../mainStyles'

export default class Header extends Component {

    state = {
        clicked: false,
        button: true,
        scrollNav: false,
        dropdown: false,
    }

    componentDidMount() {
        window.addEventListener("button", this.showButton);
        window.addEventListener("scroll", this.changeNav);
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    closeMobileMenu = () => {
        this.setState({button: false});
    }

    showButton = () => {
        if(window.innerWidth <= 960) {
            this.setState({button: false})
        } else {
            this.setState({button: true})
        }
    }

    changeNav = () => {
        if(window.scrollY >= 100) {
            this.setState({scrollNav: true})
        } else {
            this.setState({scrollNav: false})
        }
    }

    onMouseEnter = () => {
        if (window.innerWidth < 960) {
            this.setState({dropdown: false});
        } else {
            this.setState({dropdown: true});
        }
    };
    
    onMouseLeave = () => {
        if (window.innerWidth < 960) {
            this.setState({dropdown: false});
        } else {
            this.setState({dropdown: false});
        }
    };

    

    render() {
        return (
            <React.Fragment>
                <Navbar className={h.navbar} scrollNav={this.state.scrollNav}>
                    <Container className={h.navbarContainer}>
                        <img src={LogoWhite} className={h.navbarImgLogo} />
                        <IconContext.Provider value={{color: '#fff'}}>
                            <div className={h.navbarToggler} onClick={this.handleClick}>
                                {this.state.clicked ? <FaTimes /> : <FaBars />}
                            </div>
                        </IconContext.Provider>
                    
                        <NavbarMenu className={h.navbarMenu} onClick={this.handleClick} click={this.state.clicked}>

                            <li className={h.navItem}>
                                <Link className={h.navLinks} to="/" onClick={this.closeMobileMenu}>About Us</Link>
                            </li>
                            <li className={h.navItem}>
                                <Link className={h.navLinks} to="/" onClick={this.closeMobileMenu}>How it Works</Link>
                            </li>
                            <li className={h.navItem} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                                <Link className={h.navLinks} to="/" onClick={this.closeMobileMenu}>Plan Your Trip</Link>
                                {this.state.dropdown && <Dropdown />}
                            </li>
                            <li className={h.navItem}>
                                <Link className={h.navLinks} to="/tour" onClick={this.closeMobileMenu}>Tour</Link>
                            </li>
                            <li className={h.navItem}>
                                <Link className={h.navLinks} to="/" onClick={this.closeMobileMenu}>Make a Payment</Link>
                            </li>

                        </NavbarMenu>
                    
                    </Container>
                </Navbar>
            </React.Fragment>
        )
    }
}
