import { app } from "./index";

export function createTeam(name, description) {
  return app.post("/equipe", {
    nome: name,
    descricao: description,
  });
}

export function getAllTeams() {
  return app.get("/equipe");
}

export function getTeamByName(name) {
  return app.get(`/equipe/${name}`);
}

export function modifyTeam(teamName, name,  description) {
  return app.put(`/equipe/${teamName}`, {
    nome: name,
    descricao: description,
  });
}

export function deleteTeam(name) {
  return app.delete(`/equipe/${name}`);
}
