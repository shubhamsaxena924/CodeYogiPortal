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
//Instead of doing like given above, do like given below. Create a separate selector and don' t nest '.' dots.

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
//Also instead of doing the above thing, we can use createSelector()  from reselect library, it will keep the states memorzed, if the parameters dont change.

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

export const groupByIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

export const groupsSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupByIdSelector],
  (query, queryMap, byId) => {
    const groupsIDs = queryMap[query] || [];
    const groups = groupsIDs.map((id) => byId[id]);
    return groups;
  }
);

export const groupQueryLoadingSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingQuery
);

export const groupLoadingSelector = createSelector(
  [groupQuerySelector, groupQueryLoadingSelector],
  (query, loadingMap) => loadingMap[query]
);
