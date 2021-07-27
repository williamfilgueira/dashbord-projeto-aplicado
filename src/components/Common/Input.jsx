import styled from "styled-components";
import theme from "../../global/theme";
import React from "react";

import { MagnifyingGlass, PaperPlaneTilt } from "phosphor-react";

export default function Input({ icon, size, innerColor, ...rest }) {
  return (
    <InputContainer innerColor={innerColor} size={size}>
      <CustomInput innerColor={innerColor} {...rest} />
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
  /* width: ${(props) => (props.size === "big" ? "535px" : "335px")}; */
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
  border: 1px solid ${theme.colors.gray};
  border-radius: 10px;
  background: ${(props) =>
    props.innerColor === "white" ? "#fff" : theme.colors.gray};
  overflow: hidden;
  margin: 5px;
`;

const CustomInput = styled.input`
  background: ${(props) =>
    props.innerColor === "white" ? "#fff" : theme.colors.gray};
  font-family: ${theme.fonts.paragraph};
  padding-left: 14px;
  padding-right: 14px;
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
  border-left: 1px solid ${theme.colors.gray};
`;
