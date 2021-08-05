import React from "react";
import { ActionContainer, Action } from "./styles";

export default function GroupAddAction({
 title,
 onClick,
 icon
}) {
  return (
      <ActionContainer onClick={onClick}>
        <Action>{title}</Action>
        <div>{icon}</div>
      </ActionContainer>
  );
}
