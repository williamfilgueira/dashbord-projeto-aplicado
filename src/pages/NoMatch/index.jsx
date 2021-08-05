import React from 'react'; 
import notFound from '../../assets/images/notFound.svg';
import {Imagem, Container, StyledLink, Title, Subtitle} from './styles';
import ButtonCommon from '../../components/Common/Button'

export default function NoMatch() {
    return (
        <Container>
           <Imagem src={notFound} alt="" />
           <Title>A página que você procura não foi encontrada :&#40; </Title>
           <Subtitle>Sugerimos que você volte para a página inicial.</Subtitle>
           <StyledLink to="/"><ButtonCommon mediaSize="regular" maincolor='blue' title='VOLTAR PARA A PÁGINA INICIAL'/></StyledLink>
        </Container>
    )
}
