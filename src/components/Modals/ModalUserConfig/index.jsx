import React, { useState, useEffect } from "react";
import {
  FormAddMember,
  ContainerUpload,
  Upload,
  IconContainer,
  ContainerInput,
  ContainerSelect,
  Option,
} from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Avatar from "../../Common/Avatar";
import Select from "../../Common/Select";
import { Camera } from "phosphor-react";

import { changeMe, changeMeJSON } from "../../../api/api.user";
import { getAllRoles } from "../../../api/api.role";

export default function ModalUserConfig({
  isOpen,
  toggleModal,
  title,
  loggedUser,
  getSetUsers,
}) {
  const { url, email, papel, nickName, nome, userName } = loggedUser;
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [role, setRole] = useState("");
  const [newPhoto, setNewPhoto] = useState("");
  const [rawPhoto, setRawPhoto] = useState(null);
  const [allRoles, setAllRoles] = useState([]);

  function handleSubmit(
    name,
    nickname,
    role,
    username,
    password,
    newEmail,
    rawPhoto
  ) {
    if (!rawPhoto) {
      changeMeJSON(name, nickname, role, username, password, newEmail).finally(
        () => {
          getSetUsers();
          toggleModal();
        }
      );
    } else {
      changeMe(
        name,
        nickname,
        role,
        username,
        password,
        newEmail,
        rawPhoto
      ).finally(() => {
        getSetUsers();
        toggleModal();
      });
    }
  }

  function handleFileUpload(event) {
    const inputUrl = URL.createObjectURL(event.target.files[0]);
    setNewPhoto(inputUrl);
    setRawPhoto(event.target.files[0]);
  }

  useEffect(() => {
    getAllRoles()
      .then((res) => setAllRoles(res.data))
      .finally(() => {
        setName(nome);
        setNickname(nickName);
        setUsername(userName);
        setNewEmail(email);
      });
  }, [email, nickName, userName, nome]);

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
        <ContainerUpload>
          <Avatar src={newPhoto || url} small />
          <IconContainer>
            <label htmlFor="file-input">
              <Camera size={20} color="#03569C" weight="bold" />
            </label>
            <Upload
              id="file-input"
              type="file"
              onChange={(e) => handleFileUpload(e)}
            />
          </IconContainer>
        </ContainerUpload>
        <ContainerInput>
          <Input
            placeholder="Nome"
            onChange={(event) => {
              setName(event.target.value);
            }}
            value={name}
          />
          <Input
            placeholder="Username"
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            value={username}
          />
          <Input
            placeholder="Nickname"
            onChange={(event) => {
              setNickname(event.target.value);
            }}
            value={nickname}
          />
          <Input
            placeholder="Email"
            type="email"
            onChange={(event) => {
              setNewEmail(event.target.value);
            }}
            value={newEmail}
          />
          {/* <Input
            placeholder="Sua senha atual"
            type="password"
            onChange={(event) => {
              setOldPassword(event.target.value);
            }}
          /> */}
          <Input
            placeholder="Sua nova senha"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </ContainerInput>
        <ContainerSelect>
          <Select
            title="Selecione seu papel:"
            onChange={(event) => setRole(event.target.value)}
            selected={papel}
            options={allRoles}
          />
        </ContainerSelect>
        <ButtonCommon
          maincolor="blue"
          title="SALVAR"
          onClick={() => {
            handleSubmit(
              name,
              nickname,
              role,
              username,
              password,
              newEmail,
              rawPhoto
            );
          }}
        />
      </FormAddMember>
    </BaseModal>
  );
}
