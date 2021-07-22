import React from "react";

import {
  Container,
  StatusContainer,
  UserContainer,
  InfoContainer,
  IconContainer,
  Name,
} from "./styles";

import StatusIndicator from "../Common/StatusIndicator";
import Avatar from "../Common/Avatar";

import {SignOut, Gear} from 'phosphor-react'

import AvatarImage from "../../assets/images/Avatar.png";

export default function Chatbar() {
  return (
    <Container>
      <UserContainer>
        <Avatar src={AvatarImage} small={true} />
        <InfoContainer>
          <Name>Mateus</Name>
          <StatusContainer>
            <StatusIndicator color='white' />
          </StatusContainer>
        </InfoContainer>
        <IconContainer>
          <Gear color="#FFF"   weight='bold' size={30} />
          <SignOut  color="#FFF"  weight='bold'  size={30} />
        </IconContainer>

      </UserContainer>
    </Container>
  );
}
