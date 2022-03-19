import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import GoogleMap from '../../../component/GoogleMap'
import m from '../../../assets/scss/client/modal.module.scss'
import UploadFile from '../../../component/ui/UploadFile'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import '../../../assets/scss/client/slickSlider.scss'
import Button from '../../../component/ui/Button'

const setGalleryData = (galleryData) => {
    let dataLength = galleryData.length;
    let tempGalleryData = galleryData.filter((data) => data.file_name != "temp_img");
    console.log("tempGalleryData", tempGalleryData);
    if (galleryData) {
        let data = {
            id: galleryData.length + 1,
            image: "http://127.0.0.1:8000/api/storage/temp-img.png",
            file_name: "temp-img",
            file_type: "image/png",
            sort_order: tempGalleryData.length + 1
        }

        let data2 = {
            id: galleryData.length + 2,
            image: "http://127.0.0.1:8000/api/storage/temp-img.png",
            file_name: "temp-img",
            file_type: "image/png",
            sort_order: tempGalleryData.length + 2
        }
        if (tempGalleryData.length == 0) {

            return [...tempGalleryData, data, data2];
        } else {
            return [...tempGalleryData, data];
        }


    }
}
const ContributorTourGalleryModal = (props) => {

    const galleryData = useSelector((state) => state.tour.share_your_tour.gallery);
    const galleryDataModal = setGalleryData(galleryData);
    const dispatch = useDispatch();

    const [file, setFile] = useState([]);
    const [nav1, setNav1] = useState(null);
    const [slider2, setSlider2] = useState(null);
    const [beforeSlide, setBeforeSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(0);

    const closeModal = () => {
        let modal = document.getElementById(props.modal_id);
        modal.style.display = "none";
    }

    const handleFile = (file_, field_name) => {
        console.log("file", file_);
        console.log("field_name", field_name);
        console.log("slider2", slider2);
        setFile(file_);
    }

    const saveImage = () => {

    }

    const settingsThumbs = {
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        swipeToSlide: true,
        focusOnSelect: true,
        centerPadding: '10px',
        beforeChange: (current, next) => setBeforeSlide(next),
        afterChange: current => setActiveSlide(current + 1)
    };


    return (
        <React.Fragment>
            <div id={props.modal_id} className={m.modal}>

                <div className={m.modal_content}>
                    <span className={m.modal_close} onClick={closeModal}>&times;</span>
                    {/* <img src={this.props.img} className={m.img}  onClick={this.closeModal}/> */}
                    <div className="thumbnail-slider-wrap">
                        <Slider
                            {...settingsThumbs}
                            asNavFor={nav1}
                            ref={slider => (setSlider2(slider))}>

                            {galleryDataModal.map((slide) =>

                                <div className="slick-slide" key={slide.id}>
                                    <img className="slick-slide-image" src={slide.image} />
                                </div>

                            )}

                        </Slider>
                    </div>

                    <div className="pt-40">
                        <UploadFile
                            name="blog_upload_file"
                            handleFile={handleFile}
                            main_text=""
                            sub_text=""
                            select_id="show_upload_btn_select"
                            upload_filename_label=""
                            //img_src={file.length > 0 ? URL.createObjectURL(file[0]) : ""} 
                            img_src="" />

                    </div>
                    <Button variant="primary" className="mr-5" onClick={saveImage}>Save</Button>
                    <Button variant="secondary" onClick={closeModal}>Cancel</Button>

                </div>

            </div>
        </React.Fragment>
    )
}

export default ContributorTourGalleryModal;

