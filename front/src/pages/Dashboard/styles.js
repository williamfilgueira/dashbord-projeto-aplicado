import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`

const CardSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

const CardContainer = styled.div`
  margin-top: 35px;
`

export {Container ,CardSection, CardContainer}