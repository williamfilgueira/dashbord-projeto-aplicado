import React, { useState } from "react";
import { FormAddMember, Label, ContainerEmojiPicker, ContainerInput } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Picker from 'emoji-picker-react';
import { createStatus } from "../../../api/api.status";

export default function ModalEditStatus({ isOpen, toggleModal, title }) {

  const [emoji, setEmoji] = useState('');
  const [name, setname] = useState('');

  function handleStatus(emoji, name) {
     createStatus(emoji.unified, name).then((res) => console.log(res));
  }

  function onEmojiClick(event, emoji) {
    setEmoji(emoji);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
      size='big'
      mediaSize='big'
    >
      <FormAddMember>
        <ContainerEmojiPicker>
          <Label>
            Escolha um emoji:
          </Label>
          <Picker onEmojiClick={onEmojiClick} native />
        </ContainerEmojiPicker>
        <ContainerInput>
          <Input
            required
            placeholder=":)"
            size='small'
            mediaSize='small'
            value={emoji.emoji}
            onChange={(event) => setEmoji(event.target.value)}
            sizeInput='small'
          />
          <Input
            required
            placeholder="Status"
            value={name}
            onChange={(event) => setname(event.target.value)}
          />
        </ContainerInput>
        <ButtonCommon
          maincolor='blue'
          title="CADASTRAR"
          onClick={() => handleStatus(emoji, name)}
        />
      </FormAddMember>
    </BaseModal>
  );
}
