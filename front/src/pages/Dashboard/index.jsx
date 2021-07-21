import React, {useState} from "react";
import { Scrollbars } from 'react-custom-scrollbars';
import { ModalProvider } from 'styled-react-modal'

import { Container, CardSection, CardContainer } from "./styles";

import Topbar from "../../components/Topbar";
import Sidebar from "../../components/Sidebar";
import Chatbar from "../../components/Chatbar";
import Card from "../../components/Card";
import ModalEditProfile from "../../components/ModalEditProfile"; 


export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false)

  function toggleNewUserModal(e) {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <ModalProvider>
      <Sidebar toggleNewUserModal={toggleNewUserModal}/>
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
     
        <ModalEditProfile toggleNewUserModal={toggleNewUserModal} isOpen={isOpen} />
    
      </CardSection>
      <Chatbar />
      </ModalProvider>
    </Container>
  );
}
