import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.lightGray};
  height: 120px;
  border-radius: 20px;
  margin-top: 35px;
  //margin-bottom: 35px;
  margin-right: auto;
  margin-left: 30px;

  overflow: hidden;
  /* box-shadow: 0px 5px 15px ${theme.colors.lightGray}; */
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translate(0, -5px);
  }

  width: 450px;
  @media screen and (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    margin-right: 35px;
    margin-left: 15px;
  }
  @media screen and (min-width: ${theme.breakpoints.lg}) {
    width: 650px;
  }
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
