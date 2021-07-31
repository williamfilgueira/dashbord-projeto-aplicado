import { app } from "./index";

export function createRole(name, description, color) {
  return app.post("/papel", {
    nome: name,
    descricao: description,
    color: color,
  });
}

export function getAllRoles() {
  return app.get("/papel");
}

export function getRoleByName(name) {
  return app.get(`/papel/${name}`);
}

export function modifyRole(name, description) {
  return app.put(`/papel/${name}`, {
    nome: name,
    descricao: description,
  });
}

export function deleteRole(name) {
  return app.delete(`/papel/${name}`);
}
