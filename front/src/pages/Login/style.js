import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  height: 100vh;
  background-color: black;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 490px;
  height: 100%;
  background-color: #03569c;
  justify-content: space-evenly;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  div {
    display: flex;
    padding: 5px;
    font-size: 13px;
  }
`;
export const RememberPassword = styled.div`
  display: flex;
  align-items: center;
  div{
    align-items: center;
    input{
      margin-right: 5px;
    }
    .forgotPassword{
      background-color: red;
    }
  }
  color:white;
  .forgotPassword {
  }
`;

export const ContaineirCreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 13px;
  h3 {
    font-weight: 100;
    text-decoration:none;
  }
`;
