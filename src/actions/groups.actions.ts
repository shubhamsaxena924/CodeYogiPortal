import { Group } from "../models/Group";

export enum GroupActions {
  GROUPS_QUERY = "groups/query",
  GROUPS_FETCH = "groups/fetch",
}

export const groupsQueryAction = (query: string) => ({
  type: GroupActions.GROUPS_QUERY,
  payload: query,
});

export const groupsFetchAction = (query: string, groups: Group[]) => ({
  type: GroupActions.GROUPS_FETCH,
  payload: { query, groups },
});
