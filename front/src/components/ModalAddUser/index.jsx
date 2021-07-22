import React from 'react';
import {  FormAddMember, Option, Select, Label, } from './styles';
import Input from '../Common/Input';
import ButtonCommon from '../Common/Button';
import Modal from '../Modal';


export default function ModalAddUser({toggleNewUserModal, isOpen}) {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onBackgroundClick={toggleNewUserModal}
        onEscapeKeydown={toggleNewUserModal}
        close={toggleNewUserModal}
        title='Adicionar membro'>
        <FormAddMember>
          <div>
            <Input placeholder='Nome' required/>
            <Input placeholder='Username' required/>
            <Input placeholder='Email'  type='email' required/>
            <Input placeholder='Senha' type='password' required/>
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
      </Modal>
    </div>
  )


};
