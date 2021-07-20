import styled from "styled-components";
import theme from "../../global/theme";

import React from 'react'

import logo from '../../assets/images/logo.png'


const AlterdataLogo = styled.img`
    width: 230px;
`
export default function Logo() {
  return (
    <AlterdataLogo src={logo} >
    </AlterdataLogo>
  )
}

