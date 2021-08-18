import { Group } from "../models/Group";

export enum GroupActions {
  GROUPS_QUERY = "groups/query",
  GROUPS_FETCH = "groups/fetch",
}

export const groupsQueryAction = (query: string, loading: boolean) => ({
  type: GroupActions.GROUPS_QUERY,
  // payload: query,
  payload: { query, loading },
});

export const groupsFetchAction = (query: string, groups: Group[]) => ({
  type: GroupActions.GROUPS_FETCH,
  payload: { query, groups },
});
