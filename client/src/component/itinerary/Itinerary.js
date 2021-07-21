import React from 'react'
import i from '../../assets/scss/client/itinerary.module.scss'

//Component
import { itineraryData } from '../Data'
import GoogleMap from '../GoogleMap'
import Accordion from '../Accordion'

const  Itinerary = (props) => {
    return (
        <React.Fragment>
            <h1 className="mb-50 heading border-bottom flex-left"><span className="mr-10">{props.icon}</span>{props.title}</h1>
            <div className={i.wrapper}>
                <ul>
                    {itineraryData.map((item, index) =>
                        <li className={i.item} key={index}>
                            <div className={i.trail}>
                                <span>
                                    {item.day}
                                </span>
                            </div>
                        
                            <div className={i.details}>
                                <h4>{item.title}</h4>
                                <p>{item.description}</p>
                                <Accordion>
                                    <img src="https://media-cdn.tripadvisor.com/media/photo-s/05/e0/2b/c0/white-beach-puerto-galera.jpg"/>
                                    <p>{item.content}</p>
                                </Accordion>
                            </div>
                        </li>
                    )}
                </ul>

                <div className={i.map}>
                {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=12pO_Q4yf2Ff3YSsmBeJYiK6ztKpkOasW" width="380" height="480"></iframe> */}
                    <GoogleMap/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Itinerary