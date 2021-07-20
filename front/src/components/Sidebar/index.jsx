import React from 'react'

import { Container, GroupList, GroupContainer, GroupName } from './styles'
import { SignIn } from 'phosphor-react'

import Logo from '../Common/Logo'

export default function Sidebar() {
  return (
    <Container>
      <Logo />
      <GroupList>
        <GroupContainer>
        <GroupName>Pack</GroupName>
        <SignIn/>
        </GroupContainer>
      </GroupList> 
    </Container>
  )
}
