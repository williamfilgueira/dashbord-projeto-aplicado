import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  position: fixed;
  padding-left: 35px;
  top: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.alterdataBlue};
  height: 100px;
`;

const UserContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 65px;
  width: 400px;
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
  margin-right: 10px;
`;

const IconsContainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  margin-left: 10px;
`;

const ChatContainer = styled.div`
  height: 80%;
  width: 80%;
  margin-top: 40px;
  margin-bottom: 40px;
  background-color: #fff;
  border-radius: 12px;
`;

const MyAccountContainer = styled.div`
  display: flex;
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
  MyAccountContainer,
};
