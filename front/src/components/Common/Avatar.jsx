import React from 'react';
import styled from "styled-components";

export default function Avatar({src}) {
    return (
        <Image src={src} />
    )
};

const Image = styled.img`
  width: 115px;
  height: 115px;
`
