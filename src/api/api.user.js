import { app } from "./index";

export async function createUser(name, email) {
  const myUsername = localStorage.getItem("username");

  return app.post(`/usuario/criaPerfil/${myUsername}`, {
    nome: name,
    email: email,
  });
}

export async function getAllUsers() {
  return app.get("/usuario");
}

export async function getUserByUsername() {
  const myUsername = localStorage.getItem("username");
  return app.get(`/usuario/${myUsername}`);
}

export async function changeUserStatus(status, username) {
  const myUsername = localStorage.getItem("username");

  return app.put(`/usuario/editaPerfilN2/${myUsername}`, {
    userName: username,
    status: status,
  });
}
export async function changeMyGroup(groupName) {
  const myUsername = localStorage.getItem("username");

  return app.put(`/usuario/editaPerfilN2/${myUsername}`, {
    userName: myUsername,
    equipe: groupName,
  });
}
