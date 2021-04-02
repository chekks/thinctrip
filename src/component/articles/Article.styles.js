import React from 'react'
import styled from 'styled-components'
import { Container } from '../../mainStyles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
    display: flex;
    margin-bottom: 100px;
    position: relative;
    overflow: hidden;

    @media screen and (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export const CardItem = styled.div`
    width: 220px;
    height: 270px;
    margin: 0 10px;
    position: relative;
    overflow: hidden;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.5s ease;

    &:after{
        content: "";
        background: #0000008c;
        width: 100%;
        height: 100%;
        z-index: 4;
        position: absolute;
        top: 0;
        transition: all 0.5s ease;
    }

    &:hover:after{
        background: linear-gradient( 180deg ,rgba(0,0,0,0) 0%,#000000d9 100%);
        transition: all 0.5s ease;
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
`;

export const CardContent = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 5;
    padding: 16px;
`;

export const CardTitle = styled.h1`
    color: #fff;
    font-size: 14px;
`;

export const CardInfo = styled.p`
    color: #2cb8af;
    display: flex;
    align-items: center;
    max-width: 100%;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    z-index: 1;
    font-weight: 600;
    padding-bottom: 3px;
`;
