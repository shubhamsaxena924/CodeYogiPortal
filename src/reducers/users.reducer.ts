import { Reducer } from "redux";
import { AuthActions } from "../actions/auth.actions";
import { User } from "../models/User";
import { addOne, EntityState, initialEntityState } from "./entity.reducers";

export interface UserState extends EntityState<User> {}

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
    default:
      return state;
  }
};
