import React from "react";
import { Container,
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

import { SignOut, Gear } from "phosphor-react";

import AvatarImage from "../../assets/images/Avatar.png";
  



export default function Topbar({toggleUserConfigModal}) {
  return (
    <Container>
      <Input
        placeholder="Pesquise pelo login"
        icon="MagnifyingGlass"
        size="big"
        innerColor="white"
      />
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
              weight="bold"
              size={30}
            />
          </Icon>
          <Icon>
            <SignOut color="#FFF" weight="bold" size={30} />
          </Icon>
        </IconsContainer>
      </UserContainer>
    </Container>
  );
}
