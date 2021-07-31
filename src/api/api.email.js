import { app } from "./index";

export function sendEmail(username) {
  return app.put(`/usuario/resetSenha/${username}`);
}
