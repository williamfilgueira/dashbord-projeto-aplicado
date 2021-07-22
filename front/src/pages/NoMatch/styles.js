import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "../../global/theme";

const Imagem = styled.img`
width: 600px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 100px auto 10px auto;
`
const Title = styled.h1`
font-family: ${theme.fonts.paragraph};
color: ${theme.colors.grey};
margin: 10px auto 10px auto;

`
const Subtitle = styled.h2`
font-family: ${theme.fonts.paragraph};
font-size: 1.2rem;
color: ${theme.colors.grey};
margin: 10px auto 20px auto;
`

const StyledLink = styled(Link)`
  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export {Imagem, Container, StyledLink, Title, Subtitle};

