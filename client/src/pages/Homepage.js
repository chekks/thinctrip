import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button }from '../mainStyles'
import h from "../assets/scss/client/homepage.module.scss"
import '../assets/scss/client/slickSlider.scss'

//components
import Carousel from '../component/Carousel'
import TourSlider from '../component/TourSlider'
import Article from '../component/Article'
import DestinationThumb from '../component/DestinationThumb'
import { Container, HeaderTitle } from '../mainStyles'
import { 
  slidesData, 
  coreData, 
  thumbData, 
  articleData,
  destinationData 
} from '../component/Data'

//icons
import { FaSearch, FaQuoteLeft } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

//image
import ExploreImg from '../assets/images/27.jpg'

const Homepage = (props) => {
  return (
    <React.Fragment>
        <div className={h.carouselSec}>
            <Carousel data={slidesData}/>

            <div className={h.carouselContent}>
                <div className={h.contentContainer}>
                    <h1>Philippines</h1>
                    <h3>7000 Islands. 7000 ways to explore</h3>
                    <p>Create your ideal holiday with the local tour providers</p>

                    <div className={h.formContainer}>
                      <Input placeholder="Search from over 7000 Islands"></Input>
                      <Button radRight><FaSearch/></Button>
                    </div>

                </div>
            </div>
        </div>

        <Container className={h.sectionWrapper}>
            {coreData.map((item, index) =>
              <div className={h.coreContainer} key={index}>
                <img className={h.coreImg} src={item.icon} />

                <div className={h.coreDetails}>
                  <h3>{item.title}</h3>
                  <p>{item.caption}</p>
                </div>
              </div>
            )}
        </Container>

        <Container className={h.sectionWrapper}>
            <div className={h.exploreContainer}>
              <div className={h.exploreImgContainer}>
                  <img className={h.exploreImg} src={ExploreImg} />
              </div>
                
              <iframe width="750" height="350" src="https://www.youtube.com/embed/YwYg6RVzlGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className={h.exploreVid}></iframe>
            </div>
        </Container>

        <div className={h.tourPackages}>
            <div className={h.header}>
                <HeaderTitle className={h.headerTitle}>Popular Tour Packages</HeaderTitle>
                <Link to="/" className={h.headerSubtitle}>/ View All Tours</Link>
            </div>
            <TourSlider data={thumbData}/>
        </div>

        <div className={h.travelDestinations}>
            <div className={h.header}>
                <HeaderTitle className={h.headerTitle} colorDark>Bucket List Destinations</HeaderTitle>
                <Link to="/" className={h.headerSubtitle}>/ View All Destinations</Link>
            </div>
            <DestinationThumb data={destinationData}/>
        </div>

        <Container>
            <div className={h.header}>
                <HeaderTitle className={h.headerTitle} colorDark>Travel Testimonials</HeaderTitle>
                <Link to="/" className={h.headerSubtitle}>/ Read All Articles</Link>
            </div>

            <Article data={articleData}/>
        </Container>

        <div className={h.newsletterContainer}>
            <Container className={h.newsletterContent}>
                <div className={h.newsletterDescription}>
                    <h1><FaQuoteLeft/>Subscribe to get latest offers and deals today</h1>
                    <p>Be in the loop with all of the latest tips, promos and updates on our tours by subscribing to our newsletter or visiting our social media pages.</p>
                </div>
                <div className={h.formContainer}>
                    <Input big="true" placeholder="Your Email Address"></Input>
                    <Button radRight><BiMailSend/></Button>
                </div>
            </Container>
        </div>
    </React.Fragment>
  )
}

export default Homepage
