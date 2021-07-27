import React, { useState, useEffect } from "react";
import { FormAddMember } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Select from "../../Common/Select";

import { createUser } from "../../../api/api.user";
import User from "../../../models/user";

export default function ModalNewMember({ isOpen, toggleModal, title }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");

  function handleSubmit(name, username, email, password, birthDate) {
    createUser(new User(name, username, email, password, birthDate));
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
      size="medium"
    >
      <FormAddMember>
        <div>
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
        </div>
        <div>
          <Select
            title="Selecione a equipe:"
            options={[
              { title: "Pack-Contabilidade", value: "A" },
              { title: "Pack-Financeiro", value: "B" },
            ]}
          />
        </div>
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