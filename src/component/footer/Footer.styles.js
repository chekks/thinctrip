import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Footer = styled.div`
    background: #202020;
    height: 100%;
`;

export const FooterContainer = styled.div`
    display: flex;
    max-width: 1180px;
    justify-content: center;
    margin: 0 auto;
    padding-top: 70px;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
        flex-direction: column;
        align-items: center;
    }
`;

export const FooterItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 15px;
    text-align: left;
    width: 250px;
    box-sizing: border-box;
    color: #fff;
    border-right: 2px solid #303030;
    padding: 0px 10px;

    h1{
        margin-bottom: 16px;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
    }

    p{
        color: #ababab;
        font-size: 14px;
        line-height: 30px;
    }

    @media screen and (max-width: 420px) {
        margin: 0;
        padding 10px;
        width: 100%;
    }

    @media screen and (max-width: 820px) {
        border: none;
        width: 380px;
    }
`;

export const FooterLinks = styled(Link)`
    color: #ababab;
    text-decoration: none;
    margin-bottom: 0.5rem;
    font-size: 14px;
    margin-bottom: 13px;
    padding-left: 0px;
    margin-top: 13px;
    line-height: 20px;
    padding-bottom: 15px;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-color: #303030;
    font-weight: 400;
    letter-spacing: 1px;
`;