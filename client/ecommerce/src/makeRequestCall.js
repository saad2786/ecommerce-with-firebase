import axios from "axios";

export const makeRequestCall = axios.create({
  baseURL: import.meta.env.VITE_SERVER_DOMAIN,
});
