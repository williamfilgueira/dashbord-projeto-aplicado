import React from "react";

import { ActionContainer, Action } from "./styles";

import { Plus } from "phosphor-react";

export default function GroupAddAction({
 title,
 onClick
}) {
  return (
      <ActionContainer onClick={onClick}>
        <Action>{title}</Action>
        <Plus color="#fff" weight="bold" size={16} />
      </ActionContainer>
  );
}
