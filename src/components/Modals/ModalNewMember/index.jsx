import React, { useState } from "react";
import { FormAddMember, ContainerInput, ContainerSelect } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Select from "../../Common/Select";

import { createUser } from "../../../api/api.user";
import User from "../../../models/user";
import { getAllRoles } from "../../../api/api.role";
import { useEffect } from "react";

export default function ModalNewMember({ isOpen, toggleModal, title }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [roles, setRoles] = useState([]);
  const [roleName, setRoleName] = useState("");

  var birthDateFormat = birthDate.split("-").reverse().join("/");

  useEffect(() => {
    getAllRoles().then((res) => setRoles(res.data));
  }, []);

  function handleSubmit(name, username, email, password, birthDateFormat) {
    createUser({
      name: name,
      username: username,
      password: password,
      email: email,
      birthdate: birthDateFormat,
    }).then((res) => console.log(res));
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
      size="medium"
      mediaSize="medium"
    >
      <FormAddMember>
        <ContainerInput>
          <Input
            placeholder="Nome"
            required
            onChange={(event) => setName(event.target.value)}
          />
          <Input
            placeholder="Username"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
          <Input
            placeholder="Email"
            type="email"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
          <Input
            placeholder="Senha"
            type="password"
            minlength="6"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
          <Input
            placeholder="Data de nascimento"
            required
            onChange={(event) => setBirthDate(event.target.value)}
          />
        </ContainerInput>
        <ContainerSelect>
          <Select
            title="Selecione o papel:"
            value={roleName}
            onChange={(event) => setRoleName(event.target.value)}
            options={roles}
          ></Select>
        </ContainerSelect>
        <ButtonCommon
          maincolor="blue"
          title="CADASTRAR"
          onClick={() =>
            handleSubmit(name, username, email, password, birthDate)
          }
        />
      </FormAddMember>
    </BaseModal>
  );
}
