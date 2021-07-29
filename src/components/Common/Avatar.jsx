import React from 'react';
import styled from "styled-components";

export default function Avatar({src, small, mediaSize}) {
    return (
        <Image src={src} small={small} mediaSize={mediaSize}/>
    )
};

const Image = styled.img`
  width: ${props => props.small ? "65px" : "115px"};
  height: ${props => props.small ? "65px" : "115px"};
  @media screen and (max-width: 600px){
    width:${props => props.mediaSize ? "80px" : "115px"}; 
    height: ${props => props.mediaSize ? "80px" : "115px"};
  }
  `
