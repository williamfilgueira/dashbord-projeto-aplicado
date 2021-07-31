import { app } from "./index";

export function createStatus(name, description, emoji) {
  return app.post("/status", {
    nome: name,
    descricao: description,
    emoji: emoji,
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
