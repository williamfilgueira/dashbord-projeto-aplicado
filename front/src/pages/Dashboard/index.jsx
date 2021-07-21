import React from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { ModalProvider } from 'styled-react-modal'

import { Container, CardSection, CardContainer } from "./styles";

import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Chatbar from "../../components/Chatbar";
import Card from "../../components/Card";
import ModalEditProfile from "../../components/ModalEditProfile"; 


export default function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <CardSection>
        <Topbar />
    {/* <Scrollbars autoHeightMax="100vh" autoHeight>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          </Scrollbars>   */}
     
      <ModalProvider>
        <ModalEditProfile />
      </ModalProvider>
    
      </CardSection>
      <Chatbar />
    </Container>
  );
}
