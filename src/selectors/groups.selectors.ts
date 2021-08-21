import { createSelector } from "reselect";
import { groupStateSelector } from "./app.selectors";

/*
export const groupQuerySelector = (state: AppState) => state.groups.query;

export const groupsSelector = (state: AppState) => {
  const groupsIDs = state.groups.queryMap[state.groups.query] || [];
  const groups = groupsIDs.map((id) => state.groups.byId[id]);
  return groups;
};
*/

//vs
//Instead of doing like given above, do like given below. Create a separate selector and don't nest '.' dots.

/*
export const groupQuerySelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.query;
};

export const groupQueryMapSelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.queryMap;
};

export const groupByIdSelector = (state: AppState) => {
  const groupState = groupStateSelector(state);
  return groupState.byId;
};

export const groupsSelector = (state: AppState) => {
  const query = groupQuerySelector(state);
  const byId = groupByIdSelector(state);
  const groupsIDs = groupQueryMapSelector(state)[query] || [];
  const groups = groupsIDs.map((id) => byId[id]);
  return groups;
};

*/

//vs
//Also instead of doing the above thing, we can use createSelector()  from reselect library, it will keep the states memoized, if the parameters dont change.

//returns the query searched (string)
export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

//returns the object which has each group mapped to each its id
export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

//returns the object which has array of ids mapped to each query stored so far
export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupQueryIdsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector],
  (query, queryMap) => queryMap[query] || []
);

//returns groups according to query searched
export const groupsSelector = createSelector(
  [groupQueryIdsSelector, groupByIdSelector],
  (groupIds, byId) => {
    const groups = groupIds.map((id) => byId[id]);
    return groups;
  }
);

//returns boolean if the queries group list is being loading
export const groupQueryLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingList
);

// export const groupLoadingSelector = createSelector(
//   [groupQuerySelector, groupQueryLoadingSelector],
//   (query, loadingMap) => loadingMap[query]
// );

//returns the id of the selected group
export const selectedGroupIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.selectedId
);

//returns the group object of the selected id
export const selectedGroupSelector = createSelector(
  [groupByIdSelector, selectedGroupIdSelector],
  (byId, selectedId) => selectedId && byId[selectedId]
);

//returns the error occurred while fetching one group
export const selectedGroupErrorSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.fetchOneError
);

//returns boolean if the single group requested is being loaded
export const selectedGroupLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingOne
);
