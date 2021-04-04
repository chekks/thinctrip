import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1180px;
    margin: 0 auto;

    .slick-slide {
        margin: 0 10px;
    }
`;

export const Button = styled.button`
    border-radius: 0 5px 5px 0;
    background: ${props => props.primary ? '#4B59F7' : '#2cb8af'};
    white-space: nowrap;
    padding: ${props => props.big ? '13px 64px' : '13px 20px'};
    color: #fff;
    font-size: ${props => props.fontBig ? '20px' : '16px'};
    outline: none;
    border: none;
    cursor: pointer;

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
