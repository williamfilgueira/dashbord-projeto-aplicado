import { app } from "./index";

export function newSession(username, password) {
  return app.post("/login", { userName: username, password: password });
}
