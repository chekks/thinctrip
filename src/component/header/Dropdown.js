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
        }
    ]

    handleClick = () => {
        this.setState({clicked: !this.state.clicked});
    }


    render() {
        return (
            <React.Fragment>
                <ul className={h.dropdownMenu} onClick={this.handleClick}>
                            
                    {NavbarItems.map((item, index) =>
                        <li className={h.dropdownItem} key={index}>
                            <Link className={h.dropdownLinks} to={item.to}>{item.name}</Link>
                            <FaAngleRight className={h.caretRight}/>
                        </li>
                    )}

                </ul>
            </React.Fragment>
        )
    }
}
