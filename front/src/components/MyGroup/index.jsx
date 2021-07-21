import React from 'react'

import { GroupName, GroupContainer , ActionContainer, Action } from './styles'

import { Plus } from 'phosphor-react'

export default function MyGroup({name, toggleNewUserModal}) {
  return (
    <GroupContainer>
        <GroupName>{name}</GroupName>
        <ActionContainer onClick={toggleNewUserModal} >
          <Action>Novo membro</Action>
          <Plus  color="#fff" weight="bold" size={16} />
        </ActionContainer>
        <ActionContainer>
          <Action>Modificar papéis</Action>
          <Plus  color="#fff" weight="bold" size={16} />
        </ActionContainer>
        <ActionContainer>
          <Action>Modificar status</Action>
          <Plus  color="#fff" weight="bold" size={16} />
        </ActionContainer>
    </GroupContainer>
  )
}
