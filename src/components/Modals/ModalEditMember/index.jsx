import React from 'react';
import { FormAddMember,ButtonDelete, ContainerSelect} from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';
import Select from '../../Common/Select';

export default function ModalEditMember({ isOpen, toggleModal, title }) {
  return (
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}
        size='medium'
       >
        <FormAddMember>
          <div>
            <Input placeholder='Username' />
          </div>
          <ContainerSelect>
          <Select title='Selecione a papel:' options={[{ title: 'Bombeiro', value: 'A' }, { title: 'Merge', value: 'B' }]} />
          <Select title='Selecione o equipe:' options={[{ title: 'Pack-Contabilidade', value: 'A' }, { title: 'Pack-Financeiro', value: 'B' }]} />
          </ContainerSelect>
          <ButtonCommon maincolor='blue' title='SALVAR' />
          <ButtonDelete>DELETAR MEMBRO</ButtonDelete>
        </FormAddMember>
      </BaseModal>
  )
};
