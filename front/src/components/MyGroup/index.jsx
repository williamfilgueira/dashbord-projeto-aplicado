import React from "react";

import { GroupName, GroupContainer, ActionContainer, Action } from "./styles";

import { Plus } from "phosphor-react";

export default function MyGroup({
  name,
  toggleNewMemberModal,
  toggleRolesModal,
  toggleStatusModal,
}) {
  return (
    <GroupContainer>
      <GroupName>{name}</GroupName>
      <ActionContainer onClick={toggleNewMemberModal}>
        <Action>Novo membro</Action>
        <Plus color="#fff" weight="bold" size={16} />
      </ActionContainer>
      <ActionContainer onClick={toggleRolesModal}>
        <Action>Novo papel</Action>
        <Plus color="#fff" weight="bold" size={16} />
      </ActionContainer>
      <ActionContainer onClick={toggleStatusModal}>
        <Action>Modificar status</Action>
        <Plus color="#fff" weight="bold" size={16} />
      </ActionContainer>
    </GroupContainer>
  );
}
