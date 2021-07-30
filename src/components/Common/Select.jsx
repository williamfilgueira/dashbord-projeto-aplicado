import React from "react";
import theme from "../../global/theme";
import styled from "styled-components";

export default function Select({ title, options }) {
  return (
    <SelectContainer>
      <Label htmlFor="GET-name">{title}</Label>
      <SelectOptions name="select">
        <Option disabled selected></Option>
        {options.map((item) => (
          <Option key={item.id} value={item.id}>{item.nome}</Option>
        ))}
      </SelectOptions>
    </SelectContainer>
  );
}

const SelectContainer = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 600px){
    flex-direction: column;
  }

`;

const Label = styled.label`
  font-family: ${theme.fonts.paragraph};
  color: ${theme.colors.alterdataBlue};
`;

const SelectOptions = styled.select`
  border-radius: 8px;
  height: 25px;
  width: 47%;
  margin-left: 5px;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-top: 5px;
  }
`;

const Option = styled.option`
  font-family: ${theme.fonts.paragraph};
  font-size: 0.9rem;
`;
