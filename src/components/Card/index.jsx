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
export default function Card({ toggleCardModal, data }) {
  const {
    dtNascimento,
    email,
    equipe,
    id,
    imagem,
    nickName,
    nome,
    papel,
    status,
    userName,
  } = data;
  return (
    <Container onClick={toggleCardModal}>
      <Avatar src={avatar} />
      <InfoContainer>
        <Name>{nome}</Name>
        <Username>{userName}</Username>
        <StatusContainer>
          <StatusIndicator title={status} />
        </StatusContainer>
      </InfoContainer>
      <PositionContainer>
        <Position>{papel}</Position>
      </PositionContainer>
      <Flag />
    </Container>
  );
}
