import React, { Component } from 'react'
import Slider from "react-slick"
import s from "../assets/scss/client/carousel.module.scss";

const Carousel = (props) => {

    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
        <React.Fragment>
            <Slider {...settings}> 
                <img className={s.img} src="https://staging.thinctrip.com/wp-content/uploads/2020/04/Palawan-Main-2.jpg" />  
            </Slider>
        </React.Fragment>
    )
}

export default Carousel
