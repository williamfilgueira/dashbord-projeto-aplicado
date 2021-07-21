import React from 'react';
import { StyledModal, Title, FormAddMember, Option, Select, Label, HeaderContainer,IconContainer } from './styles';
import { useState } from 'react';
import Input from '../Common/Input';
import ButtonCommon from '../Common/Button';
import { XCircle } from 'phosphor-react';


export default function ModalEditProfile() {

  const [isOpen, setIsOpen] = useState(false)

  function toggleModal(e) {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      <button onClick={toggleModal}>Click me</button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}>
        <FormAddMember>
          <HeaderContainer>
            <Title>Adicionar membro</Title>
            <IconContainer onClick={toggleModal}>
              <XCircle size={30} color='#fff' weight='bold' />
            </IconContainer>
          </HeaderContainer>
          <div>
            <Input placeholder='Nome' />
            <Input placeholder='Username' />
            <Input placeholder='Senha' />
          </div>
          <div>
            <Label for="GET-name">Selecione a equipe: </Label>
            <Select name="select">
              <Option disabled selected></Option>
              <Option value="Pack-Contabilidade">Pack-Contabilidade</Option>
              <Option value="Shop">Shop</Option>
              <Option value="Pack-Financeiro">Pack-Financeiro</Option>
            </Select>
          </div>
          <ButtonCommon title='CADASTRAR' />
          {/* <ButtonCommon title='FECHAR' onClick={toggleModal} /> */}
        </FormAddMember>
      </StyledModal>
    </div>
  )


};
