import React from "react";

import { GroupContainer, } from "./styles";

import GroupAddAction from '../GroupAddAction';

export default function MyGroup({
  name,
  toggleNewMemberModal,
  toggleRolesModal,
  toggleStatusModal,
  toggleTeamModal
}) {
  return (
    <GroupContainer>
      <GroupAddAction title='Novo membro' onClick={toggleNewMemberModal} />
      <GroupAddAction title='Novo papel' onClick={toggleRolesModal} />
      <GroupAddAction title='Novo status' onClick={toggleStatusModal} />
      <GroupAddAction title='Nova equipe' onClick={toggleTeamModal} />
    </GroupContainer>
  );
}
