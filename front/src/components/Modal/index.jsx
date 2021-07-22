import React from 'react';
import { StyledModal, Title, HeaderContainer,IconContainer } from './styles';
import { XCircle } from 'phosphor-react';


export default function Modal({onBackgroundClick, isOpen, close, title, children}) {
  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={onBackgroundClick}
        /*onEscapeKeydown={toggleNewUserModal}*/>
          <HeaderContainer>
            <Title>{title}</Title>
            <IconContainer onClick={close}>
              <XCircle size={30} color='#fff' weight='bold' />
            </IconContainer>
          </HeaderContainer>
          {children}
      </StyledModal>
    </div>
  )


};
