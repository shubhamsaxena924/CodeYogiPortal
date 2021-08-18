import { createSelector } from "reselect";
import { authStateSelector } from "./app.selectors";
import { userbyIdSelector } from "./users.selectors";

//method 1
// export const meSelector = (state: AppState) =>
//   state.auth.id !== undefined ? state.users.byId[state.auth.id] : undefined;

//method 2
/* 
export const authIdSelector = (state: AppState) => authStateSelector(state).id;
export const meSelector = (state: AppState) => userbyIdSelector(state)[authIdSelector(state)!];
 */

//method 3 - best
export const authIdSelector = createSelector(
  [authStateSelector],
  (authState) => authState.id
);

export const meSelector = createSelector(
  [userbyIdSelector, authIdSelector],
  (byId, meId) => {
    console.log(byId[meId!]);
    return byId[meId!];
  }
);
