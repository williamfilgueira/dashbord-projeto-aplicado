import React from "react";
import { StyledModal, Title, IconContainer } from "./styles";
import { XCircle } from "phosphor-react";
import theme from "../../../global/theme";

export default function BaseModal({
  onBackgroundClick,
  isOpen,
  close,
  title,
  children,
  size,
}) {
  return (
    <div>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={onBackgroundClick}
        size={size}
        /*onEscapeKeydown={toggleNewUserModal}*/
      >
        <IconContainer onClick={close}>
          <XCircle
            size={35}
            color={theme.colors.alterdataBlue}
            weight="regular"
          />
        </IconContainer>
        <Title>{title}</Title>
        {children}
      </StyledModal>
    </div>
  );
}
