import React from 'react';
import styled from "styled-components";

export const LeftContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  width: 60%;
  height: 100vh;

  &:after {
    content: "";
    background: rgba(28, 40, 58, 0.5);
    width: 100%;
    height: 100%;
    z-index: 4;
    position: absolute;
    top: 0;
    transition: all 0.5s ease;
  }
`;


export default function AdminLeftContainer(props) {
    return (
        <LeftContainer class={props.className} src={props.src}></LeftContainer>
    )
}
