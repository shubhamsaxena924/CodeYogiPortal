import axios, { CancelTokenSource } from "axios";

import {
  BASE_URL,
  get,
  tokenInterceptor,
  tokenValidityInterceptor,
} from "./base.api";
import { Group } from "../models/Group";

tokenInterceptor(); //Will add token to every request to the api automatically
tokenValidityInterceptor(); //will logout the user if the token is not valid

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups";
}

export interface GroupResponse {
  data: GroupsData;
  status: number;
  statusText: string;
}

export interface GroupsData {
  data: Group[];
}

export enum GroupMemberStatus {
  InvitationAccepted = "invitation_accepted",
  Invited = "invited",
  RequestToJoinAccepted = "request_to_join_accepted",
}

export interface Issue {
  id: number;
  code: string;
  title_one_word: string;
  title_short: string;
  title: string;
  summary: null | string;
  created_at: Date;
  updated_at: Date;
}

export const fetchGroups = (
  data: GroupRequest,
  tokenSource?: CancelTokenSource
) => {
  const url = BASE_URL + "/groups";
  return get<GroupsData>(url, {
    params: data,
    cancelToken: tokenSource?.token,
  });
  /*
  ** Dont call then otherwise it will return a new promise, which will not have the cancel key.
  .then((groupsData) => {
    return groupsData.data.data;
  });
  */
};

export const fetchOneGroup = (groupId: number) => {
  const url = BASE_URL + "/groups/" + groupId;
  return axios.get<GroupsData>(url);
};
