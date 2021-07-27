import React, { useState } from "react";
import {
  Container,
  ContainerLogin,
  RememberPassword,
  ContainerImage,
} from "./style";
import { StyledLink } from "./style";
import { Actions } from "./style";
import Logo from "../../components/Common/Logo";
import Fundo from "../../assets/images/Fundo.png";
import ButtonCommon from "../../components/Common/Button";
import Input from "../../components/Common/Input";

import { newSession } from "../../api/api.auth";

// import { makeStyles } from '@material-ui/core/styles';
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remindMe, setRemindMe] = useState(false);

  function handleSubmit(username, password, remindMe) {
    // const userData = {
    //   login: username,
    //   password: password,
    //   remindme: remindMe,
    // };
    // const remindmeIsChecked = userData.remindme;
    // const remindmeAlreadyExist = !!localStorage.getItem("userData");
    // remindmeIsChecked &&
    //   !remindmeAlreadyExist &&
    //   localStorage.setItem("userData", JSON.stringify(userData));

    if (!username || !password) {
      alert("Favor informar e-mail e senha");
    }else newSession(username, password).then((res) => console.log(res));
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
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            id="password"
            placeholder="Senha"
            type="password"
            name="password"
            innerColor="white"
            onChange={(event) => setPassword(event.target.value)}
          />
          <RememberPassword>
            <div>
              <h3>Lembrar</h3>
            </div>

            <StyledLink to="ResetPassword">
              {/* componente criado para estilizar o link*/}
              <h3>Recuperar senha</h3>
            </StyledLink>
          </RememberPassword>
          <ButtonCommon
            onClick={() => handleSubmit(username, password, remindMe)}
            type="submit"
            title="ENTRAR"
          />
        </Actions>
      </ContainerLogin>
      <ContainerImage>
        <img src={Fundo} />
      </ContainerImage>
    </Container>
  );
}