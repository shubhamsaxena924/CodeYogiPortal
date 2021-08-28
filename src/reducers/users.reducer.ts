import { Reducer } from "redux";
import { AuthActions } from "../actions/auth.actions";
import { UserActions } from "../actions/users.actions";
import { User } from "../models/User";
import {
  addMany,
  addOne,
  EntityState,
  getEntityIds,
  initialEntityState,
  setFetchOneError,
  setSelectedId,
} from "./entity.reducers";

export interface UserState extends EntityState<User> {
  userIds?: number[];
}

const initialState = {
  ...initialEntityState,
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthActions.ME_FETCH:
      // const user = action.payload as User;
      // return { ...state, byId: { ...state.byId, [user.id]: user } };
      return addOne(state, action.payload) as UserState;
    case UserActions.USERS_QUERY:
      return { ...state, loadingList: true };
    case UserActions.USERS_FETCH:
      const users = action.payload.users as User[];
      const userIds = getEntityIds(users);
      const newState = addMany(state, users) as UserState;
      return { ...newState, loadingList: false, userIds: userIds };
    case UserActions.USER_QUERY_SINGLE:
      return setSelectedId(state, action.payload) as UserState;
    case UserActions.USER_FETCH_SINGLE:
      return addOne(state, action.payload, false) as UserState;
    case UserActions.USER_FETCH_SINGLE_ERROR:
      const { selectedId, message } = action.payload;
      return setFetchOneError(state, selectedId, message) as UserState;
    default:
      return state;
  }
};
