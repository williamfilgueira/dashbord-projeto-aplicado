import React from "react";

import { GroupContainer, GroupName } from "./styles";

import GroupAddAction from "../GroupAddAction";

export default function MyGroup({ name, data }) {
  return (
    <GroupContainer>
      <GroupName>{name}</GroupName>
      {data.map((item) => (
        <GroupAddAction
          key={item.id}
          title={item.title}
          icon={item.icon}
          onClick={item.toggle}
        />
      ))}
    </GroupContainer>
  );
}
