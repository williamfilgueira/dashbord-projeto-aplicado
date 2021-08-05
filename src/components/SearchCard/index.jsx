import React, { useEffect } from "react";
import Avatar from "../Common/Avatar";
import {
  Container,
  InfoContainer,
  Name,
  Username,
  PlusIconContainer,
  Team,
} from "./styles";

import { UserPlus } from "phosphor-react";
import { changeUserToMyGroup } from "../../api/api.user";

export default function SearchCard({ data, getSetUsers }) {
  const { equipe, nome, url, userName } = data;

  function pullToMyTeam(username) {
    changeUserToMyGroup(username).finally(() => getSetUsers());
  }

  return (
    <Container>
      <Avatar src={url} small />
      <InfoContainer>
        <Name>{nome || "Sem nome :("}</Name>
        <Username>{userName}</Username>
        <Team>{equipe}</Team>
      </InfoContainer>
      <PlusIconContainer onClick={() => pullToMyTeam(userName)}>
        <div>
          <p>Adicionar à sua equipe</p>
        </div>
        <UserPlus size={28} />
      </PlusIconContainer>
    </Container>
  );
}
