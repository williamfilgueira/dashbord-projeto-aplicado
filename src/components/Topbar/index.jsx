import React, { useState, useEffect } from "react";
import HamburgerMenu from "react-hamburger-menu";
import MyUser from "../MyUser";
import { Container } from "./styles";
import Input from "../Common/Input";

import Logo from "../Common/Logo";

export default function Topbar({
  loggedUser,
  toggleUserConfigModal,
  hamburguerMenu,
  handleHamburguer,
  toggleSearchMode,
  getSetUsers,
}) {
  const { nome, status, url, userName } = loggedUser;
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
          mediaSize="searchBar"
          innerColor="white"
          onChange={toggleSearchMode}
        />
      )}
      {isDesktop && (
        <MyUser
          url={url}
          name={nome}
          username={userName}
          status={status}
          toggleUserConfigModal={toggleUserConfigModal}
          getSetUsers={getSetUsers}
        />
      )}
    </Container>
  );
}
