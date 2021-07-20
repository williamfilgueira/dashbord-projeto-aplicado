import React, {useState} from "react";
import { Container } from "./style";
import { ContainerLogin } from "./style";
import { ContaineirCreateAccount } from "./style";
import { RememberPassword } from "./style";
import {StyledLink} from "./style"
import { Actions } from "./style";
import Logo from "../../components/Common/Logo";
import Fundo from "../../assets/images/Fundo.png";
import ButtonCommon from "../../components/Common/Button";
import CustomInput from "../../components/Common/Input";
export default function Login() {
  
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Container>
      <ContainerLogin>
        <Logo />
        <Actions>
          <CustomInput title="Login" onClick={()=>setLogin}/>
          <CustomInput title="Senha" onClick={()=>setPassword} />
          <RememberPassword>
            <div>
              <input type="checkbox" />
              <h3>Lembrar</h3>
            </div>

            <StyledLink to="ForgotPassword"> {/* componente criado para estilizar o link*/}
              <h3 >Recuperar senha</h3>
            </StyledLink>
          </RememberPassword>
        </Actions>
          <ButtonCommon title="ENTRAR"/>
        <ContaineirCreateAccount>
          <h3>Ainda não tem uma conta?</h3>
          <StyledLink to="Signup"><h4>Criar conta</h4></StyledLink>
        </ContaineirCreateAccount>
      </ContainerLogin>
      <img src={Fundo} />
    </Container>
  );
}
