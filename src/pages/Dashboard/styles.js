import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 100vh;
`;

const CardSection = styled.div`
  width: 100%;
  height: calc(100vh - 100px);
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

const ScrollbarContainer = styled.div`
  margin-top: 100px;
  height: calc(100vh - 100px);
  width: calc(100vw - 340px);
  @media screen and (max-width: 1000px) {
    width: 100vw;
  }

  transform: ${(props) => {
    if (props.isOpen) {
      return "translate(0, -200%)";
    }
  }};
  position: ${(props) => {
    if (props.isOpen) {
      return "absolute";
    }
  }};

  transition: all ease-in-out 0.6s;
`;

export {
  Container,
  CardSection,
  CardContainer,
  LoaderContainer,
  ScrollbarContainer,
};
