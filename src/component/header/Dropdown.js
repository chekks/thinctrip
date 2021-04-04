import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as s from './Header.styles'

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
                <s.DropdownMenu onClick={this.handleClick}>
                            
                    {NavbarItems.map((item, index) =>
                        <s.DropdownItem key={index}>
                            <s.DropdownLinks to={item.to}>{item.name}</s.DropdownLinks>
                            <s.CaretRight></s.CaretRight>
                        </s.DropdownItem>
                    )}

                </s.DropdownMenu>
            </React.Fragment>
        )
    }
}
