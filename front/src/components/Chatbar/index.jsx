import React from "react";

import {
  Container,
  StatusContainer,
  UserContainer,
  InfoContainer,
  IconsContainer,
  Icon,
  Name,
} from "./styles";

import StatusIndicator from "../Common/StatusIndicator";
import Avatar from "../Common/Avatar";

import { SignOut, Gear } from "phosphor-react";

import AvatarImage from "../../assets/images/Avatar.png";

export default function Chatbar({ toggleUserConfigModal }) {
  return (
    <Container>
      <UserContainer>
        <Avatar src={AvatarImage} small={true} />
        <InfoContainer>
          <Name>Mateus</Name>
          <StatusContainer>
            <StatusIndicator color="white" />
          </StatusContainer>
        </InfoContainer>
        <IconsContainer>
          <Icon>
            <Gear
              onClick={toggleUserConfigModal}
              color="#FFF"
              weight="bold"
              size={30}
            />
          </Icon>
          <Icon>
            <SignOut color="#FFF" weight="bold" size={30} />
          </Icon>
        </IconsContainer>
      </UserContainer>
    </Container>
  );
}
