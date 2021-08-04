import React, { useState } from "react";

import {
  Container,
  ContainerLogin,
  RememberPassword,
  ContainerImage,
} from "./style";

import { StyledLink, Actions } from "./style";
import Logo from "../../components/Common/Logo";
//imagem
import Fundo from "../../assets/images/Fundo.png";
import lockKey from "../../assets/images/lockKey.png";
import lockKeyOpen from "../../assets/images/lockKeyOpen.png";

import ButtonCommon from "../../components/Common/Button";
import Input from "../../components/Common/Input";

import { newSession } from "../../api/api.auth";

import { useHistory } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {
  const history = useHistory();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remindMe, setRemindMe] = useState(false);

  function handleSubmit(username, password, remindMe) {
    if (!username || !password) {
      alert("Favor informar e-mail e senha");
      return;
    }
    //  if (remindMe == false){
    //   localStorage.setItem("saveUserName", username);
    //   localStorage.setItem("password", password);
    // }
    newSession(username, password)
      .then((res) => {
        localStorage.setItem("token", res.headers.authorization);
        localStorage.setItem("username", username);
        history.push("/");
      })
      .catch((err) => {
        alert("Email ou senha inválidos.");
      });
  }

  function handleCheckBox() {
    setRemindMe(!remindMe);
  }

  useEffect(() => {
    const saveUserNamer = localStorage.getItem("saveUserName");
    const password = localStorage.getItem("password");
  }, []);

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
            mediaSize="regular"
            icon="User"
          />
          <Input
            id="password"
            placeholder="Senha"
            type="password"
            name="password"
            innerColor="white"
            onChange={(event) => setPassword(event.target.value)}
            mediaSize="regular"
            icon={lockKey}
          />
          

          <RememberPassword>
            <div>
              <input
                type="checkbox"
                value="remindMe"
                onChange={handleCheckBox}
              />
              <label>Lembrar</label>
            </div>

            <StyledLink to="ResetPassword">
              {/* componente criado para estilizar o link*/}
              <h3>Recuperar senha</h3>
            </StyledLink>
          </RememberPassword>
          <ButtonCommon
            onClick={() => handleSubmit(username, password, remindMe)}
            type="submit"
            mediaSize="regular"
            title="ENTRAR"
          />
        </Actions>
      </ContainerLogin>
      <ContainerImage>
        <img src={Fundo} alt="Pessoas programando" />
      </ContainerImage>
    </Container>
  );
}
