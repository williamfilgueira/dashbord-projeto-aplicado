import React from 'react';
import { FormAddMember, Option, Select, Label, } from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';
import Avatar from '../../Common/Avatar';
import avatar from '../../../assets/images/Avatar.png'

export default function ModalUserConfig({ isOpen, toggleModal, title }) {
  return (
    <div>
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}
        size='big'>
        <FormAddMember>
          <Avatar  src={avatar}/>
          <div>
            <Input placeholder='Nome' />
            <Input placeholder='Username' />
            <Input placeholder='Email' type='email' />
            <Input placeholder='Senha' type='password' />
            <Input placeholder='Nova senha' type='password' />
            <Input placeholder='Função'/>
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
          <ButtonCommon title='SALVAR' />
        </FormAddMember>
      </BaseModal>
    </div>
  )


};
