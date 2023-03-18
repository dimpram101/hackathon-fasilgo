import axios from "axios";

axios.defaults.withCredentials;

const api = axios.create({
  baseURL: "http://localhost:5000/"
})

export default api;