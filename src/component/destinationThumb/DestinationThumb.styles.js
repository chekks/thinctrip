import React from 'react'
import styled from 'styled-components'
import { Container } from '../../mainStyles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
    display: flex;
    margin-bottom: 100px;
    position: relative;
    overflow: hidden;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const OverlayDescription = styled.p`
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
    padding: 35px 20px;
    color: #fff;
    line-height: 25px;
    font-size: 14px;
    text-align: center;
`;

export const CardContent = styled.div`
    position: relative;
    transition: 200ms ease-out;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: normal;
    transform: translateY(35px);
    padding: 0 30px;
`;

export const CardItem = styled.div`
    width: 285px;
    height: 360px;
    margin: 5px;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover {
        ${OverlayDescription}{
            opacity: 1;
        }

        ${CardContent}{
            border-bottom: 5px solid #2cb8af;
            z-index: 2;
            transform: translateY(0);
            transition: 200ms ease-out;
        }
    }

    @media screen and (max-width: 768px) {
        margin-bottom: 20px;
    }
`;

export const CardImg = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${props => props.src});
    border-radius: 6px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    overflow: hidden;
    background-color: #e9e9e9;
`;

export const Overlay = styled.div`
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: -5px;
    left: 0px;
    background: linear-gradient( 
    180deg
    ,rgba(0,0,0,0) 61%,#000000d9 95%);
`;

export const CardTitle = styled.h1`
    font-size: 16px;
    color: #fff;

    span{
        color: #2cb8af;
        float: right;
        font-weight: 100;
    }
`;

export const CardButton = styled(Link)`
    text-transform: uppercase;
    font-weight: 700;
    font-size: 12px;
    color: #2cb8af;
    cursor: pointer;
`;

