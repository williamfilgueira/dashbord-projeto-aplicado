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
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  
  function handleSubmit(login, password){
    console.log({
      login:login,
      password:password,
    })
  }

  
  return (
    <Container>
      <ContainerLogin>
        <Logo />
        <Actions>
          <Input
            placeholder="Login"
            onChange={(events) => setLogin(events.target.value)}
            size="small"
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(events) => setPassword(events.target.value)}
            size="small"
            type='password'
          />
          <RememberPassword>
            <div>
              <input type="checkbox" />
              <h3>Lembrar</h3>
            </div>

            <StyledLink to="ResetPassword">
              {/* componente criado para estilizar o link*/}
              <h3>Recuperar senha</h3>
            </StyledLink>
          </RememberPassword>
        </Actions>
        <ButtonCommon title="ENTRAR" onClick={() => handleSubmit(login, password)} />
      </ContainerLogin>
      <img src={Fundo} />
    </Container>
  );
}
