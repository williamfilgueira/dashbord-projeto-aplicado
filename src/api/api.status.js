import { app } from "./index";

export function createStatus(emoji, name, description) {
  return app.post("/status", {
    emoji: emoji,
    nome: name,
    descricao: description
  });
}

export function getAllStatus() {
  return app.get("/status");
}

export function getStatusByName(name) {
  return app.get(`/status/${name}`);
}

export function modifyStatus(statusName,name, emoji,description) {
  return app.put(`/status/${statusName}`, {
    nome: name,
    emoji: emoji,
    descricao: description
  });
}


export function deleteStatus(name) {
  return app.delete(`/status/${name}`);
}
