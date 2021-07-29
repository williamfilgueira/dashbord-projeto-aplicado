import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 100vh;
`;

const CardSection = styled.div`
  width: 100%;
  margin-top: 100px;

  transform: ${(props) => {
    if (props.isOpen) {
      return "translate(0, -110%)";
    }
  }};
  position: ${(props) => {
    if (props.isOpen) {
      return "absolute";
    }
  }};
  transition: all ease-in-out 0.6s;
  z-index: -1000;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
`;

export { Container, CardSection, CardContainer, LoaderContainer };
