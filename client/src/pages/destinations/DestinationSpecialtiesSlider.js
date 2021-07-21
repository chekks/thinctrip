import React, { Component } from "react";
import { Container, CardImg, HeaderTitle } from "../../mainStyles";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import t from "../../assets/scss/client/tourSlider.module.scss";
import ht from "../../assets/scss/client/headerTitle.module.scss";
import Modal from '../../component/widgets/Modal'

//components
import Rate from "../../component/reviews/Rate";
// import LikeBtn from './LikeBtn'

//image
// import avatar_1 from '../assets/images/icons/boy.png'
// import avatar_2 from '../assets/images/icons/boy_2.png'
// import avatar_3 from '../assets/images/icons/man.png'
// import avatar_4 from '../assets/images/icons/man_2.png'

export default class TourSlider extends Component {
    state = {
        thumbData: this.props.data,
        active_item : {
            description: "",
            img: ""
        }
    };

    openModal = (item) =>{
        console.log("opening modal", item);
        this.setState({active_item : item}, ()=>{
          let modal = document.getElementById("specialties_slider_modal");
          modal.style.display = "block";
          modal.style.transition = "0.5s;"
        });
    }


    render() {
        const { thumbData } = this.state;

        const settings = {
            dots: false,
            infinite: true,
            lazyLoad: "progressive",
            speed: 1000,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                    },
                },
            ],
        };

        return (
            <React.Fragment>
                {/* <div className={ht.header}>
                    <HeaderTitle className={ht.headerTitle}>Popular Tour Packages</HeaderTitle>
                    <Link className={ht.headerSubtitle}>/ View All Tours</Link>
                </div> */}
                <Modal item = {this.state.active_item} modal_id="specialties_slider_modal"/>
                <Container className="destination_slider_container">
                    <Slider {...settings}>
                        {this.state.thumbData.map((item, index) => (
                            <div className={t.cardContainer}>
                                <div className={t.cardItem}>
                                   
                                    <div className="destination__local--container pt-40">
                                        <div
                                            className="destination__local--item"
                                            key={index}
                                        >
                                            <div className="destination__local--thumb">
                                                <img
                                                    src={item.img}
                                                    alt="Image"
                                                />
                                            </div>

                                            <div className="destination__local--details">
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                                <button id="myBtn" className="btn_item_see_more" onClick={() =>this.openModal(item)}>[SEE MORE]</button>
                                                <br/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </Container>
            </React.Fragment>
        );
    }
}
