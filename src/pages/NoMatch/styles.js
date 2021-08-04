import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../global/theme";

const Imagem = styled.img`
  width: 600px;

  @media screen and (max-width: 600px) {
    width: 350px;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 10px 0;
  @media screen and (max-width: 600px) {
   width: 100%;
   height: 100vh;
   margin:0;
   justify-content: center;
  }
`;
const Title = styled.h1`
  font-family: ${theme.fonts.paragraph};
  color: ${theme.colors.darkerGray};
  margin: 10px 0 10px 0;
  text-align: center;
  font-weight: 300;
`;
const Subtitle = styled.h2`
  font-family: ${theme.fonts.paragraph};
  font-size: 1.2rem;
  color: ${theme.colors.darkerGray};
  margin: 10px auto 20px auto;
  text-align: center;
  font-weight: 400;
`;

const StyledLink = styled(Link)`
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

export { Imagem, Container, StyledLink, Title, Subtitle };
