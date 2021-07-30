import React from "react";
import {
  FormAddMember,
  ColorPicker,
  InputColor,
  InputText,
  Label,
  ColorPickerContainer,
} from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import { useState } from "react";
import { createRole } from "../../../api/api.role";

export default function ModalEditRole({ isOpen, toggleModal, title }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#9c0361");

  const handleInput = (e) => {
    setColor(e.target.value);
  };

  function handleSubmit(name, color, description) {
    createRole(name, description, color).then((res) => console.log(res));
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
          placeholder="Papel"
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          required
          placeholder="Descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <ColorPickerContainer>
          <Label>Escolha uma cor: </Label>
          <ColorPicker onChange={handleInput}>
            <InputColor
              type="color"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
            <InputText
              type="text"
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </ColorPicker>
        </ColorPickerContainer>
        <ButtonCommon
          maincolor="blue"
          title="CADASTRAR"
          onClick={() => {
            handleSubmit(name, description, color);
            toggleModal();
          }}
        />
      </FormAddMember>
    </BaseModal>
  );
}
