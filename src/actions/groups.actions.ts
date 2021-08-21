import { Group } from "../models/Group";

export enum GroupActions {
  GROUPS_QUERY = "groups/query",
  GROUPS_FETCH = "groups/fetch",
  GROUP_QUERY_SINGLE = "group/query_single",
  GROUP_FETCH_SINGLE = "group/fetch_single",
  GROUP_FETCH_SINGLE_ERROR = "group/fetch_single_error",
}

//Action that query has been changed
export const groupsQueryAction = (query: string) => ({
  type: GroupActions.GROUPS_QUERY,
  // payload: query,
  payload: query,
});

//Action that groups have been fetched according to the query.
export const groupsFetchAction = (query: string, groups: Group[]) => ({
  type: GroupActions.GROUPS_FETCH,
  payload: { query, groups },
});

//Action to fetch a single group
export const groupQuerySingleAction = (groupId: number) => ({
  type: GroupActions.GROUP_QUERY_SINGLE,
  payload: groupId,
});

//Action that the single group has been fetched
export const groupFetchSingleAction = (group: Group) => ({
  type: GroupActions.GROUP_FETCH_SINGLE,
  payload: group,
});

//Action that some error has occured while fetching the group
export const groupFetchSingleErrorAction = (
  selectedId: number,
  message: string
) => ({
  type: GroupActions.GROUP_FETCH_SINGLE_ERROR,
  payload: { selectedId, message },
});
