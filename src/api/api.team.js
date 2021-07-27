import { app } from "./index";

export function createTeam(name, description) {
  return new Promise(async (resolve, reject) => {
    return app
      .post("/equipe", {
        nome: name,
        descricao: description,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function getAllTeams() {
  return new Promise(async (resolve, reject) => {
    return app
      .get("/equipe")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function getTeamByName(name) {
  return new Promise(async (resolve, reject) => {
    return app
      .get(`/equipe/${name}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function modifyTeam(name, description) {
  return new Promise(async (resolve, reject) => {
    return app
      .put(`/equipe/${name}`, {
        nome: name,
        descricao: description,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function deleteTeam(name) {
  return new Promise(async (resolve, reject) => {
    return app
      .delete(`/equipe/${name}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
