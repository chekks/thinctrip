import React from 'react'
import styled from 'styled-components'
import { Container } from '../../mainStyles'
import { Link } from 'react-router-dom'

export const CardContainer = styled.div`
    position: relative;
    width: 275px !important;
    flex: 0 0 275px;
    cursor: pointer;

    &:hover{
        transform: translateY(-4px);
        box-shadow: 0 4px 20px rgb(0 0 0 / 10%);
        z-index: 2;
        transition: all 0.3s ease;
    }
`;

export const CardItem = styled.div`
    display: flex;
    flex-direction: column;
    background: #fff;
    overflow: hidden;
    justify-content: stretch;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 6px;
    box-shadow: 0 0 6px #00000008;
    outline: none;
`;

export const CardImg = styled.div`
    width: 100%;
    height: 100%;
    padding-bottom: 56.25%;
    background-image: url(${props => props.src});
    border-radius: 6px 6px 0 0;
    padding-bottom: 66.6%;
    height: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
`;

export const CardContent = styled.div`
    display: flex;
    padding: 14px 16px;
    flex-direction: column;
    align-items: baseline;
    justify-content: space-between;
    height: 150px;
`;

export const CardContentTop = styled.div``;

export const CardContentBottom = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
`;

export const CardTitle = styled.p`
    padding-top: 2px;
    max-width: 100%;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color: #212121;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    pointer-events: none;
`;

export const CardSubTitle = styled.p`
    color: #757575;
    display: flex;
    align-items: center;
    max-width: 100%;
    font-size: 12px;
    line-height: 16px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    z-index: 1;
    font-weight: 100;
    padding-bottom: 3px;
`;

export const CardReview = styled.div`
    max-width: 100%;
    line-height: 16px;
    color: #999;
    align-items: center;
    display: flex;
    padding-top: 4px;
`;

export const TourPrice = styled.div`
    width: 100%;
    font-size: 18px;
    line-height: 16px;
    word-break: break-all;
    color: #2cb8af;
    margin-left: 25px;

    span{
        color: #666666;
        font-size: 14px;
        padding-right: 5px;
    }
`;

export const FeaturedBlogContainer = styled.div`
    p{
        color: #757575;
        display: flex;
        align-items: center;
        max-width: 100%;
        font-size: 12px;
        line-height: 16px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
        z-index: 1;
        font-weight: 100;
        padding-bottom: 3px;
    }
`;

export const FeaturedBlog = styled.div`
    display: flex;
`;

export const FeaturedBlogImg = styled.img`
    width: 25px;
    margin-right: 3px;
`;