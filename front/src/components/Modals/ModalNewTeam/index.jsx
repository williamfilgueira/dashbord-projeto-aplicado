import React from 'react';
import {  FormAddMember } from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';


export default function ModalNewTeam({isOpen, toggleModal, title}) {
  return (
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}>
        <FormAddMember>
      
            <Input placeholder='Nome' />
            <Input placeholder='Descrição' />
 
          <ButtonCommon title='CADASTRAR' />
        </FormAddMember>
      </BaseModal>
   
  )


};
