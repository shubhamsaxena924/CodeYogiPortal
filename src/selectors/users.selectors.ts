import { createSelector } from "reselect";
import { userStateSelector } from "./app.selectors";

/* Method 1
export const userbyIdSelector = (state: AppState) => {
  const userState  = userStateSelector(state);
  return userState.byId; } 
*/

export const userByIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.byId
);

export const userIdsSelector = createSelector(
  [userStateSelector],
  (userState) => userState.userIds || []
);

export const usersSelector = createSelector(
  [userByIdSelector, userIdsSelector],
  (byId, userIds) => userIds.map((id) => byId[id])
);

export const usersQueryLoadingSelector = createSelector(
  [userStateSelector],
  (userState) => userState.loadingList
);

export const selectedUserIdSelector = createSelector(
  [userStateSelector],
  (userState) => userState.selectedId
);

export const selectedUserSelector = createSelector(
  [userByIdSelector, selectedUserIdSelector],
  (byId, selectedId) => byId[selectedId!]
);

export const selectedUserLoadingSelector = createSelector(
  [userStateSelector],
  (userState) => userState.loadingOne
);

export const selectedUserErrorSelector = createSelector(
  [userStateSelector],
  (userState) => userState.fetchOneError
);
