import styled from "styled-components";
import theme from "../../../global/theme";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  justify-content: space-between;
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

const ButtonDelete = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 335px;
    height: 37px;
    border:none;
    border-radius: 10px;
    color: #FFF;
    background-color: ${theme.colors.red};
    transition: 0.3s;
    font-family:${theme.fonts.title};
    cursor: pointer;
    font-size: 18px;
    &:hover{
        color: #FFF;
        background-color: #C70010;
    }
`;

export {
  FormAddMember,
  Label,
  Option,
  Select,
  SelectContainer,
  ButtonDelete
 
};
