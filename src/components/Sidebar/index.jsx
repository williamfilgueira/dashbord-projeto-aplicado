import React, { useState, useEffect } from "react";

import { Container, GroupList } from "./styles";

import Group from "../Group";
import MyGroup from "../MyGroup";
import Scrollbars from "react-custom-scrollbars";

export default function Sidebar({
  toggleNewMemberModal,
  toggleRolesModal,
  toggleStatusModal,
  toggleTeamModal,
  isOpen,
  isDesktop,
  teams,
}) {
  return (
    <Container isOpen={isOpen} isDesktop={isDesktop}>
      <Scrollbars autoHeight autoHeightMax="100%">
        <GroupList>
          <MyGroup
            toggleNewMemberModal={toggleNewMemberModal}
            toggleRolesModal={toggleRolesModal}
            toggleStatusModal={toggleStatusModal}
            toggleTeamModal={toggleTeamModal}
            name="Meu grupo"
          />
          {teams.map((item) => (
            <Group key={item.id} name={item.nome} />
          ))}
        </GroupList>
      </Scrollbars>
    </Container>
  );
}
