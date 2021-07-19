import React from 'react'
import { Link } from 'react-router-dom'
import t from '../../assets/scss/client/tourSingle.module.scss'
import h from "../../assets/scss/client/homepage.module.scss"
import { SidePanel, HeaderTitle, Container } from '../../mainStyles'

//Component
import HeaderPanel from '../../component/HeaderPanel'
import Accordion from '../../component/Accordion'
import EnquiryForm from '../../component/forms/EnquiryForm'
import GoogleMap from '../../component/GoogleMap'
import GuideWidget from '../../component/widgets/GuideWidget'
import Gallery from '../../component/Gallery'
import { itineraryData } from '../../component/Data'
import Review from '../../component/reviews/Review'
import TourSlider from '../../component/TourSlider'
import Article from '../../component/Article'
import { 
  thumbData, 
  articleData,
} from '../../component/Data'

//Icons
import { 
    FaRegClock, 
    FaCalendarAlt,
    FaTicketAlt,
    FaUser,
    FaMapSigns,
    FaRegFileAlt,
    FaCameraRetro,
    FaPlaneDeparture,
    FaPlaneArrival,
    FaCommentAlt
} from 'react-icons/fa'
import { GrFormClose } from 'react-icons/gr'
import { BsCheck } from 'react-icons/bs'

const TourSingle = (props) => {
    return (
        <React.Fragment>
            <HeaderPanel
                type="tour"
                title="FROM HIGHLANDS TO ISLANDS — 12D & 11N"
                bg="https://staging.thinctrip.com/wp-content/uploads/2019/09/bg_1.jpg"
            />

            <div className={t.container}>
                <div className={t.header}>
                    <div className={t.info}>
                        <ul>
                            <li><FaRegClock/>15 Days</li>
                            <li><FaPlaneDeparture/>Siargao</li>
                            <li><FaCalendarAlt/>December 31, 2019</li>
                        </ul>
                        
                        <ul>
                            <li><FaUser/>Tour Provider: Cedric Tenorio</li>
                            <li><FaPlaneArrival/>Manila</li>
                            <li><FaTicketAlt/>Package # : 005</li>
                        </ul>
                    </div>

                    <div className={t.menuWrapper}>
                        <ul className={t.menu}>
                            <li>Details</li>
                            <li>Gallery</li>
                            <li>Itinerary</li>
                            <li>Map</li>
                            <li>Reviews</li>
                        </ul>
                    </div>
                </div>
                
                <div className={t.wrapper}>
                    <div className={t.content}>
                        <h1><FaRegFileAlt/>Tour Details</h1>
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

                        <h1><FaMapSigns/>Itinerary</h1>
                        <div className={t.itinerary}>
                            <ul>
                            {itineraryData.map((item, index) =>
                                <li className={t.itineraryItem} key={index}>
                                    <div className={t.itineraryTrail}>
                                        <span>
                                            {item.day}
                                        </span>
                                    </div>
                                
                                    <div className={t.itineraryDetails}>
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

                            <div className={t.map}>
                            {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=12pO_Q4yf2Ff3YSsmBeJYiK6ztKpkOasW" width="380" height="480"></iframe> */}
                                <GoogleMap/>
                            </div>
                        </div>

                        <h1><FaCameraRetro/>Gallery</h1>
                        <div className={t.gallery}>
                            <Gallery/>
                        </div>
                        
                        <h1><FaCommentAlt/>Reviews</h1> 
                        <div className={t.reviews}>
                            <Review/>
                        </div>
                    </div>

                    
                </div>

                <div className={h.tourPackages}>
                    <div className={h.header}>
                        <HeaderTitle className={h.headerTitle}>Related Tour Packages</HeaderTitle>
                        <Link to="/" className={h.headerSubtitle}>/ View All Tours</Link>
                    </div>
                    <TourSlider data={thumbData}/>
                </div>

                <Container>
                    <div className={h.header}>
                        <HeaderTitle colorDark>Related Articles</HeaderTitle>
                        <Link to="/" className={h.headerSubtitle}>/ Read All Articles</Link>
                    </div>

                    <Article data={articleData}/>
                </Container>
            </div>
        </React.Fragment>
    )
}

export default TourSingle
