import React, { useState } from 'react'
import r from "../../assets/scss/client/review.module.scss";
import { AiFillStar } from 'react-icons/ai'
import { RateContainer } from '../../mainStyles';

const Rate = (props) => {
    const stars = Array(5).fill(0)

    const rating = () => {
        if(props.type == "singleRate"){ //Tour Package Thumb
            return (
                <RateContainer>
                    <AiFillStar/>
                    <span className={r.rateNumber}>4.8</span>
                    <span className={r.rateParticipation}>(331) • 10K+ Booked</span>
                </RateContainer>
            )
        }else if(props.type == "reviewRate") { //Individual Tour page
           return(
                <RateContainer>
                    {stars.map((_, index) => {
                        return(
                            <AiFillStar key={index}/>
                        )
                    })}
                    <span className={r.rateNumber}>4.8</span>
                </RateContainer>
           )
        }else{ //Summary in Tour Review Section
            return(
                <RateContainer summary="true">
                    <AiFillStar/>
                    <span className={r.rateNumber}>4.8</span>
                    <span className={r.rateParticipation}>(331) • 10K+ Reviews</span>
                </RateContainer>
            )
        }
    }

    return (
        <React.Fragment>
            {rating()}
        </React.Fragment>
    )
}

export default Rate
