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

export function modifyStatus(name, emoji) {
  return app.put(`/status`, {
    nome: name,
    emoji: emoji,
  });
}

export function deleteStatus(name) {
  return app.delete(`/status/${name}`);
}
