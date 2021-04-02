import React from 'react'
import styled from 'styled-components'
import { Container } from '../../mainStyles'
import { Link } from 'react-router-dom'

//icons
import { AiFillStar } from 'react-icons/ai'

export const RateContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const RateIcon = styled(AiFillStar)`
    color: #ffa127;
`;

export const RateNumber = styled.span`
    margin: 0 2px;
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: #ffa127;
    align-self: center;
`;

export const RateParticipation = styled.span`
    font-size: 12px;
    line-height: 16px;
    align-self: center;
    -webkit-box-flex: 0;
    flex-grow: 0;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-weight: 100;
`;