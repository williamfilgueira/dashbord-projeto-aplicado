import React, { useEffect, useState, useParams } from "react";
import {
  FormAddMember,
  ButtonDelete,
  ContainerSelect,
  ContainerInput,
} from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import Select from "../../Common/Select";
import { getAllTeams } from "../../../api/api.team";
import { getAllRoles } from "../../../api/api.role";
import { deleteMember, editMembers } from "../../../api/api.user";

export default function ModalEditMember({
  isOpen,
  toggleModal,
  title,
  editMember,
  getSetUsers,
}) {
  const { nickName, userName, papel, equipe } = editMember;
  console.log(editMember);
  const [teams, setTeams] = useState([]);
  /*const [teamId, setTeamId] = useState(0);*/
  const [roles, setRoles] = useState([]);
  /*const [roleName, setRoleName] = useState('');*/
  const [nickname, setNickname] = useState("");
  const [role, setRole] = useState("");
  const [team, setTeam] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    getAllTeams().then((res) => setTeams(res.data));
    getAllRoles()
      .then((res) => setRoles(res.data))
      .finally(() => {
        setNickname(nickName);
        setUsername(userName);
        setRole(papel);
        setTeam(equipe);
      });
  }, [nickName, userName, papel, equipe]);

  function handleSubmit(username, nickname, role, team) {
    editMembers(username, nickname, role, team).finally(() => {
      toggleModal({ nickName: "", userName: "", papel: "", equipe: "" });
      getSetUsers();
    });
  }

  function handleDelete(username) {
    deleteMember(username).then(() => alert("Usuário removido com sucesso!"));
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
      size="medium"
      mediaSize="medium"
    >
      <FormAddMember>
        <ContainerInput>
          <Input
            placeholder="Nickname"
            value={nickname}
            onChange={(event) => setNickname(event.target.value)}
          />
        </ContainerInput>
        <ContainerSelect>
          <Select
            title="Selecione o papel:"
            onChange={(event) => setRole(event.target.value)}
            selected={papel}
            alue={role}
            options={roles}
          />
          <Select
            title="Selecione a equipe:"
            selected={equipe}
            onChange={(event) => setTeam(event.target.value)}
            value={team}
            options={teams}
          />
        </ContainerSelect>
        <ButtonCommon
          maincolor="blue"
          title="SALVAR"
          onClick={() => handleSubmit(username, nickname, role, team)}
        />
        <ButtonDelete onClick={() => handleDelete(username)}>
          DELETAR MEMBRO
        </ButtonDelete>
      </FormAddMember>
    </BaseModal>
  );
}
