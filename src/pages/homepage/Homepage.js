import React, { Component } from 'react'
import * as s from './Homepage.styles'
import { Input, Button }from '../../mainStyles'

//components
import Carousel from '../../component/carousel/Carousel'
import TourSlider from '../../component/tourSlider/TourSlider'
import Article from '../../component/articles/Article'
import DestinationThumb from '../../component/destinationThumb/DestinationThumb'

//icons
import { FaSearch, FaQuoteLeft } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'

//image
import Icon_1 from '../../assets/images/icons/icon_1.png'
import Icon_2 from '../../assets/images/icons/icon_2.png'
import Icon_3 from '../../assets/images/icons/icon_3.png'
import Icon_4 from '../../assets/images/icons/icon_4.png'
import ExploreImg from '../../assets/images/27.jpg'


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
              <s.CarouselSec>
                <Carousel data={slidesData}/>
                  <s.CarouselContent>
                      <s.ContentContainer>
                          <h1>Philippines</h1>
                          <h3>7000 Islands. 7000 ways to explore</h3>
                          <p>Create your ideal holiday with the local tour providers</p>

                          <s.FormContainer>
                            <Input placeholder="Search from over 7000 Islands"></Input>
                            <Button><FaSearch/></Button>
                          </s.FormContainer>

                      </s.ContentContainer>
                  </s.CarouselContent>
              </s.CarouselSec>

              <s.SectionWrapper>
                  {coreData.map((item, index) =>
                    <s.CoreContainer key={index}>
                      <s.CoreImg src={item.icon}></s.CoreImg>

                      <s.CoreDetails>
                        <h3>{item.title}</h3>
                        <p>{item.caption}</p>
                      </s.CoreDetails>
                    </s.CoreContainer>
                  )}
              </s.SectionWrapper>

              <s.SectionWrapper>
                  <s.ExploreContainer>
                    <s.ExploreImgContainer>
                        <s.ExploreImg src={ExploreImg}></s.ExploreImg>
                    </s.ExploreImgContainer>
                      
                    <s.ExploreVid width="750" height="350" src="https://www.youtube.com/embed/YwYg6RVzlGg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></s.ExploreVid>
                  </s.ExploreContainer>
              </s.SectionWrapper>

              <s.TourPackages>
                    <s.Header>
                        <s.HeaderTitle>Popular Tour Packages</s.HeaderTitle>
                        <s.HeaderSubtitle>/ View All Tours</s.HeaderSubtitle>
                    </s.Header>
                    <TourSlider data={thumbData}/>
              </s.TourPackages>

              <s.TravelDestinations>
                    <s.Header>
                        <s.HeaderTitle colorDark>Bucket List Destinations</s.HeaderTitle>
                        <s.HeaderSubtitle>/ View All Destinations</s.HeaderSubtitle>
                    </s.Header>
                    <DestinationThumb data={destinationData}/>
              </s.TravelDestinations>

              <s.TravelArticles>
                    <s.Header>
                        <s.HeaderTitle colorDark>Travel Articles</s.HeaderTitle>
                        <s.HeaderSubtitle>/ Read All Articles</s.HeaderSubtitle>
                    </s.Header>

                    <Article data={articleData}/>
              </s.TravelArticles>

              <s.NewsletterContainer>
                    <s.NewsletterContent>
                        <s.NewsletterDescription>
                            <h1><FaQuoteLeft/>Subscribe to get latest offers and deals today</h1>
                            <p>Be in the loop with all of the latest tips, promos and updates on our tours by subscribing to our newsletter or visiting our social media pages.</p>
                        </s.NewsletterDescription>
                        <s.FormContainer>
                            <Input big placeholder="Your Email Address"></Input>
                            <Button><BiMailSend/></Button>
                          </s.FormContainer>
                    </s.NewsletterContent>
              </s.NewsletterContainer>
            </React.Fragment>
        )
    }
}

