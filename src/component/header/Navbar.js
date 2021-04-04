import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons/lib'
import * as s from './Header.styles'

//image
import LogoWhite from '../../assets/images/logo-white.png'

//icons
import { FaBars, FaTimes } from 'react-icons/fa'

//components
import { NavbarItems } from './MenuItems'
import Dropdown from './Dropdown'

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
                <s.Navbar scrollNav={this.state.scrollNav}>
                    <s.NavbarContainer>
                        <s.NavbarImgLogo src={LogoWhite}></s.NavbarImgLogo>

                        <IconContext.Provider value={{color: '#fff'}}>
                            <s.NavbarToggler onClick={this.handleClick}>
                                {this.state.clicked ? <FaTimes /> : <FaBars />}
                            </s.NavbarToggler>
                        </IconContext.Provider>
                    
                        <s.NavbarMenu onClick={this.handleClick} click={this.state.clicked}>

                            <s.NavItem>
                                <s.NavLinks to="/" onClick={this.closeMobileMenu}>About Us</s.NavLinks>
                            </s.NavItem>
                            <s.NavItem>
                                <s.NavLinks to="/" onClick={this.closeMobileMenu}>How it Works</s.NavLinks>
                            </s.NavItem>
                            <s.NavItem onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
                                <s.NavLinks to="/" onClick={this.closeMobileMenu}>Plan Your Trip</s.NavLinks>
                                {this.state.dropdown && <Dropdown />}
                            </s.NavItem>
                            <s.NavItem>
                                <s.NavLinks to="/tour" onClick={this.closeMobileMenu}>Tour</s.NavLinks>
                            </s.NavItem>
                            <s.NavItem>
                                <s.NavLinks to="/" onClick={this.closeMobileMenu}>Make a Payment</s.NavLinks>
                            </s.NavItem>

                        </s.NavbarMenu>
                    
                    </s.NavbarContainer>
                </s.Navbar>
            </React.Fragment>
        )
    }
}
