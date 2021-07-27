import styled from "styled-components";
import theme from "../../../global/theme";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 200px;
  justify-content: space-between;
  margin-top: 50px;
`;

const ColorPickerContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.label`
  font-family: ${theme.fonts.paragraph};
  color: ${theme.colors.alterdataBlue};
  padding-right: 10px;
`;

const ColorPicker = styled.div`
  display: inline-flex;
  align-items: center;
  width: 150px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: #fff;
`;

const InputColor = styled.input`
  border: none;
  margin-right: 8px;
  cursor: pointer;
  -webkit-appearance: none;
  border: none;
  width: auto;
  height: auto;
  cursor: pointer;
  background: none;
  &::-webkit-color-swatch-wrapper {
    padding: 0;
    width: 22px;
    height: 22px;
  }
  &::-webkit-color-swatch {
    border: 1px solid #bfc9d9;
    border-radius: 4px;
    padding: 0;
  }
`;

const InputText = styled.input`
  border: none;
  width: 100%;
  font-size: 14px;
  text-align: center;
`;

export {
  FormAddMember,
  ColorPicker,
  InputColor,
  InputText,
  Label,
  ColorPickerContainer,
};
