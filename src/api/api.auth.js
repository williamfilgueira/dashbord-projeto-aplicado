import { app } from "./index";

export function newSession(username, password) {
  return new Promise(async (resolve, reject) => {
    return app
      .post("/login", { userName: username, password: password })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
}
