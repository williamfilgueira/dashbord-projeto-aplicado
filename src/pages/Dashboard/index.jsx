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
} from "./styles";

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

import { getAllUsers } from "../../api/api.user";
import theme from "../../global/theme";

export default function Dashboard() {
  const [newMemberModal, setNewMemberModal] = useState(false);
  const [rolesModal, setRolesModal] = useState(false);
  const [statusModal, setStatusModal] = useState(false);
  const [userConfigModal, setUserConfigModal] = useState(false);
  const [cardModal, setCardModal] = useState(false);
  const [teamModal, setTeamModal] = useState(false);
  const [hamburguerMenu, setHamburguerMenu] = useState(false);

  const history = useHistory();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   window.addEventListener("resize", updateMedia);
  //   getAllUsers()
  //     .then((res) => {
  //       setUsers(res.data);
  //     })
  //     .catch((err) => history.push("/login"))
  //     .finally(() => setLoading(false));
  //   return () => window.removeEventListener("resize", updateMedia);
  // }, []);

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

  function handleHamburguer() {
    setHamburguerMenu(!hamburguerMenu);
  }

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
              toggleNewMemberModal={toggleNewMemberModal}
              toggleRolesModal={toggleRolesModal}
              toggleStatusModal={toggleStatusModal}
              toggleTeamModal={toggleTeamModal}
              isOpen={hamburguerMenu}
              isDesktop={isDesktop}
            />
            <Topbar
              toggleUserConfigModal={toggleUserConfigModal}
              hamburguerMenu={hamburguerMenu}
              handleHamburguer={handleHamburguer}
            />
            <CardSection isOpen={hamburguerMenu} isDesktop={isDesktop}>
              <Scrollbars autoHeightMax="100%" autoHeight>
                <CardContainer>
                  {users.map((item) => {
                    return (
                      <Card data={item} toggleCardModal={toggleCardModal} />
                    );
                  })}
                </CardContainer>
              </Scrollbars>
            </CardSection>
            {/* <Chatbar toggleUserConfigModal={toggleUserConfigModal} /> */}
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
    </ModalProvider>
  );
}
