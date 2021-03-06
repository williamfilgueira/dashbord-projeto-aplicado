import React from "react";
import { StyledModal, Title, IconContainer,ButtonIcon} from "./styles";

export default function BaseModal({
  onBackgroundClick,
  isOpen,
  close,
  title,
  children,
  size,
  mediaSize
}){

  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={onBackgroundClick}
        size={size}
        mediaSize={mediaSize}
        /*onEscapeKeydown={toggleNewUserModal}*/
      >
        <IconContainer onClick={close}>
          <ButtonIcon>
           X
            </ButtonIcon>
          
        </IconContainer>
        <Title>{title}</Title>
        {children}
      </StyledModal>
    </div>
  );
}
