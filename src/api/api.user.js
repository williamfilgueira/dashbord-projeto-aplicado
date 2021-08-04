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
  formData.append("usuario", JSON.stringify(userChanges));
  formData.append("file", rawPhoto);

  console.log(rawPhoto);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  return app.put(`/usuario/editaPerfilN1/${myUsername}`, formData, config);
}
