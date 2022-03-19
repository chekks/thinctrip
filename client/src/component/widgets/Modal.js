import React, { Component } from 'react'
import GoogleMap from '../../component/GoogleMap'
import m from '../../assets/scss/client/modal.module.scss'

export default class Modal extends Component {

    state = {

    }

    closeModal = () => {
        let modal = document.getElementById(this.props.modal_id);
        modal.style.display = "none";
    }
    render() {
        return (
            <React.Fragment>
                <div id={this.props.modal_id} className={m.modal}>

                    <div className={m.modal_content}>
                        <span className={m.modal_close} onClick={this.closeModal}>&times;</span>
                        {/* <img src={this.props.img} className={m.img}  onClick={this.closeModal}/> */}
                        <div className="destination__attraction--container pt-40">

                            <div className="destination__attraction--item" >
                                <div className={'destination__attraction--modal'}>
                                    <div className="destination__attraction--thumb">
                                        <img src={this.props.item.img} alt="Image" />
                                    </div>

                                    <div className="destination__attraction--details">
                                        <h3>{this.props.item.title}</h3>
                                        <p>{this.props.item.description}</p>
                                    </div>
                                    <br />
                                    {
                                        this.props.modal_id == "specialties_slider_modal" ?
                                            <div className="destination__attraction--details" >
                                                <h3>Suggested Restaurants</h3>
                                                <br />
                                                <div>
                                                    <h4>Sample Restaurant 1</h4>
                                                    <p>123 St. Baguio City</p>
                                                    <p>7am - 12:30 am (Today)</p>
                                                    <p>+63-2-812-123-55</p>
                                                </div>
                                            </div>

                                            :

                                            <div className="destination__attraction--details" >
                                                <h3>Location</h3>
                                                <div className={m.modal_map}>
                                                    {/* <iframe src="https://www.google.com/maps/d/u/0/embed?mid=12pO_Q4yf2Ff3YSsmBeJYiK6ztKpkOasW" width="380" height="480"></iframe> */}
                                                    <GoogleMap />
                                                </div>
                                            </div>
                                    }

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}
