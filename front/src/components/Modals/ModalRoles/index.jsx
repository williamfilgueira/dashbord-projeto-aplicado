import React from 'react';
import { FormAddMember, ColorPicker, InputColor, InputText, Label, ColorPickerContainer } from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';
import { useState } from 'react';


export default function ModalRoles({ isOpen, toggleModal, title }) {
  
  const [color, updateColor] = useState("#FFFFFF");

  const handleInput = e => {
    updateColor(e.target.value);
  };

  return (
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}>
        <FormAddMember>
          <Input placeholder='Papel'  required/>
          <ColorPickerContainer>
          <Label>Escolha uma cor: </Label>
          <ColorPicker onChange={handleInput}>
          <InputColor type="color" value={color}/>
          <InputText type="text" value={color}/>
          </ColorPicker>
          </ColorPickerContainer>
          <ButtonCommon title='CADASTRAR' />
        </FormAddMember>
      </BaseModal>
  )

};
