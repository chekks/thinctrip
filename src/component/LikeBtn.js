import React, { Component } from 'react'
import l from "../assets/scss/client/likeBtn.module.scss";
import { FaRegHeart } from 'react-icons/fa'

export default class LikeBtn extends Component {
    render() {
        return (
            <React.Fragment>
                <FaRegHeart className={l.heart}/>
            </React.Fragment>
        )
    }
}
