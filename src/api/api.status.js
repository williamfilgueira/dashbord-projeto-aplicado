import { app } from "./index";

export function createStatus(emoji, name) {
  return app.post("/status", {
    emoji: emoji,
    nome: name
  });
}

export function getAllStatus() {
  return app.get("/status");
}

export function getStatusByName(name) {
  return app.get(`/status/${name}`);
}

export function modifyStatus(name, description) {
  return app.put(`/status/${name}`, {
    nome: name,
    descricao: description,
  });
}

export function deleteStatus(name) {
  return app.delete(`/status/${name}`);
}
