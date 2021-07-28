import axios from "axios";
const app = axios.create({
  baseURL: "https://alterdata-pac6-api.herokuapp.com",
  headers: {
    "Content-Type": "application/json",
  },
});

app.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (erro) => {
    return Promise.reject(erro);
  }
);

export { app };
