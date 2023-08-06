import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-ru4u.onrender.com",
  // baseURL: "http://localhost:3333",
});
