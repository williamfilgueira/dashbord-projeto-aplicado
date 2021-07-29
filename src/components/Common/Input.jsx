import styled from "styled-components";
import theme from "../../global/theme";
import React from "react";

import { MagnifyingGlass, PaperPlaneTilt } from "phosphor-react";

export default function Input({ icon, size, innerColor, mediaSize,sizeInput, ...rest }) {
  return (
    <InputContainer innerColor={innerColor} size={size} mediaSize={mediaSize}>
      <CustomInput innerColor={innerColor} {...rest} sizeInput={sizeInput} />

      {icon === "MagnifyingGlass" ? (
        <IconContainer>
          <MagnifyingGlass weight="regular" size={28} color="#707070" />
        </IconContainer>
      ) : icon === "PaperPlaneTilt" ? (
        <IconContainer>
          <PaperPlaneTilt weight="regular" size={28} color="#707070" />
        </IconContainer>
      ) : null}
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${(props) => {
    if (props.size === "big") {
      return "40%";
    } else if (props.size === "small") {
      return "50px";
    } else {
      return "335px";
    }
  }};
  height: 40px;
  border: 1px solid ${theme.colors.lightGray};
  border-radius: 10px;
  background: ${(props) =>
    props.innerColor === "white" ? "#fff" : theme.colors.lightGray};
  overflow: hidden;
  margin: 5px;

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin-right: auto;
    margin-left: auto;
  }

  @media screen and (max-width: 600px) {
    margin-right: none;
    margin-left: none;
    width: ${(props) => {
      if (props.mediaSize === "regular") {
        return "235px";
      } else if (props.mediaSize === "small") {
        return "40px";
      } else {
        return "88%";
      }
    }};
    margin-right: 30px;
    height: ${(props) => (props.mediaSize === "regular" ? "40px" : "30px")};
  }


`;
const CustomInput = styled.input`
  background: ${(props) =>
  props.innerColor === "white" ? "#fff" : theme.colors.lightGray};
  font-family: ${theme.fonts.paragraph};
  padding-left: ${(props) => props.sizeInput === "small" ? "6px" : "14px"};
  padding-right: ${(props) => props.sizeInput === "small" ? "6px" : "14px"};
  font-size: 16px;
  outline: none;
  border: none;
  
  ::placeholder {
    color: #707070;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  padding-left: 12px;
  border-left: 1px solid ${theme.colors.lightGray};
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
