import React, { useState, useEffect } from "react";
import { FormAddMember } from "./styles";
import Input from "../../Common/Input";
import ButtonCommon from "../../Common/Button";
import BaseModal from "../BaseModal";
import { getTeamByName, getAllTeams, modifyTeam } from "../../../api/api.team";
import Select from "../../Common/Select";
import ButtonDelete from "../../Common/ButtonDelete";

export default function ModalEditTeam({
  isOpen,
  toggleModal,
  title,
  getSetUsers,
}) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [teamName, setTeamName] = useState("");
  const [teams, setTeams] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function getAll() {
    getAllTeams().then((res) => {
      setTeams(res.data);
    });
  }

  useEffect(() => {
    getAll();
  }, [isOpen]);

  useEffect(() => {
    getTeamByName(teamName).then((res) => {
      setName(res.data.nome);
      setDescription(res.data.descricao);
    });
  }, [teamName]);

  function handleSubmit(teamName, name, description) {
    modifyTeam(teamName, name, description)
      .then((res) => {
        setName("");
        setDescription("");
      })
      .finally(() => {
        getAll();
        toggleModal();
        getSetUsers();
      });
  }

  return (
    <BaseModal
      isOpen={isOpen}
      onBackgroundClick={toggleModal}
      onEscapeKeydown={toggleModal}
      close={toggleModal}
      title={title}
    >
      {isLoading ? (
        <> </>
      ) : (
        <FormAddMember>
          <Select
            title="Selecione uma equipe"
            value={teamName}
            onChange={(event) => setTeamName(event.target.value)}
            options={teams}
          />
          <Input
            required
            placeholder="Nome"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          <Input
            required
            placeholder="Descrição"
            onChange={(event) => setDescription(event.target.value)}
            value={description}
          />

          <ButtonCommon
            maincolor="blue"
            title="SALVAR"
            onClick={() => {
              handleSubmit(teamName, name, description);
            }}
          />
          {/* <ButtonDelete title="DELETAR" /> */}
        </FormAddMember>
      )}
    </BaseModal>
  );
}
