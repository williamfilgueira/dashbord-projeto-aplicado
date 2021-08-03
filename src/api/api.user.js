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

// export function modifyUser(
//   name,
//   nickname,
//   role,
//   username,
//   password,
//   team,
//   email,
//   birthdate
// ) {
//   const formData = new FormData();
//   const user = {
//     nome: name,
//     nickName: nickname,
//     papel: role,
//     userName: username,
//     password: password,
//     equipe: team,
//     status: "INDISPONIVEL",
//     email: email,
//     dtNascimento: birthdate,
//   };
//   const header = {
//     headers: {
//       "content-type": "multipart/form-data",
//     },
//   };
//   formData.append("usuario", user);
//   formData.append("file", Guest);
//   return app.put(`/usuario/editaPerfil`, formData, header);
// }

// export function deleteUser(username) {
//   return new Promise(async (resolve, reject) => {
//     return app
//       .delete(`/usuario/${username}`)
//       .then((response) => resolve(response))
//       .catch((error) => reject(error));
//   });
// }
