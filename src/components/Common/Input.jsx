import styled from "styled-components";
import theme from "../../global/theme";
import React from "react";

import { MagnifyingGlass, PaperPlaneTilt, User, LockKey } from "phosphor-react";

export default function Input({
  icon,
  size,
  innerColor,
  mediaSize,
  sizeInput,
  required,
  ...rest
}) {
  return (
    <InputContainer innerColor={innerColor} size={size} mediaSize={mediaSize}>
      <CustomInput
        innerColor={innerColor}
        {...rest}
        sizeInput={sizeInput}
        required={required}
      />

      {icon === "MagnifyingGlass" ? (
        <IconContainer>
          <MagnifyingGlass weight="regular" size={28} color="#707070" />
        </IconContainer>
      ) : icon === "PaperPlaneTilt" ? (
        <IconContainer>
          <PaperPlaneTilt weight="regular" size={28} color="#707070" />
        </IconContainer>
      ) : icon === "User" ? (
        <IconContainer>
          <User weight="regular" size={20} color="#707070" />
        </IconContainer>
      ) : icon === "LockKey" ? (
        <IconContainer>
          <LockKey weight="regular" size={20} color="#707070" />
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
    } else if (props.size === "medium") {
      return "273px";
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
  }

  @media screen and (max-width: 1000px) {
    width: ${(props) => {
      if (props.mediaSize === "regular") {
        return "328px";
      } else if (props.mediaSize === "small") {
        return "60px";
      } else {
        return "235px";
      }
    }};
    margin-right: ${(props) => (props.mediaSize === "small" ? "10px" : "0")};
  }
  @media screen and (max-width: 600px) {
    width: ${(props) => {
      if (props.mediaSize === "regular") {
        return "100%";
      } else if (props.mediaSize === "small") {
        return "40px";
      } else if (props.mediaSize === "medium") {
        return "270px";
      } else if (props.mediaSize === "searchBar") {
        return "70%";
      } else {
        return "88%";
      }
    }};
    margin-right: ${(props) => (props.mediaSize === "regular" || "searchBar" ? "auto" : "0")};
    margin-left: ${(props) => (props.mediaSize === "regular" || "searchBar" ? "auto" : "0")};
    height: ${(props) => (props.mediaSize === "regular"  || "searchBar"? "40px" : "30px")};
  }
`;
const CustomInput = styled.input`
  background: ${(props) =>
    props.innerColor === "white" ? "#fff" : theme.colors.lightGray};
  font-family: ${theme.fonts.paragraph};
  padding-left: ${(props) => (props.sizeInput === "small" ? "6px" : "14px")};
  padding-right: ${(props) => (props.sizeInput === "small" ? "6px" : "14px")};
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

  @media screen and (max-width: 600px) {
    margin-left: ${(props) => (props.sizeInput === "small" ? "0px" : "14px")};
  }

  @media screen and (max-width: 1000px) {
    margin-left: ${(props) => (props.sizeInput === "small" ? "10px" : "0px")};
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
