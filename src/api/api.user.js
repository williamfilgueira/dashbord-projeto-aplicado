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
export async function changeUserToMyGroup(username) {
  const myUsername = localStorage.getItem("username");

  return app.put(`/usuario/editaPerfilN3/${myUsername}`, {
    userName: username,
  });
}

export async function changeMe(
  name,
  nickname,
  role,
  username,
  password,
  newEmail,
  rawPhoto
) {
  const myUsername = localStorage.getItem("username");
  const userChanges = {
    nome: name,
    nickName: nickname,
    papel: role,
    userName: username,
    password: password,
    email: newEmail,
  };
  const formData = new FormData();
  formData.append("file", rawPhoto);
  formData.append(
    "usuario",
    new Blob([JSON.stringify(userChanges)], {
      type: "application/json",
    })
  );

  return app.put(`/usuario/editaPerfilN1/${myUsername}`, formData);
}

export async function changeMeJSON(
  name,
  nickname,
  role,
  username,
  password,
  newEmail
) {
  const myUsername = localStorage.getItem("username");
  return app.put(`/usuario/editaPerfilN1b/${myUsername}`, {
    nome: name,
    nickName: nickname,
    papel: role,
    userName: username,
    password: password,
    email: newEmail,
  });
}

export async function editMembers(username, nickname, role, team) {
  return app.put(`/usuario/editaPerfilN2/${username}`, {
    nickName: nickname,
    papel: role,
    equipe: team,
    userName: username,
  });
}

export async function deleteMember(username) {
  return app.delete(`/usuario/${username}`);
}
