import styled from "styled-components";
import theme from "../../../global/theme";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 540px;
  justify-content: space-between;
`;

const ContainerUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Upload = styled.input`
  display: none;
`;

const IconContainer = styled.div`
  background-color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
`;
const SelectContainer = styled.label`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.label`
  font-family: ${theme.fonts.paragraph};
  color: white;
`;

const Select = styled.select`
  border-radius: 8px;
  height: 25px;
  width: 50%;
  margin-left: 5px;
`;

const Option = styled.option`
  font-family: ${theme.fonts.paragraph};
  font-size: 0.9rem;
`;

export {
  FormAddMember,
  Label,
  Option,
  Select,
  SelectContainer,
  ContainerUpload,
  Upload,
  IconContainer
};
