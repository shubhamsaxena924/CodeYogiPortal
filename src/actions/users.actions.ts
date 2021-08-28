import { User } from "../models/User";

export enum UserActions {
  USERS_QUERY = "users/query",
  USERS_FETCH = "users/fetch",
  USER_QUERY_SINGLE = "user/query_single",
  USER_FETCH_SINGLE = "user/fetch_single",
  USER_FETCH_SINGLE_ERROR = "user/fetch_single_error",
}

export const usersQueryAction = () => ({
  type: UserActions.USERS_QUERY,
});

export const usersFetchAction = (users: User[]) => ({
  type: UserActions.USERS_FETCH,
  payload: { users },
});

export const userQuerySingleAction = (userId: number) => ({
  type: UserActions.USER_QUERY_SINGLE,
  payload: userId,
});

export const userFetchSingleAction = (user: User) => ({
  type: UserActions.USER_FETCH_SINGLE,
  payload: user,
});

export const userFetchSingleErrorAction = (
  selectedId: number,
  message: string
) => ({
  type: UserActions.USER_FETCH_SINGLE_ERROR,
  payload: { selectedId, message },
});
