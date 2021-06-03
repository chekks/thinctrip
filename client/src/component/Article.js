import React from 'react'
import { Container , CardImg } from '../mainStyles'
import a from "../assets/scss/client/article.module.scss"

const Article = (props) => {
    return (
        <React.Fragment>
            <div className={a.cardContainer}>
                {props.data.map((item, index) =>
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

export default Article
