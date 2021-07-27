import { app } from "./index";

export function createRole(name, description) {
  return new Promise(async (resolve, reject) => {
    return app
      .post("/papel", {
        nome: name,
        descricao: description,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function getAllRoles() {
  return new Promise(async (resolve, reject) => {
    return app
      .get("/papel")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function getRoleByName(name) {
  return new Promise(async (resolve, reject) => {
    return app
      .get(`/papel/${name}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function modifyRole(name, description) {
  return new Promise(async (resolve, reject) => {
    return app
      .put(`/papel/${name}`, {
        nome: name,
        descricao: description,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function deleteRole(name) {
  return new Promise(async (resolve, reject) => {
    return app
      .delete(`/papel/${name}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
