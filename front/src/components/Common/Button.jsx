import React from "react";
import styled from "styled-components";
import theme from "../../global/theme";

export default function ButtonCommon({ title, ...rest }) {
  return <Button {...rest}>{title}</Button>;
}

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 37px;
  border: none;
  border-radius: 10px;
  color: ${theme.colors.alterdataBlue};
  background-color: #fff;
  transition: 0.3s;
  font-family: ${theme.fonts.title};
  text-transform: uppercase;
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: #fff;
    background-color: ${theme.colors.alterdataSecondaryBlue};
  }
`;
