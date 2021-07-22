import styled from "styled-components";
import theme from "../../global/theme";

const GroupContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const GroupName = styled.span`
  font-family: ${theme.fonts.paragraph};
  font-size: 20px;
  color: #fff;
  display: flex;
`;

export { GroupContainer, GroupName };
