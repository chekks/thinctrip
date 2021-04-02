import React, { Component } from 'react'
import * as s from './TourSlider.styles'
import { Container } from '../../mainStyles'
import Slider from "react-slick";

//components
import Rate from '../reviews/Rate'
import LikeBtn from '../like/LikeBtn'

//image
import avatar_1 from '../../assets/images/icons/boy.png'
import avatar_2 from '../../assets/images/icons/boy_2.png'
import avatar_3 from '../../assets/images/icons/man.png'
import avatar_4 from '../../assets/images/icons/man_2.png'

export default class TourSlider extends Component {
    state = {
        thumbData: this.props.data,
      }

    render() {
        const { thumbData } = this.state;

        const settings = {
            dots: false,
            infinite: true,
            lazyLoad: 'progressive',
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true
                }
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2,
                  arrows: false,
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: false,
                }
              }
            ]
            
        };

        return (
            <>
                <Container>
                    <Slider {...settings}>
                        {this.state.thumbData.map((item, index) => 
                            <s.CardContainer>
                                <s.CardItem>
                                  <LikeBtn></LikeBtn>
                                  <s.CardImg src={`https://picsum.photos/800/400?img=${item.id}`}></s.CardImg>
                                  <s.CardContent>
                                      <s.CardContentTop>
                                        <s.CardSubTitle>15 Days • Blue Horizon</s.CardSubTitle>
                                        <s.CardTitle>{item.tour}</s.CardTitle>
                                        <s.CardReview>
                                          <Rate/>
                                        </s.CardReview>
                                      </s.CardContentTop>

                                      <s.CardContentBottom>
                                        <s.FeaturedBlogContainer>
                                          {/* <p>Featured Blog</p> */}
                                          <s.FeaturedBlog>
                                            <s.FeaturedBlogImg src={avatar_1}></s.FeaturedBlogImg>
                                            <s.FeaturedBlogImg src={avatar_2}></s.FeaturedBlogImg>
                                            <s.FeaturedBlogImg src={avatar_3}></s.FeaturedBlogImg>
                                            <s.FeaturedBlogImg src={avatar_4}></s.FeaturedBlogImg>
                                          </s.FeaturedBlog>
                                        </s.FeaturedBlogContainer>
                                        <s.TourPrice>
                                          <span>from</span>$568
                                        </s.TourPrice>
                                      </s.CardContentBottom>
                                  </s.CardContent>
                                </s.CardItem>
                            </s.CardContainer>
                        )}
                    </Slider>
                </Container>
            </>
        )
    }
}
