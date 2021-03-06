import React, { useState} from "react";

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
import {
  IdentificationBadge,
  Smiley,
  User,
  UsersFour,
  Pencil,
  Plus,
} from "phosphor-react";
import MyUser from "../MyUser";

export default function Sidebar({
  loggedUser,
  data,
  isOpen,
  isDesktop,
  teams,
  getSetUsers,
}) {
  const {
    toggleNewMemberModal,
    toggleRolesModal,
    toggleStatusModal,
    toggleTeamModal,
    toggleEditRoleModal,
    toggleEditStatusModal,
    toggleEditTeamModal,
    toggleUserConfigModal,
  } = data;

  const [activeMenu, setActiveMenu] = useState("user");
  const { nome, status, url, equipe, userName } = loggedUser;

  return (
    <Container isOpen={isOpen} isDesktop={isDesktop}>
      {!isDesktop && (
        <MyUser
          url={url}
          name={nome}
          status={status}
          username={userName}
          toggleUserConfigModal={toggleUserConfigModal}
          getSetUsers={getSetUsers}
          mobile
        />
      )}
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
              data={[
                {
                  id: 1,
                  title: "Novo membro",
                  toggle: toggleNewMemberModal,
                  icon: <Plus color="#fff" weight="bold" size={16} />,
                },
              ]}
              name={equipe}
            />
          ) : (
            <></>
          )}
          {activeMenu === "roles" ? (
            <MyGroup
              data={[
                {
                  id: 1,
                  title: "Novo papel",
                  toggle: toggleRolesModal,
                  icon: <Plus color="#fff" weight="bold" size={16} />,
                },
                {
                  id: 2,
                  title: "Editar papel",
                  toggle: toggleEditRoleModal,
                  icon: <Pencil color="#fff" weight="bold" size={16} />,
                },
              ]}
              name={equipe}
            />
          ) : (
            <></>
          )}
          {activeMenu === "status" ? (
            <MyGroup
              data={[
                {
                  id: 1,
                  title: "Novo status",
                  toggle: toggleStatusModal,
                  icon: <Plus color="#fff" weight="bold" size={16} />,
                },
                {
                  id: 2,
                  title: "Editar status",
                  toggle: toggleEditStatusModal,
                  icon: <Pencil color="#fff" weight="bold" size={16} />,
                },
              ]}
              name={equipe}
            />
          ) : (
            <></>
          )}
          {activeMenu === "team" ? (
            <MyGroup
              data={[
                {
                  id: 1,
                  title: "Nova equipe",
                  toggle: toggleTeamModal,
                  icon: <Plus color="#fff" weight="bold" size={16} />,
                },
                {
                  id: 2,
                  title: "Editar equipe",
                  toggle: toggleEditTeamModal,
                  icon: <Pencil color="#fff" weight="bold" size={16} />,
                },
              ]}
              name={equipe}
            />
          ) : (
            <></>
          )}

          {teams
            .filter((team) => team.nome !== equipe)
            .sort((teamA, teamB) => teamA.nome.localeCompare(teamB.nome))
            .map((item) => (
              <Group
                key={item.id}
                groupName={item.nome}
                getSetUsers={getSetUsers}
              />
            ))}
        </GroupList>
      </Scrollbars>
    </Container>
  );
}
