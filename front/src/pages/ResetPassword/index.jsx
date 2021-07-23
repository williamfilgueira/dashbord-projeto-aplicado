import React,{useState} from "react";

import { Container } from "./styles";
import { ContainerImage } from "./styles";
import { ContainerResetPassword } from "./styles";
import { StyledLink } from "../Login/style";
import {Button} from "./styles";
import AlterdataLogoAzul from '../../components/Common/LogoAzul';
import Fundo from "../../assets/images/Fundo.png";

import Input from '../../components/Common/Input';
export default function ResetPassword() {
  // const [send, setSend] = useState=("");

  return (
    <Container>
      <ContainerImage>
        <img src={Fundo} />
      </ContainerImage>
      <ContainerResetPassword>
        <AlterdataLogoAzul />
        <h3>Esqueceu sua senha?</h3>
        <Input
            type="mail"
            placeholder="Email"
            onChange={(events) => events.target.value}
            size="small"
          />
          <Button onClick={(events) =>events.target.value}>ENVIAR</Button>
          <StyledLink to="login"><h3>voltar</h3></StyledLink>
      </ContainerResetPassword>
    </Container>
  );
}
