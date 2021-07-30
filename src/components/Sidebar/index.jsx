import React, { useState, useEffect } from "react";

import {
  Container,
  GroupList,
  MenuToggleContainer,
  UserToggle,
  RoleToggle,
  StatusToggle,
  TeamToggle,
  ToggleDescription,
} from "./styles";

import Group from "../Group";
import MyGroup from "../MyGroup";
import Scrollbars from "react-custom-scrollbars";
import { IdentificationBadge, Smiley, User, UsersFour } from "phosphor-react";

export default function Sidebar({
  toggleNewMemberModal,
  toggleRolesModal,
  toggleStatusModal,
  toggleTeamModal,
  isOpen,
  isDesktop,
  teams,
}) {
  const [activeMenu, setActiveMenu] = useState("user");
  return (
    <Container isOpen={isOpen} isDesktop={isDesktop}>
      <MenuToggleContainer>
        <UserToggle
          activeMenu={activeMenu}
          onClick={() => {
            setActiveMenu("user");
          }}
        >
          <User size={48} color="#fff" />
          <ToggleDescription>Usuário</ToggleDescription>
        </UserToggle>

        <RoleToggle
          activeMenu={activeMenu}
          onClick={() => {
            setActiveMenu("roles");
          }}
        >
          <IdentificationBadge size={48} color="#fff" />
          <ToggleDescription>Papéis</ToggleDescription>
        </RoleToggle>

        <StatusToggle
          activeMenu={activeMenu}
          onClick={() => {
            setActiveMenu("status");
          }}
        >
          <Smiley size={48} color="#fff" />
          <ToggleDescription>Status</ToggleDescription>
        </StatusToggle>

        <TeamToggle
          activeMenu={activeMenu}
          onClick={() => {
            setActiveMenu("team");
          }}
        >
          <UsersFour size={48} color="#fff" />
          <ToggleDescription>Equipe</ToggleDescription>
        </TeamToggle>
      </MenuToggleContainer>
      <Scrollbars autoHeight autoHeightMax="100%">
        <GroupList>
          {activeMenu === "user" ? (
            <MyGroup
              toggleNewMemberModal={toggleNewMemberModal}
              toggleRolesModal={toggleRolesModal}
              toggleStatusModal={toggleStatusModal}
              toggleTeamModal={toggleTeamModal}
              name="Meu grupo"
            />
          ) : (
            <></>
          )}
          {activeMenu === "roles" ? (
            <MyGroup
              toggleNewMemberModal={toggleNewMemberModal}
              toggleRolesModal={toggleRolesModal}
              toggleStatusModal={toggleStatusModal}
              toggleTeamModal={toggleTeamModal}
              name="Meu grupo"
            />
          ) : (
            <></>
          )}
          {activeMenu === "status" ? (
            <MyGroup
              toggleNewMemberModal={toggleNewMemberModal}
              toggleRolesModal={toggleRolesModal}
              toggleStatusModal={toggleStatusModal}
              toggleTeamModal={toggleTeamModal}
              name="Meu grupo"
            />
          ) : (
            <></>
          )}
          {activeMenu === "team" ? (
            <MyGroup
              toggleNewMemberModal={toggleNewMemberModal}
              toggleRolesModal={toggleRolesModal}
              toggleStatusModal={toggleStatusModal}
              toggleTeamModal={toggleTeamModal}
              name="Meu grupo"
            />
          ) : (
            <></>
          )}

          {teams.map((item) => (
            <Group key={item.id} name={item.nome} />
          ))}
        </GroupList>
      </Scrollbars>
    </Container>
  );
}
