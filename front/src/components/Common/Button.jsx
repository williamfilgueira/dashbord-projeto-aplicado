import React from 'react';
import styled from "styled-components";
import theme from "../../global/theme";

export default function ButtonCommon(props){
    return(
        <Button>{props.title}</Button>
    )
}

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 335px;
    height: 37px;
    border:none;
    border-radius: 10px;
    color: ${theme.colors.alterdataBlue};
    background-color: #FFF;
    transition: 0.3s;
    font-family:${theme.fonts.title};
    cursor: pointer;
    font-size: 18px;

    &:hover{
        color: #fff;
        background-color: ${theme.colors.alterdataSecondaryBlue};
    }
`;