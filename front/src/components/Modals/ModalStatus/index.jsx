import React from "react";
import { FormAddMember } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";

export default function ModalStatus({ isOpen, toggleModal, title }) {
  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
    >
      <FormAddMember>
        <div>
          <Input placeholder="Nome" />
        </div>
        <ButtonCommon title="CADASTRAR" />
      </FormAddMember>
    </BaseModal>
  );
}
