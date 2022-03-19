import React from 'react';
import styled from "styled-components";

export const ImageBgContainer = styled.div`
  background-image: url(${(props) => props.src});
`;


export default function UserImageBgContainer(props) {
  return (
    <ImageBgContainer className={props.className} src={props.src}></ImageBgContainer>
  )
}
