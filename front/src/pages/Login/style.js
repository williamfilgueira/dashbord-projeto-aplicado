import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../global/theme";


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
    font-size: 10px;
    font-family:${theme.fonts.paragraph};
  }
`;
export const RememberPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    align-items: center;
    input {
      margin-right: 5px;
    }
    h3 {
      font-weight: 100;
    }
    .forgotPassword {
      background-color: red;
    }
  }
  color: white;
  .forgotPassword {
  }
`;

export const ContaineirCreateAccount = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-size: 13px;
  font-family:${theme.fonts.paragraph};
  h3 {
    padding: 10px;
    font-weight: 100;
    text-decoration: none;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  transition: 0.3s;
  h3 {
    font-weight: 100;
  }
  h4 {
    font-size: 20px;
    font-weight: 100;
  }
  :hover {
    color: ${theme.colors.alterdataBlue};
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
