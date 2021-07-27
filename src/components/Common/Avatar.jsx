import React from 'react';
import styled from "styled-components";

export default function Avatar({src, small}) {
    return (
        <Image src={src} small={small} />
    )
};

const Image = styled.img`
  width: ${props => props.small ? "65px" : "115px"};
  height: ${props => props.small ? "65px" : "115px"};
`
