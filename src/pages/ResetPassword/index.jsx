import React, { useState } from "react";

import {
  Container,
  ContainerResetPassword,
  ContainerImage,
  Button,
  ContainerInput

} from "./styles";
import { StyledLink } from "../Login/style";
import { sendEmail } from "../../api/api.email";

import AlterdataLogoAzul from "../../components/Common/LogoAzul";
import cadeado from "../../assets/images/cadeado.jpg";
import fundo2 from "../../assets/images/fundo2.jpg";

import Input from "../../components/Common/Input";
export default function ResetPassword() {
  const [userName, setUserName] = useState("");

  function handleSubmit(userName) {
    const email = sendEmail(userName).then(function recebeRespo(response) {
      console.log(email);
    });
  }

  return (
    <Container>
      <img src={fundo2} />

      <ContainerResetPassword>
        <AlterdataLogoAzul />
        <ContainerImage>
          <img src={cadeado} />
        </ContainerImage>
        <h3>Esqueceu sua senha?</h3>
        <h2>Entre com o seu nome de usuário</h2>
        <ContainerInput>
        <Input
          type="mail"
          placeholder="Usuário"
          onChange={(event) => setUserName(event.target.value)}
          innerColor="white"
          mediaSize="regular"
          icon="User"
        />
        </ContainerInput>  
        <Button onClick={() => handleSubmit(userName)}>ENVIAR</Button>
        <StyledLink to="login">
          <h3>voltar</h3>
        </StyledLink>
      </ContainerResetPassword>
    </Container>
  );
}
