import React, { useState } from "react";
import {
  FormAddMember,
  Label,
  ContainerEmojiPicker,
  ContainerInput,
  ContainerInputEmoji,
} from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Picker from "emoji-picker-react";
import { createStatus } from "../../../api/api.status";

export default function ModalStatus({
  isOpen,
  toggleModal,
  title,
  getSetUsers,
}) {
  const [emoji, setEmoji] = useState("");
  const [name, setname] = useState("");
  const [description, setDescription] = useState("");

  function handleStatus(emoji, name, description) {
    createStatus(emoji.emoji, name, description).finally(() => {
      toggleModal();
      getSetUsers();
    });
  }

  function onEmojiClick(event, emoji) {
    setEmoji(emoji);
  }

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
        <ContainerEmojiPicker>
          <Label>Escolha um emoji:</Label>
          <Picker onEmojiClick={onEmojiClick} native />
        </ContainerEmojiPicker>
        <ContainerInput>
          <ContainerInputEmoji>
            <Input
              required
              placeholder=":)"
              size="small"
              mediaSize="small"
              value={emoji.emoji}
              onChange={(event) => setEmoji(event.target.value)}
              sizeInput="small"
            />
            <Input
              required
              placeholder="Status"
              value={name}
              onChange={(event) => setname(event.target.value)}
            />
          </ContainerInputEmoji>
          <Input
            required
            placeholder="Descrição"
            size="medium"
            mediaSize="medium"
            onChange={(event) => setDescription(event.target.value)}
          />
        </ContainerInput>
        <ButtonCommon
          maincolor="blue"
          title="CADASTRAR"
          onClick={() => handleStatus(emoji, name, description)}
        />
      </FormAddMember>
    </BaseModal>
  );
}
