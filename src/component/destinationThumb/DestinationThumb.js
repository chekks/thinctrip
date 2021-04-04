import React, { Component } from 'react'
import * as s from './DestinationThumb.styles'

export default class destinationThumb extends Component {
    state = {
        destinationData: this.props.data,
    }
    
    render() {
        return (
            <React.Fragment>
                <s.CardContainer>

                    {this.state.destinationData.map((item, index) =>
                        <s.CardItem>
                            <s.Overlay></s.Overlay>
                            <s.CardImg src={item.img}></s.CardImg>

                            <s.OverlayDescription>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta optio sed explicabo laboriosam. Eaque dicta totam recusandae omnis ut tempore fuga, quos officia inventore enim pariatur neque natus facilis praesentium?
                            </s.OverlayDescription>
                                
                            <s.CardContent>
                                <s.CardTitle>Cebu <span>5 tours</span></s.CardTitle>
                            </s.CardContent>

                            <s.CardButton>View All Tours</s.CardButton>
                        </s.CardItem>
                    )}

                </s.CardContainer>
            </React.Fragment>
        )
    }
}
