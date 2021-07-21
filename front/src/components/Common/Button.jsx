import React from 'react';
import styled from "styled-components";
import theme from "../../global/theme";


const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #03569c;
    width: 335px;
    height: 37px;
    border:none;
    border-radius: 10px;
    background-color: #F5F8FA;
    box-shadow: 2px 1px 5px black;
    transition: 0.3s;
    font-family:${theme.fonts.title};
    cursor: pointer;
`;

export default function ButtonCommon(props){
    return(
        <Button>{props.title}</Button>
    )
}