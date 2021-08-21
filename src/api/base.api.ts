import axios, { AxiosRequestConfig } from "axios";
import { CANCEL } from "redux-saga";
import { logout } from "./login.api";

export const BASE_URL = "https://api-dev.domecompass.com";
export const LOGIN_TOKEN_KEY = "auth_token";

export const tokenInterceptor = () =>
  axios.interceptors.request.use((config) => {
    const token = localStorage.getItem(LOGIN_TOKEN_KEY);
    if (!token) {
      return config;
    }
    //Here check whether the request is not for third party API
    return { ...config, headers: { ...config.headers, Authorization: token } };
  });

export const tokenValidityInterceptor = () => {
  axios.interceptors.response.use(undefined, (error) => {
    if (error.response?.data?.code === 9101) {
      logout();
    }
    return Promise.reject(error);
  });
};

//Use this get for cancellable API call promises; for non-cancellable use axios.get() directly;
export const get = <T>(url: string, config?: AxiosRequestConfig) => {
  const source = axios.CancelToken.source();

  const response = axios.get<T>(url, { ...config, cancelToken: source.token });
  response[CANCEL] = source.cancel;
  return response;
};
