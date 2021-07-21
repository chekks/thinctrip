import React, { Component } from 'react'
import { Container , CardImg, HeaderTitle } from '../mainStyles'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import t from "../assets/scss/client/tourSlider.module.scss";
import ht from "../assets/scss/client/headerTitle.module.scss";

//components
import Rate from '../component/reviews/Rate'
import LikeBtn from './LikeBtn'


//image
import avatar_1 from '../assets/images/icons/boy.png'
import avatar_2 from '../assets/images/icons/boy_2.png'
import avatar_3 from '../assets/images/icons/man.png'
import avatar_4 from '../assets/images/icons/man_2.png'



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
            <React.Fragment>
                <div className={ht.header}>
                    <HeaderTitle className={ht.headerTitle}>Popular Tour Packages</HeaderTitle>
                    <Link className={ht.headerSubtitle}>/ View All Tours</Link>
                </div>
                <Container>
                    <Slider {...settings}>
                        {this.state.thumbData.map((item, index) => 
                            <div className={t.cardContainer}>
                                <div className={t.cardItem}>
                                  <LikeBtn></LikeBtn>
                                  <CardImg className={t.cardImg} src={`https://picsum.photos/800/400?img=${item.id}`} ></CardImg>
                                  <div className={t.cardContent}>
                                      <div className={t.cardContentTop}>
                                        <div className={t.cardSubTitle}>15 Days • Blue Horizon</div>
                                        <div className={t.cardTitle}>{item.tour}</div>
                                        <div className={t.cardReview}>
                                          <Rate type="singleRate"/>
                                        </div>
                                      </div>

                                      <div className={t.cardContentBottom}>
                                        <div className={t.featuredBlogContainer}>
                                          {/* <p>Featured Blog</p> */}
                                          <div className="flex">
                                            <img className={t.featuredBlogImg} src={avatar_1} />
                                            <img className={t.featuredBlogImg} src={avatar_2} />
                                            <img className={t.featuredBlogImg} src={avatar_3} />
                                            <img className={t.featuredBlogImg} src={avatar_4} />
                                          </div>
                                        </div>
                                        <div className={t.tourPrice}>
                                          <span>from</span>$568
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        )}
                    </Slider>
                </Container>
            </React.Fragment>
        )
    }
}
