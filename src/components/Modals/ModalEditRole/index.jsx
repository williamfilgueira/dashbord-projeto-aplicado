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
  const [newName, setNewName] = useState("");
  const [oldName, setOldName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#9c0361");
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllRoles().then((res) => {
      setRoles(res.data);
    });
  }, []);

  //  useEffect(() => {
  //    getRoleByName(oldName).then((res) => {
  //      setNewName(res.data.nome);
  //      setDescription(res.data.descricao);
  //      setColor(res.data.cor);
  //    });
  //    console.log("useEffect oldName");
  //  }, [oldName]);

  function handleSubmit(oldName, newName, description, color) {
    modifyRole(oldName, newName, description, color).then((res) => {
      setOldName("");
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
            onChange={(event) => setOldName(event.target.value)}
            options={roles}
          />
          <Input
            required
            placeholder="Papel"
            onChange={(event) => setNewName(event.target.value)}
            // value={oldName}
          />
          <Input
            required
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
            // value={description}
          />
          <ColorPickerContainer>
            <Label>Escolha uma cor: </Label>
            <ColorPicker onChange={handleInput}>
              <InputColor
                type="color"
                // value={color}
                onChange={(event) => setColor(event.target.value)}
              />
              <InputText
                type="text"
                // value={color}
                onChange={(event) => setColor(event.target.value)}
              />
            </ColorPicker>
          </ColorPickerContainer>
          <ButtonCommon
            maincolor="blue"
            title="SALVAR"
            onClick={() => {
              handleSubmit(oldName, newName, description, color);
              toggleModal();
            }}
          />
          <ButtonDelete title="DELETAR" />
        </FormAddMember>
      )}
    </BaseModal>
  );
}
