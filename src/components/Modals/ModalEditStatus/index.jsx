import React, { useState, useEffect } from "react";
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
import {
  getAllStatus,
  modifyStatus,
  getStatusByName,
} from "../../../api/api.status";
import Select from "../../Common/Select";
import ButtonDelete from "../../Common/ButtonDelete";

export default function ModalEditStatus({
  isOpen,
  toggleModal,
  title,
  getSetUsers,
}) {
  const [emoji, setEmoji] = useState("");
  const [name, setName] = useState("");
  const [statusName, setStatusName] = useState("");
  const [status, setStatus] = useState([]);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function getAll() {
    getAllStatus().then((res) => {
      setStatus(res.data);
    });
  }

  useEffect(() => {
    getAll();
  }, [isOpen]);

  useEffect(() => {
    getStatusByName(statusName).then((res) => {
      setName(res.data.nome);
      setEmoji(res.data.emoji);
      setDescription(res.data.descricao);
    });
  }, [statusName]);

  function onEmojiClick(event, emoji) {
    setEmoji(emoji.emoji);
  }

  function handleSubmit(teamName, name, emoji, description) {
    modifyStatus(teamName, name, emoji, description)
      .then((res) => {
        setName("");
        setEmoji("");
        setDescription("");
      })
      .finally(() => {
        getAll();
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
      size="big"
      mediaSize="big"
    >
      {isLoading ? (
        <> </>
      ) : (
        <FormAddMember>
          <Select
            title="Selecione um status:"
            value={statusName}
            onChange={(event) => setStatusName(event.target.value)}
            options={status}
          />
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
                value={emoji}
                onChange={(event) => setEmoji(event.target.value)}
                sizeInput="small"
              />
              <Input
                required
                placeholder="Status"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </ContainerInputEmoji>
            <Input
              required
              placeholder="Descrição"
              size="medium"
              mediaSize="medium"
              onChange={(event) => setDescription(event.target.value)}
              value={description}
            />
          </ContainerInput>
          <ButtonCommon
            maincolor="blue"
            title="SALVAR"
            onClick={() => handleSubmit(statusName, name, emoji, description)}
          />
          {/* <ButtonDelete title="DELETAR" /> */}
        </FormAddMember>
      )}
    </BaseModal>
  );
}
