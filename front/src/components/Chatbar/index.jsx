import React from "react";

import {
  Container,
  StatusContainer,
  UserContainer,
  InfoContainer,
  Name,
} from "./styles";

import StatusIndicator from "../Common/StatusIndicator";
import Avatar from "../Common/Avatar";

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
      </UserContainer>
    </Container>
  );
}
