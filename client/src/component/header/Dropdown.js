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

    onMouseEnter = () => {
        if (window.innerWidth < 960) {
            this.setState({subMenu: false});
        } else {
            this.setState({subMenu: true});
        }
    };
    
    onMouseLeave = () => {
        if (window.innerWidth < 960) {
            this.setState({subMenu: false});
        } else {
            this.setState({subMenu: false});
        }
    };

    handleSubmenu = (item) => {
        console.log("item", item.subMenu)
        if(this.state.subMenu == true){
            return(
                <div className={h.dropdownSubMenuContainer}>
                    {item.subMenu.map((subItem, subIndex) => 
                        <li className={h.dropdownItem} key={subIndex}>
                            <Link 
                            className={h.dropdownLinks} 
                            to={subItem.to}
                            onClick={this.closeMobileMenu}>{subItem.name}</Link>
                            <FaAngleRight className={h.caretRight}/>
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
                            onMouseEnter={this.onMouseEnter}>
                                <Link className={h.dropdownLinks} to={item.to}>{item.name}</Link>
                                <FaAngleRight className={h.caretRight}/>

                                <ul>
                                    {this.handleSubmenu(item)}
                                </ul>
                            </li>
                        )
                    })}

                </ul>
            </React.Fragment>
        )
    }
}
