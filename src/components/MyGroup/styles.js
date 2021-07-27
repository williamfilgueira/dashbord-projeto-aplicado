import styled from "styled-components";
import theme from "../../global/theme";

const GroupContainer = styled.div`
  margin-bottom: 24px;
  border-bottom: 1px solid #fff;
  padding-bottom: 20px;
`;

const GroupName = styled.span`
  font-family: ${theme.fonts.paragraph};
  font-size: 20px;
  color: #fff;
  display: flex;
  margin-bottom: 20px;
`;

export { GroupContainer, GroupName };
