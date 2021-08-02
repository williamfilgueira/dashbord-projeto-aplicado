import React, { useState, useEffect} from "react";
import { FormAddMember, Label, ContainerEmojiPicker, ContainerInput } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Picker from 'emoji-picker-react';
import { getAllStatus, modifyStatus, getStatusByName} from "../../../api/api.status";
import Select from "../../Common/Select";
import ButtonDelete from '../../Common/ButtonDelete';

export default function ModalEditStatus({ isOpen, toggleModal, title }) {

  const [emoji, setEmoji] = useState('');
  const [name, setName] = useState('');
  const [statusName, setStatusName] = useState('');
  const [status, setStatus] = useState([]);

  function onEmojiClick(event, emoji) {
    setEmoji(emoji.emoji);
  };

  useEffect(() => {
    getAllStatus().then((res) => {
      setStatus(res.data)
    })
  }, [])

  useEffect(() => {
    getStatusByName(statusName).then((res) => {
      setName(res.data.nome);
      setEmoji(res.data.emoji);
    });
  }, [statusName]);

  const handleSelect = (event) => {
     setStatusName(event.target.value)
  };

  function handleSubmit(name, emoji) {
     modifyStatus(name, emoji).then((res) => {
       console.log(res)
       setName('');
       setEmoji('');
     });
  }

 
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
      <Select
          title='Selecione um status:'
          value={statusName}
          onChange={handleSelect}
          options={status}
        />
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
            value={emoji}
            onChange={(event) => setEmoji(event.target.value)}
            sizeInput='small'
          />
          <Input
            required
            placeholder="Status"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </ContainerInput>
        <ButtonCommon
          maincolor='blue'
          title="SALVAR"
          onClick={() => handleSubmit(name,emoji)}
        />
        <ButtonDelete title='DELETAR' />
      </FormAddMember>
    </BaseModal>
  );
}
