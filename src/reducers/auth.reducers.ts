import { Reducer } from "redux";
import { AuthActions } from "../actions/auth.actions";

//We will store all the data about users in UserState, here we will only store the id of the logged in user and we will get the data of logged in user of UserState.
export interface AuthState {
  id?: number;
}

const initialState = {};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case AuthActions.ME_LOGIN:
    case AuthActions.ME_FETCH:
      const userId = action.payload.id as number;
      return { ...state, id: userId };
    default:
      return state;
  }
};
