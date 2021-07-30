import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  transform: ${(props) => {
    if (!props.isOpen && !props.isDesktop) {
      return "translate(-100%, 0)";
    }
  }};
  position: ${(props) => {
    if (!props.isOpen && !props.isDesktop) {
      return "absolute";
    }
  }};
  width: ${(props) => {
    if (!props.isDesktop) {
      return "100vw";
    } else {
      return "340px";
    }
  }};
  transition: all ease-in-out 0.5s;
  z-index: 10;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.alterdataBlue};
  padding: 30px 30px 0 30px;

  height: 100vh;
`;

const GroupList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 40px;
`;
export { Container, GroupList };
