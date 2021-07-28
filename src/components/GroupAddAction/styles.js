import styled from "styled-components";
import theme from "../../global/theme";

const ActionContainer = styled.div`
  width: 100%;
  margin: 10px 0 10px 0;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 10px 10px 10px;
  border-radius: 6px;

  &:hover {
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
