import React, { Component } from 'react'
import { CardImg } from '../mainStyles'
import d from "../assets/scss/client/destinationThumb.module.scss";
import styled from "styled-components";


export default class destinationThumb extends Component {
    state = {
        destinationData: this.props.data,
    }
    
    render() {
        return (
            <React.Fragment>
                <div className={d.cardContainer}>
                    {this.state.destinationData.map((item, index) =>
                        <div className={d.cardItem}>
                            <div className={d.overlay}></div>
                            <CardImg src={item.img} className={d.cardImg}></CardImg>

                            <p className={d.overlayDescription}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio sed explicabo laboriosam. Eaque dicta totam recusandae omnis ut tempore fuga, quos officia inventore enim pariatur neque natus facilis praesentium?
                            </p>
                                
                            <div className={d.cardContent}>
                                <h1 className={d.cardTitle}>Cebu <span>5 tours</span></h1>
                            </div>

                            <div className={d.cardButton}>View All Tours</div>
                        </div>
                    )}

                </div>
            </React.Fragment>
        )
    }
}
