import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${theme.colors.alterdataBlue};
  padding-top: 20px;
  width: 30%;
  height: 100vh;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 80px;
`;

const Name = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: 1.37rem;
  margin-bottom: 10px;
  color: #fff;
`;

const StatusContainer = styled.div`
  display: flex;
  width: 100%;
`;

const InfoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export { Container, UserContainer, Name, StatusContainer, InfoContainer };
