import React, { useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { ModalProvider } from "styled-react-modal";

import { Container, CardSection, CardContainer } from "./styles";

import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Chatbar from "../../components/Chatbar";
import Card from "../../components/Card";

import ModalNewMember from "../../components/Modals/ModalNewMember";
import ModalRoles from "../../components/Modals/ModalRoles";
import ModalStatus from "../../components/Modals/ModalStatus";
import ModalUserConfig from "../../components/Modals/ModalUserConfig";
import ModalEditMember from "../../components/Modals/ModalEditMember";
import ModalNewTeam from "../../components/Modals/ModalNewTeam";

export default function Dashboard() {
  const [newMemberModal, setNewMemberModal] = useState(false);
  const [rolesModal, setRolesModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [userConfigModal, setUserConfigModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const [teamModal, setTeamModal] = useState(false);

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

  return (
    <ModalProvider>
      <Container>
        <Sidebar
          toggleNewMemberModal={toggleNewMemberModal}
          toggleRolesModal={toggleRolesModal}
          toggleStatusModal={toggleStatusModal}
          toggleTeamModal={toggleTeamModal}
        />
        <CardSection>
          <Topbar />
          <Scrollbars autoHeightMax="100vh" autoHeight>
            <Card toggleCardModal={toggleCardModal} />
            <Card toggleCardModal={toggleCardModal} />
            <Card toggleCardModal={toggleCardModal} />
            <Card toggleCardModal={toggleCardModal} />
            <Card toggleCardModal={toggleCardModal} />
            <Card toggleCardModal={toggleCardModal} />
            <Card toggleCardModal={toggleCardModal} />
            <Card toggleCardModal={toggleCardModal} />
          </Scrollbars>
        </CardSection>
        <Chatbar toggleUserConfigModal={toggleUserConfigModal} />
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
    </ModalProvider>
  );
}
