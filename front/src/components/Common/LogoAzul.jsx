import styled from "styled-components";

import React from 'react';

import logo_azul from '../../assets/images/logo_azul.png';

const AlterdataLogoAzul = styled.img`
        width: 230px;


`

export default function LogoAzul(){
    return(
        <AlterdataLogoAzul src={logo_azul}>
        </AlterdataLogoAzul>
    )
}