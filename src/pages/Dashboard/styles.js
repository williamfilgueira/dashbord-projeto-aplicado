import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-height: 100vh;
  position: absolute;
`;

const CardSection = styled.div`
  width: 100%;
  margin-top: 100px;
`;

const CardContainer = styled.div`
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export { Container, CardSection, CardContainer };
