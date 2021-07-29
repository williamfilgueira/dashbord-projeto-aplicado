import React, { useState, useEffect } from "react";
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
import HamburgerMenu from "react-hamburger-menu";
import Input from "../Common/Input";
import StatusIndicator from "../Common/StatusIndicator";
import Avatar from "../Common/Avatar";
import { SignOut, Gear } from "phosphor-react";

import AvatarImage from "../../assets/images/Avatar.png";

import Logo from "../Common/Logo";

export default function Topbar({ toggleUserConfigModal }) {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1000);
  const [hamburguer, setHamburguer] = useState(false);


  function handleHamburguer() {
    setHamburguer(!hamburguer);
  }

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
          isOpen={hamburguer}
          menuClicked={handleHamburguer}
          width={32}
          height={24}
          strokeWidth={3}
          rotate={0}
          color="#fff"
          borderRadius={0}
          animationDuration={0.5}
        />
      )}

      <Input
        placeholder="Pesquise pelo login"
        icon="MagnifyingGlass"
        size="big"
        innerColor="white"
      />
      {isDesktop && (
        <UserContainer>
          <MyAccountContainer>
            <Avatar src={AvatarImage} small={true} />
            <InfoContainer>
              <Name>Mateus</Name>
              <StatusContainer>
                <StatusIndicator color="white" />
              </StatusContainer>
            </InfoContainer>
          </MyAccountContainer>
          <IconsContainer>
            <Icon>
              <Gear
                onClick={toggleUserConfigModal}
                color="#FFF"
                weight='bold'
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
