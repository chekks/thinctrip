import React, { Component } from 'react'
import * as s from './Article.styles'
import { Container } from '../../mainStyles'

export default class Article extends Component {
    state = {
        articleData: this.props.data,
    }

    render() {
        return (
            <React.Fragment>
                <s.CardContainer>

                    {this.state.articleData.map((item, index) =>
                        <s.CardItem>
                            <s.CardImg src={`https://picsum.photos/800/400?img=${item.id}`}></s.CardImg>
                            <s.CardContent>
                                <s.CardTitle>The Surfing Man Will Blow Your Mind</s.CardTitle>

                                <s.CardInfo>Feb 8, 2021 • By Cedric Tenorio </s.CardInfo>
                            </s.CardContent>
                        </s.CardItem>
                    )}

                </s.CardContainer>
            </React.Fragment>
        )
    }
}
 