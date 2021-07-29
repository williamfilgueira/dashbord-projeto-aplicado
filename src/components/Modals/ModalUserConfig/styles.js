import styled from "styled-components";
import theme from "../../../global/theme";

const FormAddMember = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 570px;
  justify-content: space-between;

  @media screen and (max-width: 600px){
    height: 490px;
  }
`;

const ContainerUpload = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const Upload = styled.input`
  display: none;
`;

const ContainerInput = styled.section`
display: flex;
flex-direction: column;
align-items: center;
`;

const IconContainer = styled.div`
  background-color: #fff;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -30px;
  border-radius: 20px;
  @media screen and (max-width: 600px) {
    width: 25px;
    height: 25px;
    margin-top: -20px;
    margin-right: -8px;
    border-radius: -20px;
  }
`;

const ContainerSelect = styled.section`
height: 12%;
display: flex;
flex-direction: column;
justify-content: space-between;
margin-bottom: 15px;
@media screen and (max-width: 600px) {
  width: 90%;
  height: 20%;
  margin-bottom: 10px;
}
`

export {
  FormAddMember,
  ContainerUpload,
  Upload,
  IconContainer,
  ContainerInput,
  ContainerSelect
};
