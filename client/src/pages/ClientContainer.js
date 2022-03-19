import React, { Component } from 'react'
import Header from '../component/header/Navbar';
import Footer from '../component/Footer';
import Routes from '../Routes';
import '../assets/scss/client/client.scss'

export default class ClientContainer extends Component {
    render() {
        return (
            <div>
                <Header/><Routes/><Footer/>
            </div>
        )
    }
}
