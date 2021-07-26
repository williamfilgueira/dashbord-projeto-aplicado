import React, { useState } from "react";
import { Container } from "./style";
import { ContainerLogin } from "./style";
import { RememberPassword } from "./style";
import { StyledLink } from "./style";
import { Actions } from "./style";
import Logo from "../../components/Common/Logo";
import Fundo from "../../assets/images/Fundo.png";
import ButtonCommon from "../../components/Common/Button";
import Input from "../../components/Common/Input";

export default function Login() {
  function handleSubmit(event) {
    event.preventDefault();

    const { login, password, remindme } = event.target;

    const userData = {
      login: login.value,
      password: password.value,
      remindme: remindme.checked,
    };

    const remindmeIsChecked = userData.remindme;
    const remindmeAlreadyExist = !!localStorage.getItem("userData");
    console.log(remindmeAlreadyExist);

    remindmeIsChecked &&
      !remindmeAlreadyExist &&
      localStorage.setItem("userData", JSON.stringify(userData));
  }

  return (
    <Container>
      <ContainerLogin>
        <Logo />
        <Actions onSubmit={handleSubmit}>
          <Input
            id="login"
            placeholder="Login"
            name="login"
            innerColor="white"
          />
          <Input
            id="password"
            placeholder="Senha"
            type="password"
            name="password"
            innerColor="white"
          />
          <RememberPassword>
            <div>
              <input type="checkbox" name="remindme" />
              <h3>Lembrar</h3>
            </div>

            <StyledLink to="ResetPassword">
              {/* componente criado para estilizar o link*/}
              <h3>Recuperar senha</h3>
            </StyledLink>
          </RememberPassword>
          <ButtonCommon type="submit" title="ENTRAR" />
        </Actions>
      </ContainerLogin>
      <img src={Fundo} />
    </Container>
  );
}
