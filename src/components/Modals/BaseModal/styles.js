import Modal from "styled-react-modal";
import styled from "styled-components";
import theme from "../../../global/theme";

const StyledModal = Modal.styled`
  width: 500px;
  height: ${(props) => {
    if (props.size === "big") {
      return "700px";
    } else if (props.size === "medium") {
      return "500px";
    } else {
      return "400px";
    }
  }};
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 5px 8px 30px 3px black;
  
  @media screen and (max-width: 600px) {
    width: 90%;
    height: ${(props) => {
      if(props.mediaSize === 'big'){
        return '95%';
      }else if (props.mediaSize === "medium"){
        return '75%';
      }else {
        return'60%';
      }
       }}
  }

  @media screen and (max-width: 1440px) {
    height: ${(props) => {
      if(props.mediaSize === 'big'){
        return '95%';
      }else if (props.mediaSize === "medium"){
        return '75%';
      }else {
        return'60%';
      }
       }}
  }
`;

const Title = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: 1.37rem;
  color: ${theme.colors.alterdataBlue};
  text-align: center;
  margin: 5px 0 10px 0;
`;
const IconContainer = styled.div`
  cursor: pointer;
  padding: 10px 0 0 0;
  display: flex;
  width: 95%;
  justify-content: flex-end;
  margin: 10px 20px 0 0;
`;

const ButtonIcon= styled.button`
cursor: pointer;
width: 30px;
height: 30px;
border-radius: 18px;
border: 2px solid ${theme.colors.alterdataBlue};
color: ${theme.colors.alterdataBlue};
font-size: 1.05rem;
font-weight: 750;
font-family:${theme.fonts.paragraph};
display: flex;
justify-content: center;
align-items: center;
&:hover{
  background-color:${theme.colors.alterdataBlue};
  color: #fff;
}
`;


export { StyledModal, Title, IconContainer,ButtonIcon };
