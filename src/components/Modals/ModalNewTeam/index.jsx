import React, { useState } from "react";
import { FormAddMember } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import { createTeam } from "../../../api/api.team";

export default function ModalNewTeam({
  isOpen,
  toggleModal,
  title,
  getSetUsers,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(name, description) {
    createTeam(name, description).finally(() => {
      toggleModal();
      getSetUsers();
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
          required
          placeholder="Nome"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          required
          placeholder="Descrição"
          onChange={(event) => setDescription(event.target.value)}
        />

        <ButtonCommon
          maincolor="blue"
          title="CADASTRAR"
          onClick={() => handleSubmit(name, description)}
        />
      </FormAddMember>
    </BaseModal>
  );
}
