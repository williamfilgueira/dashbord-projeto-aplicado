import styled from "styled-components";
import theme from "../../../global/theme";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 500px;
  justify-content: space-between;
`;

const Label = styled.label`
  font-family: ${theme.fonts.paragraph};
  color: ${theme.colors.alterdataBlue};
  margin-bottom: 10px;
`;

const ContainerInput = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const ContainerInputEmoji = styled.div`
  display: flex;
  width: 70%;
  @media screen and (max-width: 600px) {
    width: 92%;
    justify-content: space-between;   
}
`;

const  ContainerEmojiPicker= styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 280px;
`;

export {
  FormAddMember,
  Label,
  ContainerInput,
  ContainerEmojiPicker,
  ContainerInputEmoji
};
