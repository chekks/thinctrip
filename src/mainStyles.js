import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import '../src/assets/scss/config.scss';

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;
`;

export const Button = styled(Link)`
    background: ${props => props.primary ? '#4B59F7' : '#2cb8af'};
    white-space: nowrap;
    padding: ${props => props.big ? '13px 64px' : '13px 20px'};
    color: #fff;
    font-size: ${props => props.fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    
    width: ${props => props.w100 ? '100%' : ''};

    ${props => {
        if(props.radRight){
            return`
                border-radius: 0 5px 5px 0;
            `
        } else if (props.radLeft){
            return`
                border-radius: 5px 0 0 5px;
            `
        } else {
            return`
                border-radius: 5px;
            `
        }
    }}

    ${props => props.onHover ? 
        `&:hover {
            transition: all 0.3s ease;
            background: #fff;
            background: ${props => props.primary ? '#0467FB' : '#4B59F7'};
        }` 
    : ``}

    @media screens and (max-width: 960px) {
        width: 100%;
    }
`;

export const Input = styled.input`
    min-width: 300px;
    height: 50px;
    border-radius: 5px 0 0 5px;
    outline: none;
    border: none;
    padding: 10px 20px;
    width: ${props => props.big ? '100%' : '480px'};

    ::placeholder,
    ::-webkit-input-placeholder {
        color: rgb(212, 212, 212);
    }
`;

export const CardImg = styled.div`
    background-image: url(${props => props.src});
`;

export const Navbar = styled.div`
    background: ${props => props.scrollNav ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
`;

export const NavbarMenu = styled.ul`
    @media screen and (max-width: 960px) {
        left: ${props => props.click ? 0 : '-100%'};
    }
`;

export const HeaderTitle = styled.h1`
    color: ${props => props.colorDark ? '#000' : '#fff'};
`;

export const HeaderBg = styled.div`
    background-image: url(${props => props.src});
    width: 100%;
    min-height: 50vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50%;
    overflow: hidden;
    background-color: #e9e9e9;
    max-height: 80vh;
    position: relative;
    top: -80px;
    margin-bottom: -80px;

    &:after{
        content: "";
        position: absolute;
        background: rgb(0,0,0);
        background: linear-gradient(0deg,rgba(0,0,0,0) 70%,#000000d9 100%);
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
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
        width: 100%;
        z-index: 19;
        height: 100%;
        top: 0;
        z-index: 3;
    }
`

export const TourPrice = styled.div`
    background: #2cb8af;
    height: 65px;
    bottom: 0;
    right: 0;
    z-index: 6;
    width: 350px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        font-size: 14px;
        margin-right: 8px;
        font-weight: 400;
    }

    p{
        font-size: 28px;
        font-weight: 900;
    }
`

export const SidePanel = styled.div`
    width: 350px;
    top: -300px;
    position: relative;
`

export const RateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    ${props => props.summary ? 
        `span {
            font-size: 20px;
        }` 
    : ``}

    svg{
        color: #ffa127;

        ${props => props.summary ? 
            `font-size: 20px;` 
        : ``}
    }
`

export const Avatar = styled.div`
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #C8DBBD;
    border-radius: 50%;
    font-family: sans-serif;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`