import React, { Component } from 'react'
import r from "../assets/scss/client/rate.module.scss";
import { AiFillStar } from 'react-icons/ai'

export default class rate extends Component {
    render() {
        return (
            <React.Fragment>
                <div className={r.rateContainer}>
                    <AiFillStar className={r.rateIcon}></AiFillStar>
                    <span className={r.rateNumber}>4.8</span>
                    <span className={r.rateParticipation}>(331) • 10K+ Booked</span>
                </div>
            </React.Fragment>
        )
    }
}
