import React from 'react';
import { FormAddMember,ButtonDelete} from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';
import Select from '../../Common/Select';

export default function ModalEditMember({ isOpen, toggleModal, title }) {
  return (
    <div>
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}
       >
        <FormAddMember>
          <div>
            <Input placeholder='Username' />
          </div>
          <Select title='Selecione a papel:' options={[{ title: 'Bombeiro', value: 'A' }, { title: 'Merge', value: 'B' }]} />
          <Select title='Selecione o equipe:' options={[{ title: 'Pack-Contabilidade', value: 'A' }, { title: 'Pack-Financeiro', value: 'B' }]} />
          <ButtonCommon title='SALVAR' />
          <ButtonDelete>DELETAR MEMBRO</ButtonDelete>
        </FormAddMember>
      </BaseModal>
    </div>
  )
};
