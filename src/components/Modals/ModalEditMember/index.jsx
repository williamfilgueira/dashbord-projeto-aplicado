import React , { useEffect, useState, useParams} from 'react';
import { FormAddMember,ButtonDelete, ContainerSelect, ContainerInput} from './styles';
import Input from '../../Common/Input';
import ButtonCommon from '../../Common/Button';
import BaseModal from '../BaseModal';
import Select from '../../Common/Select';
import {getAllTeams} from '../../../api/api.team';
import {getAllRoles} from '../../../api/api.role';
import { getUserByUsername } from '../../../api/api.user';

export default function ModalEditMember({ isOpen, toggleModal, title }) {
  
  const [teams, setTeams] = useState([]);
  const [teamId, setTeamId] = useState(0);
  const [roles, setRoles] = useState([]);
  const [roleId, setRoleId] = useState(0);

  useEffect(() => {
    getAllTeams().then((res) => setTeams(res.data))
    getAllRoles().then((res) => setRoles(res.data))
  }, [])
  
  return (
      <BaseModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        close={toggleModal}
        title={title}
        size='medium'
        mediaSize='medium'
        
       >
        <FormAddMember>
          <ContainerInput>
            <Input placeholder='Username' />
          </ContainerInput>
          <ContainerSelect>
          <Select 
          title='Selecione o papel:'
          value={roleId}
          onChange={(event) => setRoleId(event.value.target)}
          options={roles}
          />
          <Select 
          title='Selecione a equipe:' 
          value={teamId}
          onChange={(event) => setTeamId(event.target.value)}
          options={teams}/>
          </ContainerSelect>
          <ButtonCommon maincolor='blue' title='SALVAR' />
          <ButtonDelete>DELETAR MEMBRO</ButtonDelete>
        </FormAddMember>
      </BaseModal>
  )
};
