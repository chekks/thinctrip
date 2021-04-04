import React, { Component } from 'react'
import { Container , CardImg } from '../mainStyles'
import a from "../assets/scss/client/article.module.scss";



export default class Article extends Component {
    state = {
        articleData: this.props.data,
    }

    render() {
        return (
            <React.Fragment>
                <div className={a.cardContainer}>

                    {this.state.articleData.map((item, index) =>
                        <div className={a.cardItem}>
                            <CardImg className={a.cardImg} src={`https://picsum.photos/800/400?img=${item.id}`}></CardImg>
                            <div className={a.cardContent}>
                                <h1 className={a.cardTitle}>The Surfing Man Will Blow Your Mind</h1>

                                <p className={a.cardInfo}>Feb 8, 2021 • By Cedric Tenorio </p>
                            </div>
                        </div>
                    )}

                </div>
            </React.Fragment>
        )
    }
}
 