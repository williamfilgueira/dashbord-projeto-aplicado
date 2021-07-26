import Modal from "styled-react-modal";
import styled from "styled-components";
import theme from "../../../global/theme";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 330px;
  justify-content: space-between;
`;
const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
const Title = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: 1.37rem;
  color: #000;
  text-align: center;
  margin: 20px auto 20px auto;
`;
const IconContainer = styled.div`
  cursor: pointer;
  padding: 15px;
`;
const Label = styled.label`
  font-family: ${theme.fonts.paragraph};
  color: #000;
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
  Title,
  FormAddMember,
  Label,
  Option,
  Select,
  HeaderContainer,
  IconContainer,
};
