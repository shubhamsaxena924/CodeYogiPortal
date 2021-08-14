import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { authReducer } from "./reducers/auth.reducers";
import { groupReducer } from "./reducers/groups.reducer";
import { userReducer } from "./reducers/users.reducer";

/*
export interface AppState {
  // groups: { [id: number]: Group }; //will store groups
  // groupQuery: string; //will store query searched
  // groupQueryMap: { [query: string]: number[] };
  //will store ids of groups corresponsding to searched query
  // Instead of three groups here, create a GroupState
  groups: GroupState;
  users: UserState;
  auth: AuthState;
  isSidebarOpen: boolean;
}
*/
//To keep definiton and actual state in sync (no spelling mistakes)
export type AppState = ReturnType<typeof store.getState>;

/*
const initialState: AppState = {
  // groups: {},
  // groupQuery: "",
  // groupQueryMap: {},
  isSidebarOpen: true,
  auth: {
    id: 0,
  },
  groups: {
    byId: {},
    query: "",
    queryMap: {},
  },
  users: {
    byId: {},
  },
};
*/

//we define reducer but it is called by redux itself, because we dont have access to currentState to pass it to reducer.
//Manual Way
/*
  const reducer: Reducer<AppState, AnyAction> = (
    state = initialState,
    action: AnyAction
  ) => {
    const newState = {
      auth: authReducer(state.auth, action),
      users: userReducer(state.users, action),
      groups: groupReducer(state.groups, action),
      isSidebarOpen: false,
    };

    if (
      newState.auth === state.auth &&
      newState.users === state.users &&
      newState.groups === state.groups &&
      newState.isSidebarOpen === state.isSidebarOpen
    )
      return state;
    return newState;
  };
*/

//This will combine the initial states and reducer functions as well.
const reducer = combineReducers({
  users: userReducer,
  groups: groupReducer,
  auth: authReducer,
});

export const store = createStore(
  reducer,
  //the following part is only for development not for production
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
