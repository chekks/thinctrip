import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../../../assets/scss/client/slickSlider.scss'
import "../../../assets/scss/user/contributor/contributorShareYourTour.scss"
import Button from '../../../component/ui/Button';
import { FiUploadCloud } from "react-icons/fi";

//Component
//import { galleryData } from '../../../component/Data'
import ContributorTourGalleryModal from './ContributorTourGalleryModal'



const Gallery = (props) => {
    const galleryData = useSelector((state) => state.tour.share_your_tour.gallery);

    const dispatch = useDispatch();

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [slider1, setSlider1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [isShown, setIsShown] = useState(false);

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
        slidesToShow: galleryData.length >= 5 ? 5 : galleryData.length,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px'
    };

    const triggerUpload = () => {
        let modal = document.getElementById("tour_modal");
        modal.style.display = "block";
        modal.style.transition = "0.5s;"
    }

    return (

        <div className="TourModalContainer">
            <ContributorTourGalleryModal modal_id="tour_modal"></ContributorTourGalleryModal>
            <div className="slider-wrapper">

                <h1 className="mb-50 heading border-bottom flex-left">{props.icon}{props.title}</h1>

                <Slider
                    {...settingsMain}
                    asNavFor={nav2}
                    ref={slider => (setSlider1(slider))}
                >

                    {galleryData.map((slide) =>

                        <div onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}
                            className="slick-slide" key={slide.id}>
                            {/* <img className="slick-slide-image cr_tour_gallery_image" src={`https://picsum.photos/800/400?img=${slide.id}`} /> */}
                            <img className="slick-slide-image cr_tour_gallery_image" src={slide.image} />

                            {isShown && (
                                <Button onClick={triggerUpload} variant="primary" className="btn-hover" id={`cr_gallery_main_${slide.id}`}>
                                    <FiUploadCloud className='font-96 text-white' />
                                    <p>Browse files to upload</p>
                                </Button>
                            )}

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
                                <img className="slick-slide-image" src={slide.image} />
                            </div>

                        )}

                    </Slider>
                </div>
            </div>

        </div>
    );
}

export default Gallery;
