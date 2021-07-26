import Modal from "styled-react-modal";
import styled from "styled-components";
import theme from "../../../global/theme";

const StyledModal = Modal.styled`
  width: 500px;
  height: ${(props) => {
    if (props.size === "big") {
      return "670px";
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

export { StyledModal, Title, IconContainer };
