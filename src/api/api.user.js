import { app } from "./index";

export function createUser(
  name,
  nickname,
  role,
  username,
  password,
  team,
  email,
  birthdate
) {
  return new Promise(async (resolve, reject) => {
    return app
      .post("/usuario/create", {
        nome: name,
        nickName: nickname,
        papel: role,
        userName: username,
        password: password,
        equipe: team,
        status: "INDISPONIVEL",
        email: email,
        dtNascimento: birthdate,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function getAllUsers() {
  return new Promise(async (resolve, reject) => {
    return app
      .get("/usuario")
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}

export function getUserByUsername() {
  const username = localStorage.getItem("username");
  return new Promise(async (resolve, reject) => {
    return app
      .get(`/usuario/${username}`)
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
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
