import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${theme.colors.alterdataBlue};
  padding-top: 20px;
  width: 30%;
  height: 100vh;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 350px;
  height: 65px;
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

const IconsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const ChatContainer = styled.div`
  height: 80%;
  width: 80%;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #fff;
  border-radius: 12px;
`;

export {
  Container,
  UserContainer,
  Name,
  StatusContainer,
  InfoContainer,
  IconsContainer,
  Icon,
  ChatContainer,
};
