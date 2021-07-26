import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 100vh;
`;

const CardSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export { Container, CardSection };
