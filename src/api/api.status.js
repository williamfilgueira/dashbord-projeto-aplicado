import { app } from "./index";

export function createStatus(name, description) {
  return new Promise(async (resolve, reject) => {
    return app
      .post("/status", {
        nome: name,
        descricao: description,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function getAllStatus() {
  return new Promise(async (resolve, reject) => {
    return app
      .get("/status")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function getStatusByName(name) {
  return new Promise(async (resolve, reject) => {
    return app
      .get(`/status/${name}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function modifyStatus(name, description) {
  return new Promise(async (resolve, reject) => {
    return app
      .put(`/status/${name}`, {
        nome: name,
        descricao: description,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function deleteStatus(name) {
  return new Promise(async (resolve, reject) => {
    return app
      .delete(`/status/${name}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
