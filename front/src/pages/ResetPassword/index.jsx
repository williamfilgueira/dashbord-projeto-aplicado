import React, { useState } from "react";

import { Container } from "./styles";
import { ContainerImage } from "./styles";
import { ContainerResetPassword } from "./styles";
import { StyledLink } from "../Login/style";
import { Button } from "./styles";
import AlterdataLogoAzul from "../../components/Common/LogoAzul";
import fundo2 from "../../assets/images/fundo2.jpg";

import Input from "../../components/Common/Input";
export default function ResetPassword() {
  const [email, setEmail] = useState("");

  function handleSubmit(email) {
    console.log({
      email: email,
    });
  }

  return (
    <Container>
        <img src={fundo2} />

      <ContainerResetPassword>
        <AlterdataLogoAzul />
        <h3>Esqueceu sua senha?</h3>
        <Input
          type="mail"
          placeholder="Email"
          onChange={(event) => setEmail(event.target.value)}
          size="small"
          innerColor="white"
          
        />
        <Button onClick={() => handleSubmit(email)}>ENVIAR</Button>
        <StyledLink to="login">
          <h3>voltar</h3>
        </StyledLink>
      </ContainerResetPassword>
    </Container>
  );
}
