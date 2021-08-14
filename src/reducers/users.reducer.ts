import { Reducer } from "redux";
import { AuthActions } from "../actions/auth.actions";
import { User } from "../models/User";

export interface UserState {
  byId: {
    [id: number]: User;
  };
}

const initialState = {
  byId: {},
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthActions.ME_FETCH:
    case AuthActions.ME_LOGIN:
      const user = action.payload as User;
      return { ...state, byId: { ...state.byId, [user.id]: user } };
    default:
      return state;
  }
};
