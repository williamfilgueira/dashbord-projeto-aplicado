import styled from "styled-components";
import theme from "../../global/theme";

const GroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 14px;
  cursor: pointer;
  padding: 10px 10px 10px 10px;
  border-radius: 6px;

  &:hover {
    background-color: ${theme.colors.alterdataSecondaryBlue};
  }
`;

const GroupName = styled.span`
  font-family: ${theme.fonts.paragraph};
  font-size: 20px;
  color: #fff;
  display: flex;
`;

export { GroupContainer, GroupName };
