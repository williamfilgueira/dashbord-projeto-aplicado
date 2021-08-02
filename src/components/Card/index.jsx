import React, { useEffect } from "react";
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
  EditIconContainer,
} from "./styles";

import StatusIndicator from "../Common/StatusIndicator";

import { Pencil } from "phosphor-react";

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
    cor,
    status,
    url,
    userName,
  } = data;

  return (
    <Container onDoubleClick={toggleCardModal}>
      <Avatar src={url} />
      <InfoContainer>
        <Name>{nickName || "Sem nick :("}</Name>
        <Username>{userName}</Username>
        <StatusContainer>
          <StatusIndicator title={status} />
        </StatusContainer>
      </InfoContainer>
      <PositionContainer>
        <Position>{papel}</Position>
      </PositionContainer>
      <Flag color={cor} />
      <EditIconContainer onClick={toggleCardModal}>
        <Pencil size={28} />
      </EditIconContainer>
    </Container>
  );
}
