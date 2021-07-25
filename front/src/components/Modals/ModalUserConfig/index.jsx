import React from 'react';
import { FormAddMember, ContainerUpload, Upload, IconContainer} from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';
import Avatar from '../../Common/Avatar';
import avatar from '../../../assets/images/Avatar.png';
import Select from '../../Common/Select';
import { Camera } from 'phosphor-react';

export default function ModalUserConfig({ isOpen, toggleModal, title }) {
  return (
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}
        size='big'>
        <FormAddMember>
          <div>
            <ContainerUpload>
            <Avatar src={avatar} />
              <IconContainer >
                <label for="file-input">
                <Camera size={24} color='#03569C' weight='bold'/>
                </label>
                <Upload id="file-input" type="file" />
              </IconContainer>
            </ContainerUpload>    
          </div>
          <div>
            <Input placeholder='Nome' />
            <Input placeholder='Username' />
            <Input placeholder='Email' type='email' />
            <Input placeholder='Senha' type='password' />
            <Input placeholder='Nova senha' type='password' />
            <Input placeholder='Data de nascimento' />
          </div>
          <Select title='Selecione a papel:' options={[{ title: 'Bombeiro', value: 'A' }, { title: 'Merge', value: 'B' }]} />
          <Select title='Selecione o equipe:' options={[{ title: 'Pack-Contabilidade', value: 'A' }, { title: 'Pack-Financeiro', value: 'B' }]} />
          <ButtonCommon title='SALVAR' />
        </FormAddMember>
      </BaseModal>
  )
};
