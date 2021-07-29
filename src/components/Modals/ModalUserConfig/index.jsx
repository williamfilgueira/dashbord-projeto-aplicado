import React, { useState } from "react";
import {
  FormAddMember,
  ContainerUpload,
  Upload,
  IconContainer,
  ContainerInput,
  ContainerSelect
} from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Avatar from "../../Common/Avatar";
import avatar from "../../../assets/images/Avatar.png";
import Select from "../../Common/Select";
import { Camera } from "phosphor-react";

export default function ModalUserConfig({ isOpen, toggleModal, title }) {
  function handleSubmit(
    name,
    username,
    email,
    oldPassword,
    newPassword,
    newBirthDate
  ) {
    console.log(name, username, email, oldPassword, newPassword, newBirthDate);
  }

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newBirthDate, setNewBirthDate] = useState("");

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
      size="big"
      mediaSize="big"
    >
      <FormAddMember>
          <ContainerUpload>
            <Avatar src={avatar} small/>
            <IconContainer>
              <label htmlFor="file-input">
                <Camera size={20} color="#03569C" weight="bold"/>
              </label>
              <Upload id="file-input" type="file" />
            </IconContainer>
          </ContainerUpload>
        <ContainerInput>
        <Input
            placeholder="Nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Input
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <Input
            placeholder="Senha"
            type="password"
            onChange={(event) => {
              setOldPassword(event.target.value);
            }}
          />
          <Input
            placeholder="Nova senha"
            type="password"
            onChange={(event) => {
              setNewPassword(event.target.value);
            }}
          />
          <Input
            placeholder="Data de nascimento"
            onChange={(event) => {
              setNewBirthDate(event.target.value);
            }}
          />
        </ContainerInput> 
        <ContainerSelect>
        <Select
          title="Selecione a papel:"
          options={[
            { title: "Bombeiro", value: "A" },
            { title: "Merge", value: "B" },
          ]}
        />
        <Select
          title="Selecione o equipe:"
          options={[
            { title: "Pack-Contabilidade", value: "A" },
            { title: "Pack-Financeiro", value: "B" },
          ]}
        />
          </ContainerSelect>  
        <ButtonCommon
          maincolor='blue'
          title="SALVAR"
          onClick={() => {
            handleSubmit(
              name,
              username,
              email,
              oldPassword,
              newPassword,
              newBirthDate
            );
          }}
        />
      </FormAddMember>
    </BaseModal>
  );
}
