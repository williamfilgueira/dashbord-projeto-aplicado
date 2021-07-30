import styled from "styled-components";
import theme from "../../../global/theme";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 330px;
  justify-content: space-between;
`;

const ContainerInput = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`;

const ContainerSelect = styled.section`
width: 100%;
height: 80px;
display: flex;
flex-direction: column;
justify-content: space-between;
@media screen and (max-width: 600px) {
  width: 90%;
  height: 40%;
  margin-bottom: 10px;
}
`

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
  @media screen and (max-width: 600px) {
  width: 88%;
}
`;

export {
  FormAddMember,
  ContainerSelect,
  ButtonDelete,
  ContainerInput
 
};
