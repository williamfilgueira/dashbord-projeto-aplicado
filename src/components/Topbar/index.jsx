import React, { useState, useEffect } from "react";
import { SignOut, Gear } from "phosphor-react";
import HamburgerMenu from "react-hamburger-menu";

import {
  Container,
  StatusContainer,
  UserContainer,
  InfoContainer,
  IconsContainer,
  Icon,
  Name,
  MyAccountContainer,
} from "./styles";
import Input from "../Common/Input";
import StatusIndicator from "../Common/StatusIndicator";
import Avatar from "../Common/Avatar";

import Logo from "../Common/Logo";

export default function Topbar({
  loggedUser,
  toggleUserConfigModal,
  hamburguerMenu,
  handleHamburguer,
}) {
  // console.log(loggedUser);
  const { nome, status, papel, url } = loggedUser;
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <Container>
      {isDesktop ? (
        <Logo />
      ) : (
        <HamburgerMenu
          isOpen={hamburguerMenu}
          menuClicked={handleHamburguer}
          width={37}
          height={25}
          strokeWidth={3}
          rotate={0}
          color="#fff"
          borderRadius={0}
          animationDuration={0.5}
        />
      )}
      {!hamburguerMenu && (
        <Input
          placeholder="Pesquise pelo login"
          icon="MagnifyingGlass"
          size="big"
          mediaSize="regular"
          innerColor="white"
        />
      )}
      {isDesktop && (
        <UserContainer>
          <MyAccountContainer>
            <Avatar src={url} small={true} circle />
            <InfoContainer>
              <Name>{nome}</Name>
              <StatusContainer>
                <StatusIndicator status={status} color="white" />
              </StatusContainer>
            </InfoContainer>
          </MyAccountContainer>
          <IconsContainer>
            <Icon>
              <Gear
                onClick={toggleUserConfigModal}
                color="#FFF"
                weight="bold"
                size={30}
              />
            </Icon>
            <Icon>
              <SignOut color="#FFF" weight="bold" size={30} />
            </Icon>
          </IconsContainer>
        </UserContainer>
      )}
    </Container>
  );
}
