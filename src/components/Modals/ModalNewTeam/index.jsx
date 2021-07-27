import React, { useState } from 'react';
import { FormAddMember } from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';


export default function ModalNewTeam({ isOpen, toggleModal, title }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  function handleSubmit(name, description) {
    console.log({
      name: name,
      description: description
    }
    );
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}>
      <FormAddMember>

        <Input required placeholder='Nome' onChange={(event) => setName(event.target.value)} />
        <Input required placeholder='Descrição' onChange={(event) => setDescription(event.target.value)} />

        <ButtonCommon
          maincolor='blue'
          title='CADASTRAR'
          onClick={() =>
            handleSubmit(name, description)
          } />
      </FormAddMember>
    </BaseModal>
  )


};
