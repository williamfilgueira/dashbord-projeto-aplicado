import { app } from "./index";

export async function createUser(name, email) {
  const username = localStorage.getItem("username");
  console.log(`/usuario/criaPerfil/${username}`, {
    nome: name,
    email: email,
  });
  return app.post(`/usuario/criaPerfil/${username}`, {
    nome: name,
    email: email,
  });
}

export async function getAllUsers() {
  return app.get("/usuario");
}

export async function getUserByUsername() {
  const username = localStorage.getItem("username");
  return app.get(`/usuario/${username}`);
}
