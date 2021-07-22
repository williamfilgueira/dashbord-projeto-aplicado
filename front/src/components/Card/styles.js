import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.gray};
  height: 120px;
  width: auto;
  border-radius: 20px;
  margin-top: 35px;
  margin-right: 10%;
  margin-left: 10%;

  overflow: hidden;
  box-shadow: 0px 5px 10px ${theme.colors.gray};
`;

const InfoContainer = styled.div`
  margin-left: 13px;
  margin-top: 13px;
  display: flex;
  flex-direction: column;
`;

const Name = styled.h1`
  font-family: ${theme.fonts.title};
  margin-bottom: 5px;
  font-size: 1.37rem;
`;

const Username = styled.p`
  font-family: ${theme.fonts.paragraph};
`;

const StatusContainer = styled.div`
  display: flex;
  margin-top: 19px;
`;

const PositionContainer = styled.div`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  padding-right: 35px;
`;

const Position = styled.p`
  font-family: ${theme.fonts.paragraph};
`;
const Flag = styled.div`
  background-color: ${theme.colors.red};
  transform: rotate(45deg);
  margin-right: -25px;
  height: 200px;
  width: 20px;
`;

export {
  Container,
  InfoContainer,
  Name,
  Position,
  Username,
  StatusContainer,
  PositionContainer,
  Flag,
};
