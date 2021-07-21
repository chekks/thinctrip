import React from 'react'
import t from '../../assets/scss/client/tourDetails.module.scss'

import { BsCheck } from 'react-icons/bs'
import { GrFormClose } from 'react-icons/gr'

const TourDetails = (props) => {
    return (
        <React.Fragment>
            <h1 className="title title-md border-b flex-left">{props.icon} {props.title}</h1>
            <div className={t.details}>
                <div className={t.includes}>
                    <h3>Inclusive Of</h3>
                    <ul>
                        <li><span><BsCheck/></span> One (1) night accommodation at Astoria Palawan</li>
                        <li><span><BsCheck/></span>Three (3) nights accommodation at Flower Island</li>
                        <li><span><BsCheck/></span>Two (2) nights accommodation at El Nido Resorts Miniloc</li>
                        <li><span><BsCheck/></span>Meals as per program (B = Breakfast / L = Lunch / D = Dinner)</li>
                        <li><span><BsCheck/></span>Private Airport transfers in Manila as specified in the Itinerary</li>
                        <li><span><BsCheck/></span>Private Transfers from Puerto Princesa Airport to Sheridan Resort</li>
                    </ul>
                </div>

                <div className={t.excludes}>
                    <h3>Not Inclusive Of</h3>
                    <ul>
                        <li><span><GrFormClose/></span>Meals not specified in the itinerary</li>
                        <li><span><GrFormClose/></span>Flights Manila - Puerto Princesa / El Nido - Manila (rate subject to availability)</li>
                        <li><span><GrFormClose/></span>Expenses of personal nature</li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}

export default TourDetails