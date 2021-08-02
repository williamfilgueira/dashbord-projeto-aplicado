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
  const formData = new FormData();
  const user = {
    nome: name,
    nickName: nickname,
    papel: role,
    userName: username,
    password: password,
    equipe: team,
    status: "INDISPONIVEL",
    email: email,
    dtNascimento: birthdate,
  };
  formData.append("usuario", user);
  console.log(user);
  const header = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  return app.post("/usuario/create", formData, header);
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
