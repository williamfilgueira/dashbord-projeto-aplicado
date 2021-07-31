import { app } from "./index";

export async function createUser(
  name,
  nickname,
  role,
  username,
  password,
  team,
  email,
  birthdate
) {
  return app.post("/usuario/create", {
    nome: name,
    nickName: nickname,
    papel: role,
    userName: username,
    password: password,
    equipe: team,
    status: "INDISPONIVEL",
    email: email,
    dtNascimento: birthdate,
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
//   return new Promise(async (resolve, reject) => {
//     return app
//       .put(`/usuario/${username}`, {
//         nome: name,
//         nickName: nickname,
//         papel: role,
//         useName: username,
//         password: password,
//         equipe: team,
//         status: "INDISPONIVEL",
//         email: email,
//         dtNascimento: birthdate,
//       })
//       .then((response) => resolve(response))
//       .catch((error) => reject(error));
//   });
// }

// export function deleteUser(username) {
//   return new Promise(async (resolve, reject) => {
//     return app
//       .delete(`/usuario/${username}`)
//       .then((response) => resolve(response))
//       .catch((error) => reject(error));
//   });
// }
