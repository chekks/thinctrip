import React, { Component } from 'react'
import Slider from "react-slick"
import * as s from './Carousel.styles'

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
                        <s.SliderImg src="https://staging.thinctrip.com/wp-content/uploads/2020/04/Palawan-Main-2.jpg"></s.SliderImg>
                    )}
                </Slider>
            </div>
        )
    }
}
