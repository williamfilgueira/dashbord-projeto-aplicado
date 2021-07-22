import React from 'react';
import {  FormAddMember, Option, Select, Label, } from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';


export default function ModalStatus({isOpen, toggleModal, title}) {
  return (
    <div>
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}>
        <FormAddMember>
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
      </BaseModal>
    </div>
  )


};
