import React from 'react';
import { StyledModal, Title, HeaderContainer, IconContainer } from './styles';
import { XCircle } from 'phosphor-react';



export default function BaseModal({ onBackgroundClick, isOpen, close, title, children, size }) {
  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={onBackgroundClick}
        size={size}
        /*onEscapeKeydown={toggleNewUserModal}*/>
        <IconContainer onClick={close}>
          <XCircle size={30} color='#fff' weight='bold' />
        </IconContainer>
        <Title>{title}</Title>
        {children}
      </StyledModal>
    </div>
  )


};



