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
  margin-bottom: 25px;
  color: #fff;
  display: flex;
`;

const ActionContainer = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
`;

const Action = styled.span`
  font-family: ${theme.fonts.paragraph};
  font-size: 15px;
  color: #fff;
  display: flex;
`;

export { GroupContainer, GroupName, Action, ActionContainer };
