import React from "react";
import { Container } from "./styles";
import Fundo from "../../assets/images/Fundo.png";
import logo_azul from '../../assets/images/logo_azul.png';
import { ContainerImage } from "./styles";
import { ContainerResetPassword } from "./styles";
import Input from '../../components/Common/Input';
import ButtonCommon from "../../components/Common/Button";

export default function ResetPassword() {
  return (
    <Container>
      <ContainerImage>
        <img src={Fundo} />
      </ContainerImage>
      <ContainerResetPassword>
        <logo_azul />
        <h1>Esqueceu sua senha?</h1>
        <Input
            type="mail"
            placeholder="Email"
            onChange={(events) => events.target.value}
            size="small"
          />
          <ButtonCommon title="ENVIAR"/>
      </ContainerResetPassword>
    </Container>
  );
}
