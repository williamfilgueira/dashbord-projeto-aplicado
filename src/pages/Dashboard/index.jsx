import React, { useState, useEffect } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { ModalProvider } from "styled-react-modal";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";

import {
  Container,
  CardSection,
  CardContainer,
  LoaderContainer,
  ScrollbarContainer,
} from "./styles";

import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";

import ModalNewMember from "../../components/Modals/ModalNewMember";
import ModalRoles from "../../components/Modals/ModalRoles";
import ModalStatus from "../../components/Modals/ModalStatus";
import ModalUserConfig from "../../components/Modals/ModalUserConfig";
import ModalEditMember from "../../components/Modals/ModalEditMember";
import ModalNewTeam from "../../components/Modals/ModalNewTeam";

import { getAllUsers, getUserByUsername } from "../../api/api.user";
import { getAllTeams } from "../../api/api.team";
import theme from "../../global/theme";
import ModalEditRole from "../../components/Modals/ModalEditRole";
import ModalEditStatus from "../../components/Modals/ModalEditStatus";
import ModalEditTeam from "../../components/Modals/ModalEditTeam";
import { getAllRoles } from "../../api/api.role";

export default function Dashboard() {
  const [newMemberModal, setNewMemberModal] = useState(false);
  const [rolesModal, setRolesModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [userConfigModal, setUserConfigModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const [teamModal, setTeamModal] = useState(false);
  const [editRoleModal, setEditRoleModal] = useState(false);
  const [editStatusModal, setEditStatusModal] = useState(false);
  const [editTeamModal, setEditTeamModal] = useState(false);
  const [hamburguerMenu, setHamburguerMenu] = useState(false);

  const history = useHistory();

  const [loggedUser, setLoggedUser] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    window.addEventListener("resize", updateMedia);
    Promise.all([
      getUserByUsername(),
      getAllTeams(),
      getAllUsers(),
      getAllRoles(),
    ])
      .then((res) => {
        setLoggedUser(res[0].data);
        localStorage.setItem("loggedUser", res[0].data);

        const rolesRes = res[3].data;
        const usersRes = res[2].data;

        console.log(rolesRes, usersRes);

        const userWithColor = usersRes.map((user) => {
          rolesRes.map((role) => {
            if (user.papel === role.nome) {
              user.cor = role.cor;
            }
            return role;
          });
          return user;
        });

        setTeams(res[1].data);

        setAllUsers(userWithColor);
      })
      .catch(() => history.push("/login"))
      .finally(() => setLoading(false));

    return () => window.removeEventListener("resize", updateMedia);
  }, []);

  function toggleNewMemberModal(e) {
    setNewMemberModal(!newMemberModal);
  }
  function toggleRolesModal(e) {
    setRolesModal(!rolesModal);
  }
  function toggleStatusModal(e) {
    setStatusModal(!statusModal);
  }
  function toggleUserConfigModal(e) {
    setUserConfigModal(!userConfigModal);
  }
  function toggleCardModal(e) {
    setCardModal(!cardModal);
  }

  function toggleTeamModal(e) {
    setTeamModal(!teamModal);
  }

  function toggleEditRoleModal(e) {
    setEditRoleModal(!editRoleModal);
  }

  function toggleEditStatusModal(e) {
    setEditStatusModal(!editStatusModal);
  }

  function toggleEditTeamModal(e) {
    setEditTeamModal(!editTeamModal);
  }

  function handleHamburguer() {
    setHamburguerMenu(!hamburguerMenu);
  }

  const modalFunctions = {
    toggleNewMemberModal,
    toggleRolesModal,
    toggleStatusModal,
    toggleTeamModal,
    toggleEditRoleModal,
    toggleEditStatusModal,
    toggleEditTeamModal,
  };

  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  return (
    <ModalProvider>
      <Container>
        {loading ? (
          <LoaderContainer>
            <Loader
              type="ThreeDots"
              color={theme.colors.alterdataBlue}
              height={230}
              width={230}
            />
          </LoaderContainer>
        ) : (
          <>
            <Sidebar
              data={modalFunctions}
              isOpen={hamburguerMenu}
              isDesktop={isDesktop}
              teams={teams}
              loggedUser={loggedUser}
            />
            <Topbar
              loggedUser={loggedUser}
              toggleUserConfigModal={toggleUserConfigModal}
              hamburguerMenu={hamburguerMenu}
              handleHamburguer={handleHamburguer}
            />
            <ScrollbarContainer isOpen={hamburguerMenu} isDesktop={isDesktop}>
              <Scrollbars autoHeight autoHeightMax="100%">
                <CardSection>
                  <CardContainer>
                    {allUsers
                      .filter((item) => item.equipe === loggedUser.equipe)
                      .map((item, index) => {
                        return (
                          <Card
                            key={index}
                            data={item}
                            toggleCardModal={toggleCardModal}
                          />
                        );
                      })}
                  </CardContainer>
                </CardSection>
              </Scrollbars>
            </ScrollbarContainer>
          </>
        )}
      </Container>

      <ModalNewMember
        toggleModal={toggleNewMemberModal}
        isOpen={newMemberModal}
        title="Novo membro"
      />
      <ModalRoles
        toggleModal={toggleRolesModal}
        isOpen={rolesModal}
        title="Novo papel"
      />
      <ModalStatus
        toggleModal={toggleStatusModal}
        isOpen={statusModal}
        title="Novo status"
      />
      <ModalUserConfig
        toggleModal={toggleUserConfigModal}
        isOpen={userConfigModal}
        title="Configurações do usuário"
      />
      <ModalEditMember
        toggleModal={toggleCardModal}
        isOpen={cardModal}
        title="Editar perfil"
      />
      <ModalNewTeam
        toggleModal={toggleTeamModal}
        isOpen={teamModal}
        title="Nova equipe"
      />
      <ModalEditRole
        toggleModal={toggleEditRoleModal}
        isOpen={editRoleModal}
        title="Editar papel"
      />

      <ModalEditStatus
        toggleModal={toggleEditStatusModal}
        isOpen={editStatusModal}
        title="Editar status"
      />

      <ModalEditTeam
        toggleModal={toggleEditTeamModal}
        isOpen={editTeamModal}
        title="Editar equipe"
      />
    </ModalProvider>
  );
}
