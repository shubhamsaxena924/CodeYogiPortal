import axios from "axios";
import { User } from "../models/User";
import { BASE_URL, LOGIN_TOKEN_KEY } from "./base.api";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponseData {
  token: string;
  user: User;
  data: { is_2fa_enabled: boolean };
}

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  console.log(data);

  return axios.post<LoginResponseData>(url, data).then((response) => {
    console.log(response);
    localStorage.setItem(LOGIN_TOKEN_KEY, response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(LOGIN_TOKEN_KEY);
  // Add code to invalidate user token from the server
  window.location.href = "/login";
};
