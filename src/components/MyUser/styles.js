import styled from "styled-components";
import theme from "../../global/theme";

const UserContainer = styled.div`
  margin-top: ${(props) => props.mobile && "120px"};
  display: flex;
  justify-content: space-around;
  height: 100px;
  width: ${(props) => (props.mobile ? "85%" : "400px")};
`;

const Name = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: 1.37rem;
  margin-bottom: 10px;
  color: #fff;
`;

const StatusContainer = styled.div`
  display: flex;
  height: 48%;
  align-items: flex-end;
  width: 100%;
`;

const InfoContainer = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  margin-right: 10px;
`;

const IconsContainer = styled.div`
  height: 100px;
  width: 130px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-end;
  }
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const MyAccountContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  UserContainer,
  Name,
  StatusContainer,
  InfoContainer,
  IconsContainer,
  Icon,
  MyAccountContainer,
};
