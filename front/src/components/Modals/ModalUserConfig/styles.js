import styled from "styled-components";
import theme from "../../../global/theme";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 530px;
  justify-content: space-between;
`;

const Label = styled.label`
  font-family: ${theme.fonts.paragraph};
  color: white;
`;

const Select = styled.select`
  border-radius: 3px;
  height: 25px;
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
};
