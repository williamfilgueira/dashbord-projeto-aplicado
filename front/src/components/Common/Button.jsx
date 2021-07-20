import React from 'react';
import styled from "styled-components";
import theme from "../../global/theme";

const Button = styled.button`
    width: 335px;
    height: 37px;
    border:none;
    border-radius: 5px;
    background-color: #F5F8FA;
    box-shadow: 2px 1px 5px black;
`;

export default function ButtonCommon(){
    return(
        <Button/>
    )
}