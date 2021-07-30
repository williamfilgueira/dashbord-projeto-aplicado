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
  EditIconContainer,
} from "./styles";

import StatusIndicator from "../Common/StatusIndicator";

import avatar from "../../assets/images/Avatar.png";
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
    status,
    userName,
  } = data;
  return (
    <Container onDoubleClick={toggleCardModal}>
      <Avatar src={avatar} />
      <InfoContainer>
        <Name>{nome || "Sem nome"}</Name>
        <Username>{userName}</Username>
        <StatusContainer>
          <StatusIndicator title={status} />
        </StatusContainer>
      </InfoContainer>
      <PositionContainer>
        <Position>{papel}</Position>
      </PositionContainer>
      <Flag />
      <EditIconContainer onClick={toggleCardModal}>
        <Pencil size={28} />
      </EditIconContainer>
    </Container>
  );
}
