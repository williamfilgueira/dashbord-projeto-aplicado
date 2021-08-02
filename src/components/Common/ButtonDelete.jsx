import React from "react";
import styled from "styled-components";
import theme from "../../global/theme";

export default function ButtonDelete({ maincolor, title, mediaSize, onClick,  ...rest }) {
  return (
    <Button {...rest} maincolor={maincolor} mediaSize={mediaSize} onClick={onClick}>
      {title}
    </Button>
  );
}

const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 335px;
    height: 37px;
    border:none;
    border-radius: 10px;
    color: #FFF;
    background-color: ${theme.colors.red};
    transition: 0.3s;
    font-family:${theme.fonts.title};
    cursor: pointer;
    font-size: 18px;
    &:hover{
        color: #FFF;
        background-color: #C70010;
    }
  @media screen and (max-width: 600px) {
  width: 88%;
}
`;