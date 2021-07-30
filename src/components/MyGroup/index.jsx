import React from "react";

import { GroupContainer, GroupName } from "./styles";

import GroupAddAction from "../GroupAddAction";

export default function MyGroup({
  name,
  toggleNewMemberModal,
  toggleRolesModal,
  toggleStatusModal,
  toggleTeamModal,
  toggleEditRoleModal,
  toggleEditStatusModal,
  toggleEditTeamModal,

}) {
  return (
    <GroupContainer>
      <GroupName>{name}</GroupName>
      <GroupAddAction title="Novo membro" onClick={toggleNewMemberModal} />
      <GroupAddAction title="Novo papel" onClick={toggleRolesModal} />
      <GroupAddAction title="Novo status" onClick={toggleStatusModal} />
      <GroupAddAction title="Nova equipe" onClick={toggleTeamModal} />
      <GroupAddAction title="Editar papel" onClick={toggleEditRoleModal} />
      <GroupAddAction title="Editar status" onClick={toggleEditStatusModal} />
      <GroupAddAction title="Editar equipe" onClick={toggleEditTeamModal} />
    </GroupContainer>
  );
}
