import React, { useState, useEffect } from "react";

import { Container, GroupList } from "./styles";

import Group from "../Group";
import MyGroup from "../MyGroup";

export default function Sidebar({
  toggleNewMemberModal,
  toggleRolesModal,
  toggleStatusModal,
  toggleTeamModal,
  isOpen,
  isDesktop,
}) {
  return (
    <Container isOpen={isOpen} isDesktop={isDesktop}>
      <GroupList>
        <MyGroup
          toggleNewMemberModal={toggleNewMemberModal}
          toggleRolesModal={toggleRolesModal}
          toggleStatusModal={toggleStatusModal}
          toggleTeamModal={toggleTeamModal}
          name="Meu grupo"
        />
        <Group name="Pack 04" />
        <Group name="E-commerce" />
        <Group name="Pack 01" />
      </GroupList>
    </Container>
  );
}
