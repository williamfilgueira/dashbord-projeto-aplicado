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
        <SignIn  color='#FFF' weight="bold" size={22}/>
        </GroupContainer>
        <GroupContainer>
        <GroupName>Pack</GroupName>
        <SignIn  color='#FFF' weight="bold" size={22}/>
        </GroupContainer>
      </GroupList> 
    </Container>
  )
}
