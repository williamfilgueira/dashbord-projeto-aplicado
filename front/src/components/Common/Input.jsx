import styled from "styled-components";
import theme from "../../global/theme";
import React from "react";

import { MagnifyingGlass,PaperPlaneTilt } from 'phosphor-react'


export default function Input({icon, title, onChangeFunction}) {
  return (
    <InputContainer>
    <CustomInput  placeholder={title} onChange={onChangeFunction} />
    <IconContainer>
      {
      icon === 'MagnifyingGlass' ? 
      <MagnifyingGlass  weight="regular" size={28} color={theme.colors.gray} /> : <PaperPlaneTilt  weight="regular" size={28} color={theme.colors.gray} />
      }
    </IconContainer>
    </InputContainer>
  )

}

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 335px;
  height: 40px;
  border-radius: 10px;
  background: #FFF;
  overflow: hidden;
  margin:5px;
  `

const CustomInput = styled.input` 
  font-family: ${theme.fonts.paragraph};
  width: 80%;
  padding-left: 14px;
  padding-right: 14px;
  font-size: 16px;
  outline: none;
  border:none;


  ::placeholder {
    color: #d7d3d3;
  }
  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  padding-left: 12px;
  border-left: 1px solid ${theme.colors.gray};
`

