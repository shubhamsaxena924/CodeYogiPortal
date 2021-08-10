import axios from "axios";
import { LOGIN_TOKEN_KEY, logout } from "./login.api";
export const tokenInterceptor = () =>
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(LOGIN_TOKEN_KEY);
    if (!token) {
      return config;
    }
    //Here check whether the request is not for third party api
    return { ...config, headers: { ...config.headers, Authorization: token } };
  });

export const tokenValidityInterceptor = () => {
  axios.interceptors.response.use(undefined, (error) => {
    if (error.response.data.code === 9101) {
      logout();
    }
    return Promise.reject(error);
  });
};
