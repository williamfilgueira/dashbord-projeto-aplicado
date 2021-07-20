import styled from "styled-components";
import theme from "../../global/theme";
import React from "react";

const CustomInput = styled.input`
  width: 335px;
  height: 30px;
  border-top: none;
  border-right: none;
  border-left:none ;
  border-bottom: 1px solid #D7D3D3;
  background-color: #03569c;
`;

export default function Input() {
  return <CustomInput placeholder="login"/>;
}
