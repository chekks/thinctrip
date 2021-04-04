import React, { Component } from 'react'
import * as s from './Tour.styles'
import { Input, Button }from '../../mainStyles'

//image
import BgVideo from '../../assets/images/BgVideo.mp4'

//icons
import { FaSearch, FaCalendarCheck } from 'react-icons/fa'
import { BsPersonFill } from 'react-icons/bs'

//components
import Rate from '../../component/Rate'

export default class TourPackages extends Component {
    render() {

        const tourData = [
            {
              id: 1,
              img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Cebu-Main-800x960-1.jpg',
              package: 'NORTH TO SOUTH — 15D & 14N',
              duration: '15 Days',
              availability: 'Blue Horizon',
              price: '568',
              link: '/tour/north-to-south-15d-14n',
            }, {
              id: 2,
              img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Boracay-Main-800x960-1.jpg',
              package: 'NORTH TO SOUTH — 15D & 14N',
              duration: '15 Days',
              availability: 'Blue Horizon',
              price: '568',
              link: '/tour/north-to-south-15d-14n',
            }, {
              id: 3,
              img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Bohol-Main-800x960-1.jpg',
              package: 'NORTH TO SOUTH — 15D & 14N',
              duration: '15 Days',
              availability: 'Blue Horizon',
              price: '568',
              link: '/tour/north-to-south-15d-14n/',
            }, {
              id: 4,
              img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Bicol-Main-800x960-1.jpg',
              package: 'NORTH TO SOUTH — 15D & 14N',
              duration: '15 Days',
              availability: 'Blue Horizon',
              price: '568',
              link: '/tour/north-to-south-15d-14n/',
            }, {
              id: 5,
              img: 'https://staging.thinctrip.com/wp-content/uploads/2019/07/Baguio-Main-800x960-1.jpg',
              package: 'NORTH TO SOUTH — 15D & 14N',
              duration: '15 Days',
              availability: 'Blue Horizon',
              price: '568',
              link: '/tour/north-to-south-15d-14n/',
            },
        ];

        return (
            <React.Fragment>
                <s.TourContainer>
                    <s.TourBanner>
                        <video autoPlay loop muted>
                            <source src={BgVideo} type='video/mp4' />
                        </video>

                        <s.TourContent>
                            <h1>Tour Packages</h1>
                            <p>Travel far enough, you meet yourself.</p>

                            <s.FormContainer>
                                <Input placeholder="Search from over 7000 Islands"></Input>
                                <Button><FaSearch/></Button>
                            </s.FormContainer>
                        </s.TourContent>
                    </s.TourBanner>

                    <s.TourWrapper>
                        <s.CardContainer>
                            {tourData.map((item, index) =>
                                <s.CardItem key={index}>
                                    <s.CardImg src={item.img}></s.CardImg>

                                    <s.CardContent>
                                        <s.ItemLeft>
                                            <s.ItemTitle>{item.package}</s.ItemTitle>
                                            <s.ItemDetails><FaCalendarCheck/>{item.duration} • <BsPersonFill/>{item.availability}</s.ItemDetails>
                                            <s.ItemReview>
                                                <Rate/>
                                            </s.ItemReview>
                                        </s.ItemLeft>

                                        <s.ItemRight>
                                            <s.ItemTitle>Inclusions</s.ItemTitle>
                                            <s.ItemDetails><FaCalendarCheck/>{item.duration} • {item.availability}</s.ItemDetails>
                                            <s.ItemReview>
                                                <Rate/>
                                            </s.ItemReview>
                                            <Button>View Details</Button>
                                        </s.ItemRight>
                                    </s.CardContent>
                                </s.CardItem>
                            )}
                        </s.CardContainer>
                    </s.TourWrapper>
                </s.TourContainer>
            </React.Fragment>
        )
    }
}
