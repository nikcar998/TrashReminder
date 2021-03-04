import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api";

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("TR_token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

const responseBody = (response) => response.data;

const requests = {
  get: (url) => axios.get(url).then(responseBody),
  post: (url, body) => axios.post(url, body).then(responseBody),
  put: (url, body) => axios.put(url, body).then(responseBody),
  delete: (url) => axios.delete(url).then(responseBody),
};

const TrashPicking = {
  list: () => requests.get("/garbage"),
  show: (id) => requests.get(`/garbage/${id}`),
  create: (req) => requests.post(`/garbage`, req),
  update: (id, req) => requests.put(`/garbage/${id}`, req),
  delete: (id) => requests.delete(`/garbage/${id}`),
};

const User = {
  login: (req) => requests.post(`/login`, req),
  register: (req) => requests.post(`/register`, req),
  logout: () => requests.get(`/logout`),
};

const agent = {
  TrashPicking,
  User,
};

export default agent;
