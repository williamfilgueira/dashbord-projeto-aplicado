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

export function modifyRole(roleName, name, description, color) {
  return app.put(`/papel/${roleName}`, {
    nome: name,
    descricao: description,
    cor: color,
  });
}

export function deleteRole(name) {
  return app.delete(`/papel/${name}`);
}
