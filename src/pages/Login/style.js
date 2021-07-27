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
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  background-color: #03569c;
  @media screen and (max-width: 600px) {
    flex: 1;
  }
`;

export const Actions = styled.form`
  display: flex;
  flex-direction: column;
  margin: 10px;
  h3 {
    display: flex;
    padding: 5px;
    font-size: 10px;
    font-family: ${theme.fonts.paragraph};
  }
`;
export const RememberPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
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
  font-family: ${theme.fonts.paragraph};
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
    color: ${theme.colors.lightGray};
  }
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    display: none;
  }
  img {
    height: 100%;
  }
`;
