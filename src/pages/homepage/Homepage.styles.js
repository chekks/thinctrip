import React from 'react'
import styled from 'styled-components'
import { Container } from '../../mainStyles'
import { Link } from 'react-router-dom'

export const CarouselSec = styled.div`
    max-height: 80vh;
    position: relative;
    overflow: hidden;
    top:-80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: -80px;

    &:after{
        content: "";
        position: absolute;
        background: rgb(0,0,0);
        background: linear-gradient(0deg, rgba(0,0,0,0) 0%,#000000d9 100%);
        width: 100%;
        z-index: 19;
        height: 100%;
        top: 0;
        z-index: 3;
    }
`;

export const CarouselContent = styled.div`
    position: absolute;
    z-index: 4;
    width: 100%;
    padding: 0 30px;
`;

export const ContentContainer = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 8px 25px;
    line-height: 60px;

    @media screen and (max-width: 768px) {
        line-height: 35px;
    }

    @media screen and (max-width: 480px) {
        line-height: 25px;
        top: 80px;
    }

    h1 {
        color: #fff;
        font-size: 54px;
        text-align: left;
        font-weight: 700;

        @media screen and (max-width: 768px) {
            font-size: 32px;
        }

        @media screen and (max-width: 480px) {
            font-size: 22px;
        }
    }

    h3 {
        color: #fff;
        font-size: 36px;
        text-align: left;
        font-weight: 700;

        @media screen and (max-width: 768px) {
            font-size: 24px;
        }

        @media screen and (max-width: 480px) {
            font-size: 18px;
        }
    }

    p {
        color: #cdcdcd;
        font-size: 20px;
        text-align: left;
        max-width: 600px;
        font-weight: 400;

        @media screen and (max-width: 768px) {
            font-size: 16px;
        }

        @media screen and (max-width: 480px) {
            font-size: 12px;
        }
    }
`;

export const FormContainer = styled.div`
    justify-content: end;
    display: flex;
    align-items: center;
`;

export const SectionWrapper = styled(Container)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 180px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }

    ${Container}
`;

export const CoreContainer = styled.div`
    display: flex;
    padding: 10px;
    justify-content: center;
    align-items: center;
`;

export const CoreImg = styled.img`
    width: 50px;
    background: #2cb8af;
    border-radius: 50%;
    padding: 2px;

    @media screen and (max-width: 960px) {
        width: 45px;
    }

    @media screen and (max-width: 820px) {
        width: 60px;
    }
`;

export const CoreDetails = styled.div`
    padding-left: 10px;

    h3 {
        font-size: 16px;

        @media screen and (max-width: 960px) {
            font-size: 14px;
        }

        @media screen and (max-width: 820px) {
            font-size: 18px;
        }
        
    }

    p {
        font-size: 14px;

        @media screen and (max-width: 960px) {
            font-size: 12px;
        }

        @media screen and (max-width: 820px) {
            font-size: 14px;
        }
    }
`;

export const TourPackages = styled.div`
    background: grey;
    background-image: url(https://staging.thinctrip.com/wp-content/uploads/2016/06/search-bg.jpg);
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 100px;
    background-size: cover;
    overflow: hidden;
    padding: 100px 0;
`;

export const ExploreContainer = styled.div`
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 0;
    margin-bottom: 100px;

    @media screen and (max-width: 820px) {
        flex-direction: column;
        margin: 0 auto;
    }
`;

export const ExploreImg = styled.img`
    width: 100%;
    height: 100%;
`;

export const ExploreImgContainer = styled.div`
    width: 390px;
    height: 350px;
    overflow: hidden;
    
    @media screen and (max-width: 620px) {
        width: 360px;
        height: 310px;
    }
`;

export const ExploreVid = styled.iframe`
    @media screen and (max-width: 820px) {
        width: 600px;
        margin-top: 20px;
    }

    @media screen and (max-width: 620px) {
        width: 350px;
        height: 200px;
    }
`;

export const Header = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    padding-bottom: 30px;
    align-items: center;

    @media screen and (max-width: 768px){
        justify-content: center;
    }
`;

export const HeaderTitle = styled.h1`
    color: ${props => props.colorDark ? '#000' : '#fff'};
    padding-right: 20px;

    @media screen and (max-width: 425px){
        font-size: 20px;
    }
`;

export const HeaderSubtitle = styled(Link)`
    font-size: 15px;
    margin-bottom: -5px;
    color: #2cb8af;
    font-weight: 400;
    text-decoration: none;

    @media screen and (max-width: 425px){
        font-size: 12px;
    }
`;

export const TravelArticles = styled(Container)`
    ${Container}
`;

export const TravelDestinations = styled.div`

`;

export const NewsletterContainer = styled.div`
    width: 100%;
    height: 190px;
    background-image: url(https://staging.thinctrip.com/wp-content/uploads/2020/04/Palawan-Main-2.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    overflow: hidden;
    background-color: #e9e9e9;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after{
        content: "";
        position: absolute;
        top: 0px;
        right: 0px;
        background: rgb(0,0,0);
        background: radial-gradient(circle,rgb(0 0 0 / 57%) 0%,rgba(0,0,0,0.7175245098039216) 70%);
        left: 0px;
        width: 100%;
        height: 100%;
        z-index: 3;
    }
`;

export const NewsletterContent = styled(Container)`
    z-index: 6;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
    }

    ${Container}
`;

export const NewsletterDescription = styled.div`
    max-width: 600px; 

    h1 {
        color: #fff;
        font-weight: 400;
        font-size: 24px;
        text-shadow: 2px 6px 9px rgb(0 0 0 / 44%);

        svg {
            color: #2cb8af;
            padding-right: 8px;
        }

        @media screen and (max-width: 768px){
            font-size: 20px;
        }
    }

    p {
        color: #fff;
        font-weight: 100;
        font-size: 15px;

        @media screen and (max-width: 768px){
            font-size: 12px;
        }
    }

    @media screen and (max-width: 768px){
        margin-bottom: 20px;
        text-align: center;
    }
`;