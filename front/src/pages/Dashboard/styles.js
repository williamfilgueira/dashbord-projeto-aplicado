import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 100vh;
  position: absolute;
`;

const CardSection = styled.div`
  width: 100%;
  overflow-y: auto;
`;

const CardSelecao = styled.div`
flex-direction: row;
display: flex;
flex-wrap: wrap;
`;

export { Container, CardSection, CardSelecao};
