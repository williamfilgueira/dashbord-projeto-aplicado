import styled from "styled-components";
import theme from "../../global/theme";
import React from "react";

const CustomInput = styled.input`
  width: 335px;
  height: 30px;
  color: #d7d3d3;
  font-size: 15px;
  padding: 10px;
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid #d7d3d3;
  background-color: #03569c;
  ::placeholder {
    color: #d7d3d3;
  }
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;

export default function Input(props) {
  return <CustomInput placeholder={props.title} />;
}
