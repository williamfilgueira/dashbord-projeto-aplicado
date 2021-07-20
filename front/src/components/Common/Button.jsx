import React from 'react';
import styled from "styled-components";

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #03569c;
    width: 335px;
    height: 37px;
    border:none;
    border-radius: 5px;
    background-color: #F5F8FA;
    box-shadow: 2px 1px 5px black;
    transition: 0.3s;
    :hover{
        cursor: pointer;
        box-shadow: 2px 1px 2px #5f6161;
    }
`;

export default function ButtonCommon(props){
    return(
        <Button>{props.title}</Button>
    )
}