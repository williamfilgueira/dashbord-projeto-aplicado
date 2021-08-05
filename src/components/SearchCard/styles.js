import styled from "styled-components";
import theme from "../../global/theme";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${theme.colors.lightGray};
  height: 80px;
  border-radius: 20px;
  margin-top: 35px;
  //margin-bottom: 35px;
  margin-right: auto;
  margin-left: 30px;

  overflow: hidden;
  /* box-shadow: 0px 5px 15px ${theme.colors.lightGray}; */
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translate(0, -5px);
  }

  width: 450px;
  @media screen and (max-width: ${theme.breakpoints.sm}) {
    width: 100%;
    margin-right: 20px;
    margin-left: 10px;
    height: 80px;
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
  margin-right: auto;
`;

const Name = styled.h1`
  font-family: ${theme.fonts.title};
  font-size: 20px;
  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 17px;
  }
`;

const Username = styled.p`
  font-family: ${theme.fonts.paragraph};
  font-size: 13px;
  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;
const Team = styled.p`
  font-family: ${theme.fonts.paragraph};
  font-size: 13px;
  font-weight: bold;
  color: ${theme.colors.alterdataBlue};
  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 12px;
  }
`;

const PlusIconContainer = styled.div`
  position: relative;
  top: 15px;
  right: 20px;

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    right: 10px;
  }
  cursor: pointer;
  color: ${theme.colors.alterdataBlue};
  svg {
    &:hover {
      color: ${theme.colors.alterdataSecondaryBlue};
    }
    transition: all ease-in-out 0.3s;
  }

  div {
    display: none;
    position: absolute;
    top: 28px;
    right: 8px;
    background-color: #b2b2b2;
    color: black;
    width: 100px;
    height: 32px;
    text-align: center;
    border-radius: 8px;
    font-size: 0.8rem;
    font-family: ${theme.fonts.paragraph};
    font-weight: 200;
  }

  &:hover div {
    display: block;
  }
`;

export { Container, InfoContainer, Name, Username, PlusIconContainer, Team };
