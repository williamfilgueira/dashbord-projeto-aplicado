import React from 'react';
import { StyledModal, Title, FormAddMember, Option, Select, Label, HeaderContainer,IconContainer } from './styles';
import Input from '../Common/Input';
import ButtonCommon from '../Common/Button';
import { XCircle } from 'phosphor-react';


export default function ModalEditProfile({toggleNewUserModal, isOpen}) {
  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleNewUserModal}
        onEscapeKeydown={toggleNewUserModal}>
        <FormAddMember>
          <HeaderContainer>
            <Title>Adicionar membro</Title>
            <IconContainer onClick={toggleNewUserModal}>
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
        </FormAddMember>
      </StyledModal>
    </div>
  )


};
