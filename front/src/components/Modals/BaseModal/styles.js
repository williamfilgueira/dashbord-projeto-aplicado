import Modal from "styled-react-modal";
import styled from "styled-components";
import theme from "../../../global/theme";

const StyledModal = Modal.styled`
  width: 500px;
  height: ${props => props.size === 'big' ? '670px' : '500px'};
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: ${theme.colors.alterdataSecondaryBlue};
  border-radius: 10px;
   box-shadow:  inset 0 0 2px white,  8px 10px 20px 8px black;
`; 

const Title = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: 1.37rem;
  color: white;
  text-align: center;
  margin: 5px 0 10px 0;
`;
const IconContainer = styled.div`
  cursor: pointer;
  padding: 10px 0 0 0;
  display: flex;
  width: 95%;
  justify-content: flex-end;
`;

export { StyledModal,Title, IconContainer };
