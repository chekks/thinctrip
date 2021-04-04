import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Button }from '../mainStyles'
import h from "../assets/scss/client/homepage.module.scss";

//components
import Carousel from '../component/Carousel'
import TourSlider from '../component/TourSlider'
import Article from '../component/Article'
import DestinationThumb from '../component/DestinationThumb'
import { Container, HeaderTitle } from '../mainStyles'

//icons
import { FaSearch, FaQuoteLeft } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

//image
import Icon_1 from '../assets/images/icons/icon_1.png'
import Icon_2 from '../assets/images/icons/icon_2.png'
import Icon_3 from '../assets/images/icons/icon_3.png'
import Icon_4 from '../assets/images/icons/icon_4.png'
import ExploreImg from '../assets/images/27.jpg'


export default class homepage extends Component {
    render() {

        const slidesData = [
            {
              id: 1,
              title: 'Philippines.',
              image: 'https://staging.thinctrip.com/wp-content/uploads/2020/04/Palawan-Main-2.jpg',
              caption: '7000 Islands. 7000 ways to explore.',
              description: 'Create your ideal holiday with the local tour providers'
            }, {
              id: 2,
              title: 'Philippines.',
              image: 'https://staging.thinctrip.com/wp-content/uploads/2020/04/Baguio-Main.jpg',
              caption: '7000 Islands. 7000 ways to explore.',
              description: 'Create your ideal holiday with the local tour providers'
            }, {
              id: 3,
              title: 'Philippines.',
              image: 'https://staging.thinctrip.com/wp-content/uploads/2020/04/shutterstock_374356339-4.jpg',
              caption: '7000 Islands. 7000 ways to explore.',
              description: 'Create your ideal holiday with the local tour providers'
            }, {
              id: 4,
              title: 'Philippines.',
              image: 'https://staging.thinctrip.com/wp-content/uploads/2020/04/Homepage-Banner-1-8.jpg',
              caption: '7000 Islands. 7000 ways to explore.',
              description: 'Create your ideal holiday with the local tour providers'
            },
        ];

        const coreData = [
            {
              title: 'Australian Owned',
              caption: 'Quality you can rely on',
              icon: Icon_1
            },
            {
              title: 'Philippine Specialist',
              caption: 'Just everything Philippines',
              icon: 'fa fa-map-marker pr-20',
              icon: Icon_2
            },
            {
              title: 'Trusted Local Experts',
              caption: 'Carefully screened for you',
              icon: 'fa fa-map-marker pr-20',
              icon: Icon_3
            },
            {
              title: 'Worry-free booking',
              caption: 'With our secure checkout',
              icon: 'fa fa-map-marker pr-20',
              icon: Icon_4
            },
        ]

        const thumbData = [
            {
              id: 1,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon',
              price: '$568' 
            }, {
              id: 2,
              tour: 'ISLAND EXPLORER — 14D & 13N',
              duration: '5 Days',
              provider: 'Blue Horizon',
              price: '$568'
            }, {
              id: 3,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon',
              price: '$568'
            }, {
              id: 4,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon',
              price: '$568'
            }, {
              id: 5,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon', 
              price: '$568'
            }, {
              id: 6,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon',
              price: '$568'
            },
        ];

        const articleData = [
            {
              id: 1,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon',
            }, {
              id: 2,
              tour: 'ISLAND EXPLORER — 14D & 13N',
              duration: '5 Days',
              provider: 'Blue Horizon',
            }, {
              id: 3,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon',
            }, {
              id: 4,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon',
            }, {
              id: 5,
              tour: 'NORTH TO SOUTH — 15D & 14N',
              duration: '5 Days',
              provider: 'Blue Horizon',
            },
        ];

        const destinationData = [
          {
            id: 1,
            tour: 'NORTH TO SOUTH — 15D & 14N',
            img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Cebu-Main-800x960-1.jpg',
          }, {
            id: 2,
            tour: 'NORTH TO SOUTH — 15D & 14N',
            img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Boracay-Main-800x960-1.jpg',
          }, {
            id: 3,
            tour: 'NORTH TO SOUTH — 15D & 14N',
            img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Bohol-Main-800x960-1.jpg',
          }, {
            id: 4,
            tour: 'NORTH TO SOUTH — 15D & 14N',
            img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Bicol-Main-800x960-1.jpg',
          }, {
            id: 5,
            tour: 'NORTH TO SOUTH — 15D & 14N',
            img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Baguio-Main-800x960-1.jpg',
          }, {
            id: 6,
            tour: 'NORTH TO SOUTH — 15D & 14N',
            img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Davao-Main-800x960.jpg',
          },
      ];


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
                            <Button><FaSearch/></Button>
                          </div>

                      </div>
                  </div>
              </div>

              <Container className={h.sectionWrapper}>
                  {coreData.map((item, index) =>
                    <div classname={h.coreContainer} key={index}>
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
                      
                    <iframe width="750" height="350" src="https://www.youtube.com/embed/YwYg6RVzlGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen className={h.exploreVid}></iframe>
                  </div>
              </Container>

              <div className={h.tourPackages}>
                <div className={h.header}>
                    <HeaderTitle className={h.headerTitle}>Popular Tour Packages</HeaderTitle>
                    <Link className={h.headerSubtitle}>/ View All Tours</Link>
                </div>
                <TourSlider data={thumbData}/>
              </div>

              <div className={h.travelDestinations}>
                <div className={h.header}>
                    <HeaderTitle className={h.headerTitle} colorDark>Bucket List Destinations</HeaderTitle>
                    <Link className={h.headerSubtitle}>/ View All Destinations</Link>
                </div>
                <DestinationThumb data={destinationData}/>
              </div>

              <Container>
                    <div className={h.header}>
                        <HeaderTitle colorDark>Travel Articles</HeaderTitle>
                        <Link className={h.headerSubtitle}>/ Read All Articles</Link>
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
                            <Input big placeholder="Your Email Address"></Input>
                            <Button><BiMailSend/></Button>
                          </div>
                    </Container>
              </div>
            </React.Fragment>
        )
    }
}

