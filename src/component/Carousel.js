import React, { Component } from 'react'
import Slider from "react-slick"
import s from "../assets/scss/client/carousel.module.scss";


export default class carousel extends Component {
    state = {
        slidesData: this.props.data,
    }

    render() {
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
            <div>
                <Slider {...settings}>
                   
                    {this.state.slidesData.map((slide) =>
                        <img className={s.img} src="https://staging.thinctrip.com/wp-content/uploads/2020/04/Palawan-Main-2.jpg" />  
                    )}
                </Slider>
            </div>
        )
    }
}
