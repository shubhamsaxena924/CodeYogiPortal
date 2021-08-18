import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";

/* Method 1
export const userbyIdSelector = (state: AppState) => {
  const userState  = userStateSelector(state);
  return userState.byId; } 
*/

export const userbyIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.byId
);
