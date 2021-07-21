import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.alterdataBlue};
  padding: 30px 30px 0 30px;
  width: 20%;
  height: 100vh;
`;

const GroupList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 70px;
`;
export { Container, GroupList };
