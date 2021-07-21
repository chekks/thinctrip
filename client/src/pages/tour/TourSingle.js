import React from 'react'
import { Link } from 'react-router-dom'
import t from '../../assets/scss/client/tourSingle.module.scss'
import h from "../../assets/scss/client/homepage.module.scss"
import { HeaderTitle, Container } from '../../mainStyles'

//Component
import HeaderPanel from '../../component/HeaderPanel'
import Gallery from '../../component/Gallery'
import Review from '../../component/reviews/Review'
import TourSlider from '../../component/TourSlider'
import Article from '../../component/Article'
import Itinerary from '../../component/itinerary/Itinerary'
import TourDetails from './TourDetails'
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


const TourSingle = (props) => {
    return (
        <React.Fragment>
            <HeaderPanel
                type="tour"
                title="FROM HIGHLANDS TO ISLANDS — 12D & 11N"
                bg="https://staging.thinctrip.com/wp-content/uploads/2019/09/bg_1.jpg"
            />

            <div className={t.container}>

                {/* ************* Tour Info ************* */}
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

                        {/* ************* Tour Details ************* */}
                        <div className={t.tourDetails}>
                            <TourDetails
                                title="Tour Details"
                                icon={<FaRegFileAlt/>}
                            />
                        </div>

                        {/* ************* Itinerary ************* */}
                        <div className={t.itinerary}>
                            <Itinerary
                                title="Itinerary"
                                icon={<FaMapSigns/>}
                            />
                        </div>

                        {/* ************* Gallery ************* */}
                        <div className={t.gallery}>
                            <Gallery
                                title="Gallery"
                                icon={<FaCameraRetro/>}
                            />
                        </div>
                        
                        {/* ************* Reviews ************* */}
                        <div className={t.reviews}>
                            <Review
                                title="Reviews"
                                icon={<FaCommentAlt/>}
                            />
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