import React from "react";

import { ActionContainer, Action } from "./styles";

import { Plus } from "phosphor-react";

export default function GroupAddAction({
 title,
 onClick,
 icon
}) {
  return (
      <ActionContainer onClick={onClick}>
        <Action>{title}</Action>
        {/* <Plus color="#fff" weight="bold" size={16} /> */}
        <div>{icon}</div>
      </ActionContainer>
  );
}
