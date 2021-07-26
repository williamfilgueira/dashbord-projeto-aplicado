import React from "react";
import styled from "styled-components";
import theme from "../../global/theme";

export default function ButtonCommon(props) {
  return <Button maincolor={props.maincolor}>{props.title}</Button>;
}

const Button = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 37px;
  border: none;
  border-radius: 10px;
  ${(props) => (props.size === "big" ? "535px" : "335px")};
  /* color: ${theme.colors.alterdataBlue}; */
  color: ${(props) => (props.maincolor === "blue" ? "#fff" : "#03569C")};
  /* background-color: #FFF; */
  background-color: ${(props) =>
    props.maincolor === "blue" ? "#03569C" : "#fff"};
  transition: 0.3s;
  font-family: ${theme.fonts.title};
  cursor: pointer;
  font-size: 18px;

  &:hover {
    color: #fff;
    background-color: ${theme.colors.alterdataSecondaryBlue};
  }
`;
