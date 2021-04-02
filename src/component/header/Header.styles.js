import React from 'react'
import styled from 'styled-components'
import { Container } from '../../mainStyles'
import { Link } from 'react-router-dom'

//icons
import { FaAngleRight } from 'react-icons/fa'


export const Navbar = styled.div`
    background: ${props => props.scrollNav ? 'rgba(0, 0, 0, 0.9)' : 'transparent'};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    width:100%;
    top: 0;
    z-index: 999;
    transition: background .5s;
`;

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;
    align-items: center;

    ${Container}
`;

export const NavbarImgLogo = styled.img`
    width: 150px;
    height: 50px;
`;

export const NavbarToggler = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top:0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavbarMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px) {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${props => props.click ? 0 : '-100%'};
        opacity: 1;
        transition: 850ms;
        background: #fff;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2px solid #2cb8af;
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`;

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px) {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 120px;
    }
`;

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: 14px;
    letter-spacing: .5px;
    font-weight: 400;

    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;
        color: #000;

        &:hover {
            color: #2CB8AF;
            transition: all 0.03s ease;
        }
    }
`;

export const NavBtnLink = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
`;


export const DropdownMenu = styled.ul`
    position: absolute;
    top: 80px;
    list-style: none;
    text-align: start;
    z-index: 99;
    min-width: 220px;
`;

export const DropdownItem = styled.li`
    background: #262626;
    cursor: pointer;
    padding: 5px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
        color: #ffffff;
        background-color: #303030;
    }
`;

export const DropdownLinks = styled(Link)`
    padding: 6px 30px 6px 12px;
    color: #bababa;
    text-decoration: none;
    font-size: 14px;
`;

export const CaretRight = styled(FaAngleRight)`
    color: #bababa;
    font-size: 16px;
`;