import React from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { ContainerLogin } from "./style";
import { ContaineirCreateAccount } from "./style";
import { RememberPassword } from "./style";
import Logo from "../../components/Common/Logo";
import Fundo from "../../assets/images/Fundo.png";
import ButtonCommon from "../../components/Common/Button";
import CustomInput from "../../components/Common/Input";
import { Actions } from "./style";
export default function Login() {
  return (
    <Container>
      <ContainerLogin>
        <Logo />
        <Actions>
          <CustomInput/>
          <CustomInput />
          <RememberPassword>
            <div>
              <input type="checkbox" />
              <h3>Lembrar</h3>
            </div>

            <Link to="ForgotPassword">
              <h3 >Recuperar senha</h3>
            </Link>
          </RememberPassword>
        </Actions>
          <ButtonCommon />
        <ContaineirCreateAccount>
          <h3>Ainda não tem uma conta?</h3>
          <Link to="Signup"><h3>Criar conta</h3></Link>
        </ContaineirCreateAccount>
      </ContainerLogin>
      <img src={Fundo} />
    </Container>
  );
}
