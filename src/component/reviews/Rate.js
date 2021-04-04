import React, { Component } from 'react'
import * as s from './Review.styles'

export default class rate extends Component {
    render() {
        return (
            <React.Fragment>
                <s.RateContainer>
                    <s.RateIcon></s.RateIcon>
                    <s.RateNumber>4.8</s.RateNumber>
                    <s.RateParticipation>(331) • 10K+ Booked</s.RateParticipation>
                </s.RateContainer>
            </React.Fragment>
        )
    }
}
