import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  position: fixed;
  padding-left: 30px;
  top: 0;
  width: 100vw;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${theme.colors.alterdataBlue};
  height: 100px;
`;

export { Container };
