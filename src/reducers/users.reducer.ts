import { Reducer } from "redux";
import { AuthActions } from "../actions/auth.actions";
import { User } from "../models/User";
import { addOne, EntityState } from "./entity.reducers";

export interface UserState extends EntityState<User> {}

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
      // const user = action.payload as User;
      // return { ...state, byId: { ...state.byId, [user.id]: user } };
      return addOne(state, action.payload) as UserState;
    default:
      return state;
  }
};
