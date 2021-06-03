import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button, CardImg, HeaderTitle, Container } from '../../mainStyles'
import t from "../../assets/scss/client/tour.module.scss"
import h from "../../assets/scss/client/homepage.module.scss"

//image
import BgVideo from '../../assets/images/BgVideo.mp4'

//icons
import { FaSearch, FaCheck, FaRegCalendarCheck } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'

//components
import Rate from '../../component/reviews/Rate'
import Currency from '../../component/Currency'
import TourSlider from '../../component/TourSlider'
import Article from '../../component/Article'
import { 
    tourData, 
    thumbData,
    articleData 
} from '../../component/Data'

const TourPackages = (props) => {
    return (
        <React.Fragment>
            <div className={t.bannerContainer}>
                <video autoPlay loop muted>
                    <source src={BgVideo} type='video/mp4' />
                </video>

                <div className={t.bannerContent}>
                    <h1>Tour Packages</h1>
                    <p>Travel far enough, you meet yourself.</p>

                    <div className={t.formContainer}>
                        <Input placeholder="Search from over 7000 Islands"></Input>
                        <Button radRight><FaSearch/></Button>
                    </div>
                </div>
            </div>

            <div className={t.wrapper}>
                <div className={t.cardContainer}>
                    {tourData.map((item, index) =>
                        <div className={t.cardItem}>
                            <CardImg src={item.img} className={t.cardImg}></CardImg>

                            <div className={t.cardContent}>
                                <div className={t.itemLeft}>
                                    <h1 className={t.itemTitle}>{item.package}</h1>

                                    <div className={t.itemReview}><Rate type="singleRate"/></div>

                                    <ul className={t.tourActivities}>
                                        <li><FaCheck/>Air Whale Watching in Kaikoura</li>
                                        <li><FaCheck/>Exciting Kaikoura Whale Watching Tour</li>
                                        <li><FaCheck/>Serene break while river rafting on Waiau River Canyon exposed to scenic views</li>
                                    </ul>
                                </div>

                                <div className={t.itemRight}>
                                    <div className={t.tourPrice}>
                                        <span>From</span>
                                        <h1><Currency data="$"/>{item.price}</h1>
                                    </div>

                                    {/* <div className={t.itemDetails}>{item.duration} • <BsPersonFill/>{item.availability}</div> */}

                                    <ul className={t.tourDetails}>
                                        <li><FaRegCalendarCheck/>{item.duration}</li>
                                        <li><BsPersonFill/>{item.availability}</li>
                                    </ul>
                                    
                                    <Button to={item.link} w100>View Details</Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className={h.tourPackages}>
                <div className={h.header}>
                    <HeaderTitle className={h.headerTitle}>Popular Tour Packages</HeaderTitle>
                    <Link className={h.headerSubtitle}>/ View All Tours</Link>
                </div>
                <TourSlider data={thumbData}/>
            </div>

            <Container>
                <div className={h.header}>
                    <HeaderTitle colorDark>Travel Articles</HeaderTitle>
                    <Link className={h.headerSubtitle}>/ Read All Articles</Link>
                </div>

                <Article data={articleData}/>
            </Container>
        </React.Fragment>
    )
}

export default TourPackages
