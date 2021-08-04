import React from "react";
import styled from "styled-components";
import theme from "../../global/theme";

export default function ButtonCommon({ maincolor, title, mediaSize,  ...rest }) {
  return (
    <Button {...rest} maincolor={maincolor} mediaSize={mediaSize}>
      {title}
    </Button>
  );
}

const Button = styled.div`
  
  display: flex;
  align-items: center;
  justify-content: center;
  height: 37px;
  border: none;
  border-radius: 10px;
  width: ${(props) => (props.size === "big" ? "535px" : "335px")};
  /* color: ${theme.colors.alterdataBlue}; */
  color: ${(props) => (props.maincolor === "blue" ? "#fff" : "#03569C")};
  /* background-color: #FFF; */
  background-color: ${(props) =>
    props.maincolor === "blue" ? "#03569C" : "#fff"};
  transition: 0.3s;
  font-family: ${theme.fonts.title};
  cursor: pointer;
  font-size: 18px;
  
  @media screen and (max-width: 600px) {
    width: ${(props) =>
    props.mediaSize === "regular" ? "300px" : "88%"}
}

  &:hover {
    color: #fff;
    background-color: ${theme.colors.alterdataSecondaryBlue};
  }
`;
