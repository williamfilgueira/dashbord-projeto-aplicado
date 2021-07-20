import React from "react";
import Avatar from "../Common/Avatar";
import {
  Container,
  StatusContainer,
  InfoContainer,
  Icon,
  Name,
  Position,
  Status,
  Username,
  PositionContainer,
  Flag,
} from "./styles";

import avatar from "../../assets/images/Avatar.png";
import coffee from "../../assets/emoji/HotBeverage.png";
export default function Card() {
  return (
    <Container>
      <Avatar src={avatar} />
      <InfoContainer>
        <Name>Mateus</Name>
        <Username>mateus.dsn.pack</Username>
        <StatusContainer>
          <Icon src={coffee} />
          <Status>hora do café</Status>
        </StatusContainer>
      </InfoContainer>
      <PositionContainer>
      <Flag />
        <Position>cargo</Position>
      </PositionContainer>
    </Container>
  );
}
