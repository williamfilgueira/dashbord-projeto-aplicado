import styled from "styled-components";
import theme from "../../global/theme";

const ActionContainer = styled.div`
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 10px 10px 5px;
  border-radius: 3px;
  &:hover{
    background-color: ${theme.colors.alterdataSecondaryBlue};
  }
`;

const Action = styled.span`
  font-family: ${theme.fonts.paragraph};
  font-size: 15px;
  color: #fff;
  display: flex;
`;

export { Action, ActionContainer };
