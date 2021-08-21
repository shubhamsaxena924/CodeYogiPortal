import { LoginRequest } from "../api/login.api";
import { User } from "../models/User";

//For avoiding spelling mistakes
export enum AuthActions {
  ME_REQUEST = "me/request",
  ME_LOGIN = "me/login",
  ME_FETCH = "me/fetch",
}

//action that user has been fetched and ready to store
export const meFetchAction = (u: User) => ({
  type: AuthActions.ME_FETCH,
  payload: u,
});

//action to request login
export const meLoginAction = (data: LoginRequest) => ({
  type: AuthActions.ME_LOGIN,
  payload: data,
});

//action to request currently logged in user object
export const meRequestAction = () => ({
  type: AuthActions.ME_REQUEST,
});
