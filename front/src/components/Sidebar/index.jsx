import React from 'react'

import { Container,  GroupList } from './styles'

import Group from '../Group'
import MyGroup from '../MyGroup'
import Logo from '../Common/Logo'

export default function Sidebar({toggleNewUserModal}) {
  return (
    <Container>
      <Logo />
      <GroupList>
        <MyGroup toggleNewUserModal={toggleNewUserModal} name="Meu grupo" />
        <Group name="Pack 04" />
        <Group name="E-commerce" />
        <Group name="Pack 01" />
      </GroupList> 
    </Container>
  )
}
