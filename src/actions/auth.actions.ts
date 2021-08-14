import { User } from "../models/User";

//For avoiding spelling mistakes
export enum AuthActions {
  ME_FETCH = "me/fetch",
  ME_LOGIN = "me/login",
}

export const meFetchAction = (u: User) => ({
  type: AuthActions.ME_FETCH,
  payload: u,
});

export const meLoginAction = (u: User) => ({
  type: AuthActions.ME_LOGIN,
  payload: u,
});
