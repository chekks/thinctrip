import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import h from "../../assets/scss/client/header.module.scss";
import { FaAngleRight } from 'react-icons/fa'

//components
import { NavbarItems } from './MenuItems'

export default class Dropdown extends Component {
    state = [
        {
            click: false,
            subMenu: false,
        }
    ]

    componentDidMount = () =>{
        
    }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }

    onMouseEnter = (subMenuIndex) => {
        console.log("hey mouse enetr", subMenuIndex);
        if (window.innerWidth < 960) {
            this.setState({subMenu: false, subMenuIndex:subMenuIndex});
        } else {
            this.setState({subMenu: true,  subMenuIndex:subMenuIndex});
        }
    };
    
    onMouseLeave = () => {
        if (window.innerWidth < 960) {
            this.setState({subMenu: false,  subMenuIndex:""});
        } else {
            this.setState({subMenu: false, subMenuIndex:""});
        }
    };

    handleSubmenu = (item, index) => {

        if(this.state.subMenu == true && this.state.subMenuIndex == index){

            return(
                <div className={h.dropdownSubMenuContainer}>
                    {item.subMenu.map((subItem, subIndex) => 
                        <li className={h.dropdownItem} key={subIndex}>
                            <Link 
                            className={h.dropdownLinks} 
                            to={subItem.to}
                            onClick={this.closeMobileMenu}>{subItem.name}</Link>
                        </li>
                    )}
                </div>
            )
        }
    }

    render() {
        return (
            <React.Fragment>
                <ul className={h.dropdownMenu} onClick={this.handleClick}>
    
                    {NavbarItems.map((item, index) => {
                        return (
                            <li 
                            className={h.dropdownItem} 
                            key={index} 
                            onMouseLeave={this.onMouseLeave} 
                            onMouseEnter={() => this.onMouseEnter(index)}>
                                <Link className={h.dropdownLinks} to={item.to}>{item.name}</Link>
                                <FaAngleRight className={h.caretRight}/>

                                <ul>
                                    {this.handleSubmenu(item, index)}
                                </ul>
                            </li>
                        )
                    })}

                </ul>
            </React.Fragment>
        )
    }
}
