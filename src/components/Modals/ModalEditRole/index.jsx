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
export default function ModalEditRole({
  isOpen,
  toggleModal,
  title,
  getSetUsers,
}) {
  const [name, setName] = useState(""); // = new name;
  const [roleName, setRoleName] = useState(""); // = old name;
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#9c0361");
  const [roles, setRoles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getAll() {
    getAllRoles().then((res) => {
      setRoles(res.data);
    });
  }

  useEffect(() => {
    getAll();
  }, [isOpen]);

  useEffect(() => {
    getRoleByName(roleName).then((res) => {
      setName(res.data.nome);
      setDescription(res.data.descricao);
      setColor(res.data.cor);
    });
  }, [roleName]);

  function handleSubmit(roleName, name, description, color) {
    modifyRole(roleName, name, description, color)
      .then((res) => {
        setName("");
        setDescription("");
        setColor("#9c0361");
      })
      .finally(() => {
        getAll();
        getSetUsers();
        toggleModal();
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
            onChange={(event) => setRoleName(event.target.value)}
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
              handleSubmit(roleName, name, description, color);
            }}
          />
          {/* <ButtonDelete title="DELETAR" /> */}
        </FormAddMember>
      )}
    </BaseModal>
  );
}
