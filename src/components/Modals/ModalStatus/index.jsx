import React, { useState } from "react";
import { FormAddMember, Label, ContainerEmojiPicker, ContainerInput } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Picker from 'emoji-picker-react';

export default function ModalStatus({ isOpen, toggleModal, title }) {

  const [chosenEmoji, setChosenEmoji] = useState('');
  const [statusName, setStatusName] = useState('');

  function handleStatus(chosenEmoji, statusName) {
    console.log(
      chosenEmoji,
      statusName
    );
  }

  function onEmojiClick(event, chosenEmoji) {
    setChosenEmoji(chosenEmoji);
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
            placeholder="😀"
            size='small'
            mediaSize='small'
            value={chosenEmoji.emoji}
            onChange={(event) => setChosenEmoji(event.target.value)}
            sizeInput='small'
          />
          <Input
            required
            placeholder="Status"
            value={statusName}
            onChange={(event) => setStatusName(event.target.value)}
          />
        </ContainerInput>
        <ButtonCommon
          maincolor='blue'
          title="CADASTRAR"
          onClick={() => handleStatus(chosenEmoji, statusName)}
        />
      </FormAddMember>
    </BaseModal>
  );
}
