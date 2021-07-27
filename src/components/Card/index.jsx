import React from "react";
import Avatar from "../Common/Avatar";
import {
  Container,
  StatusContainer,
  InfoContainer,
  Name,
  Position,
  Username,
  PositionContainer,
  Flag,
} from "./styles";

import StatusIndicator from "../Common/StatusIndicator";

import avatar from "../../assets/images/Avatar.png";
export default function Card({ toggleCardModal }) {
  return (
    <Container onClick={toggleCardModal}>
      <Avatar src={avatar} />
      <InfoContainer>
        <Name>Mateus</Name>
        <Username>mateus.dsn.pack</Username>
        <StatusContainer>
          <StatusIndicator />
        </StatusContainer>
      </InfoContainer>
      <PositionContainer>
        <Flag />
        <Position>cargo</Position>
      </PositionContainer>
    </Container>
  );
}
