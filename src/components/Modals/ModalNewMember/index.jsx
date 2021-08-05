import React, { useState } from "react";
import { FormAddMember, ContainerSelect } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";

import { createUser } from "../../../api/api.user";

export default function ModalNewMember({ isOpen, toggleModal, title }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(name, email) {
    createUser(name, email)
      .then((res) => alert(res.data))
      .finally(() => {
        toggleModal();
      });

     
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
    >
      <FormAddMember>
        <Input
          placeholder="Nome completo"
          required
          onChange={(event) => setName(event.target.value)}
        />

        <Input
          placeholder="Email"
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />

        <ContainerSelect></ContainerSelect>
        <ButtonCommon
          maincolor="blue"
          title="CADASTRAR"
          onClick={() => handleSubmit(name, email)}
        />
      </FormAddMember>
    </BaseModal>
  );
}
