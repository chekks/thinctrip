import React from 'react'
import styled from 'styled-components'
import { Container } from '../../mainStyles'
import { Link } from 'react-router-dom'

export const TourContainer = styled.div`
    
`;

export const TourBanner = styled.div`
    max-height: 80vh;
    position: relative;
    overflow: hidden;
    top: -80px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-bottom: -80px;

    video {
        height: 100%;
        object-fit: cover;
    }

    &:after{
        content: "";
        position: absolute;
        background: rgb(0,0,0);
        background: linear-gradient(0deg ,rgba(0,0,0,0) 70%,#000000d9 100%);
        width: 100%;
        z-index: 19;
        height: 100%;
        top: 0;
        z-index: 3;
    }

    &:before{
        content: "";
        position: absolute;
        background: rgb(0,0,0);
        background: linear-gradient(180deg ,rgba(0,0,0,0) 70%,#000000d9 100%);
        width: 100%;
        z-index: 19;
        height: 100%;
        top: 0;
        z-index: 3;
    }
`;

export const TourContent = styled.div`
    width: 100%;
    position: absolute;
    z-index: 5;
    text-align: center;
    padding-bottom: 30px;

    h1 {
        color: #fff;
        font-weight: 600;
        text-shadow: 2px 6px 6px rgb(0 0 0 / 40%);
    }

    p {
        color: #ffffff;
        font-weight: 100;
        text-shadow: 2px 6px 6px rgb(0 0 0 / 40%);
        padding-bottom: 20px;
    }
`;

export const FormContainer = styled.div`
    justify-content: center;
    display: flex;
    align-items: center;
`;

export const TourWrapper = styled.div`
    display: flex;
    max-width: 1180px;
    margin: 0 auto;
    justify-content: center;
`;

export const CardContainer = styled.div`
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    jjustify-content: center;
    align-items: center;
`;

export const CardItem = styled.div`
    margin-top: 25px;
    display: flex;
    align-items: end;
    height: 250px;
    overflow: hidden;
    border: 1px solid #4e4e4e1a;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    flex-wrap: wrap;

    &:hover {
        transition: all 0.3s ease;
        box-shadow: rgb(0 0 0 / 28%) 0px 6px 12px;
    }
`;

export const CardImg = styled.div`
    width: 350px;
    height: 100%;
    background-image: url(${props => props.src});
    border-radius: 6px 0 0 6px ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    overflow: hidden;
    background-color: #e9e9e9;
`;

export const CardContent = styled.div`
    display: flex;
    height: 100%;
`;

export const ItemLeft = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 20px;
    height: 100%;
    background: #fff;
`;

export const ItemRight = styled.div`
    width: 280px;
    height: 100%;
    background: #fafafa;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const ItemTitle = styled.div`
    font-size: 22px;
    line-height: 40px;
    color: #2cb8af;
    font-weight: 500;
`;

export const ItemDetails = styled.span`
    color: #757575;
    display: flex;
    align-items: center;
    max-width: 100%;
    font-size: 14px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    z-index: 1;
    font-weight: 100;
    padding-bottom: 5px;

    svg {
        color: #2cb8af;
        margin: 0 5px;

        &:hover {
            fill: green;
        }
    }
`;

export const ItemReview = styled.div`
    max-width: 100%;
    line-height: 16px;
    color: #999;
    align-items: center;
    display: flex;
    padding-top: 4px;
    margin-left: 5px;
`;

export const SidePanel = styled.div`
    border: 2px solid red;
    width: 300px;
    height: 300px;
`;

