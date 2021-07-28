import React from 'react';
import { FormAddMember, ColorPicker, InputColor, InputText, Label, ColorPickerContainer } from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';
import { useState } from 'react';


export default function ModalRoles({ isOpen, toggleModal, title }) {
  
  const [color, setColor] = useState("#03569C");

  const handleInput = e => {
    setColor(e.target.value);
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
          <InputColor type="color" value={color} onChange={(event) => setColor(event.target.value)}/>
          <InputText type="text" value={color} onChange={(event) => setColor(event.target.value)}/>
          </ColorPicker>
          </ColorPickerContainer>
          <ButtonCommon maincolor='blue' title='CADASTRAR' />
        </FormAddMember>
      </BaseModal>
  )

};
