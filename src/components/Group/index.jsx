import React from "react";

import { SignIn } from "phosphor-react";
import { GroupName, GroupContainer } from "./styles";

import { changeMyGroup } from "../../api/api.user";

export default function Group({ groupName, getSetUsers }) {
  function handleChangeMyGroup(getSetUsers) {
    changeMyGroup(groupName).finally(() => getSetUsers());
  }

  return (
    <GroupContainer
      onClick={() => {
        handleChangeMyGroup(getSetUsers);
      }}
    >
      <GroupName>{groupName}</GroupName>
      <SignIn color="#FFF" weight="bold" size={22} />
    </GroupContainer>
  );
}
