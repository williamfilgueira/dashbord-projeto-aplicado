import React from "react";

import { SignIn } from "phosphor-react";
import { GroupName, GroupContainer } from "./styles";

export default function Group({ name }) {
  return (
    <GroupContainer>
      <GroupName>{name}</GroupName>
      <SignIn color="#FFF" weight="bold" size={22} />
    </GroupContainer>
  );
}
