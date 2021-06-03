import React, { useState, useEffect } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../assets/scss/client/slickSlider.scss'

//Component
import { galleryData } from '../component/Data'

const Gallery = () => {

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
  
    useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
    });
  
    const settingsMain = {
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-nav'
    };
  
    const settingsThumbs = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: '.slider-for',
      dots: true,
      centerMode: true,
      swipeToSlide: true,
      focusOnSelect: true,
      centerPadding: '10px'
    };

    return (
  
      <div className="App">
  
        <div className="slider-wrapper">
  
          <Slider
            {...settingsMain}
            asNavFor={nav2}
            ref={slider => (setSlider1(slider))}
          >
  
            {galleryData.map((slide) =>
  
              <div className="slick-slide" key={slide.id}>
                <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                <label className="slick-slide-label">{slide.label}</label>
              </div>
  
            )}
  
          </Slider>
          <div className="thumbnail-slider-wrap">
            <Slider
              {...settingsThumbs}
              asNavFor={nav1}
              ref={slider => (setSlider2(slider))}>
  
              {galleryData.map((slide) =>
  
                <div className="slick-slide" key={slide.id}>
                  <img className="slick-slide-image" src={`https://picsum.photos/800/400?img=${slide.id}`} />
                </div>
  
              )}
  
            </Slider>
          </div>
        </div>
  
      </div>
    );
  }
  
  export default Gallery;