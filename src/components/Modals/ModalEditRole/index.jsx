import React, { useEffect } from "react";
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
import { createRole, getRoleByName } from "../../../api/api.role";
import Select from "../../Common/Select";
import { getAllRoles, modifyRole } from "../../../api/api.role";
import ButtonDelete from "../../Common/ButtonDelete";
export default function ModalEditRole({ isOpen, toggleModal, title }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#9c0361");
  const [roleName, setRoleName] = useState("");
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllRoles().then((res) => {
      setRoles(res.data);
    });
  }, []);

  useEffect(() => {
    getRoleByName(roleName).then((res) => {
      setName(res.data.nome);
      setDescription(res.data.descricao);
      setColor(res.data.cor);
    });
  }, [roleName]);

  function handleSelect(event) {
    setRoleName(event.target.value);
  }

  function handleSubmit(name, description, color) {
    modifyRole(name, description, color).then((res) => {
      console.log(res);
      setName("");
      setDescription("");
      setColor("#9c0361");
    });
  }

  const handleInput = (e) => {
    setColor(e.target.value);
  };

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
    >
      {isLoading ? (
        <> </>
      ) : (
        <FormAddMember>
          <Select
            title="Selecione um papel"
            value={roleName}
            onChange={handleSelect}
            options={roles}
          />
          <Input
            required
            placeholder="Papel"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <Input
            required
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
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
            title="SALVAR"
            onClick={() => {
              handleSubmit(name, description, color);
              toggleModal();
            }}
          />
          <ButtonDelete title='DELETAR'/>
        </FormAddMember>
      )}
    </BaseModal>
  );
}
