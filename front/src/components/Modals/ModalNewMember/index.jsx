import React from 'react';
import {  FormAddMember } from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';
import Select from '../../Common/Select';


export default function ModalNewMember({isOpen, toggleModal, title}) {
  return (
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}>
        <FormAddMember>
          <div>
            <Input placeholder='Nome' required />
            <Input placeholder='Username' required/>
            <Input placeholder='Email' type='email' required/>
            <Input placeholder='Senha'  type='password' minlength='6' required/>
            <Input placeholder='Data de nascimento' required />
          </div>
          <div>
          <Select title='Selecione a equipe:' options={[{ title: 'Pack-Contabilidade', value: 'A' }, { title: 'Pack-Financeiro', value: 'B' }]} />
          </div>
          <ButtonCommon title='CADASTRAR' />
        </FormAddMember>
      </BaseModal>
  )


};
