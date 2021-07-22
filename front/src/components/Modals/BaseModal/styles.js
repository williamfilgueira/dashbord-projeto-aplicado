import Modal from "styled-react-modal";
import styled from "styled-components";
import theme from "../../../global/theme";

const StyledModal = Modal.styled`
  width: 500px;
  height: ${props => props.size === 'big' ? '660px' : '500px'};
  display: flex;
  flex-direction: column; 
  align-items: center;
  background-color: ${theme.colors.alterdataSecondaryBlue};
  border-radius: 10px;
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
  color: white;
  text-align: center;
  margin: 20px auto 20px auto;
`;
const IconContainer = styled.div`
  cursor: pointer;
  padding: 15px;
`;

export { StyledModal,Title, HeaderContainer, IconContainer };
