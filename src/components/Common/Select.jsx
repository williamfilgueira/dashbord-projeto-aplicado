import React from "react";
import theme from "../../global/theme";
import styled from "styled-components";

export default function Select({ title, options }) {
  return (
    <SelectContainer>
      <Label htmlFor="GET-name">{title}</Label>
      <SelectOptions name="select">
        <Option disabled selected></Option>
        {options.map((item, index) => (
          <Option key={index} value={item.value}>{item.title}</Option>
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
`;

const Option = styled.option`
  font-family: ${theme.fonts.paragraph};
  font-size: 0.9rem;
`;
