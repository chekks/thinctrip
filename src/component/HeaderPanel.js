import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { HeaderBg, TourPrice } from '../mainStyles'
import h from "../assets/scss/client/headerPanel.module.scss"
// import '../assets/scss/function.scss'

//Component
import Currency from "../component/Currency"

const PageContent = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    position: absolute;
    justify-content: ${props => props.review ? "center" : "space-between"};
    bottom: ${props => props.review ? "30px" : "0"};

    ${props => props.review ? 
        `flex-direction: column;
        align-items: center;
        height: 100%;` 
    : ``}

    z-index: 9;

    h1{
        color: #fff;
        z-index: 6;
        font-size: 28px;
        font-weight: 500;
    }
    
    ${props => props.review ? 
        `p{
            color: #ffffffc7;
            font-size: 14px;
            font-weight: 200;
            letter-spacing: 4px;
            border-bottom: 1px solid #ffffffc7;
        }` 
    : ``}
`;

const HeaderPanel = (props) => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        //window.addEventListener("button", showButton);
        window.addEventListener("scroll", onScroll);
        return () => {
           
        }
    }, [])

    const onScroll = () => {
        if(window.scrollY >= 300) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    }

    const HeaderContent = () => {
        if(props.type == 'tour'){
            return([
                <PageContent>
                    <h1>{props.title}</h1>
                    <div className={h.priceContainer}>
                        <h2 className={h.priceRibbon}>Price</h2>

                        <TourPrice>
                            <span>From</span>
                            <p><Currency data="$"/>569</p>
                        </TourPrice>
                    </div>
                </PageContent>
            ])
        }else if(props.type == 'review'){
            return([
                <PageContent review>
                    <h1>{props.title}</h1>
                    <p>By: Cheska Rivano</p>
                </PageContent>
            ])
        }else{
            return([
                <PageContent>
                    <h1>{props.title}</h1>
                </PageContent>
            ])
        }
    }

    return (
        <React.Fragment>
            <HeaderBg src={props.bg}>
                <div className={h.pageContainer}>
                    {HeaderContent()}
                </div>
            </HeaderBg>
        </React.Fragment>
    )
}

export default HeaderPanel
