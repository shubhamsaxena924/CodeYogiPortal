import axios from "axios";
import { BASE_URL } from "./login.api";
import { tokenInterceptor, tokenValidityInterceptor } from "./api";

tokenInterceptor(); //Will add token to every request to the api automatically
tokenValidityInterceptor(); //will logout the user if the token is not valid

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite";
}

export interface GroupResponse {
  data: GroupsData;
  status: number;
  statusText: string;
}

export interface GroupsData {
  data: GroupResponseData[];
}

export interface GroupResponseData {
  id: number;
  name: string;
  is_private: boolean;
  is_academic: boolean;
  description: string;
  introductory_message?: string;
  group_image_url?: string;
  join_code: string;
  created_at: Date;
  updated_at: Date;
  chatCount: number;
  state: State | null;
  creator: Creator | null;
  issues: Issue[];
  invitedMembers: Creator[];
  participants: Creator[];
  advocatePage?: string;
}

export interface Creator {
  __type: Type;
  id: number;
  guid: null;
  first_name: string;
  middle_name: null | string;
  last_name: string;
  role: Role;
  status: Status;
  profile_pic_url: null | string;
  groupMemberStatus?: GroupMemberStatus;
}

export enum Type {
  GroupMember = "groupMember",
  Name = "name",
}

export enum GroupMemberStatus {
  InvitationAccepted = "invitation_accepted",
  Invited = "invited",
  RequestToJoinAccepted = "request_to_join_accepted",
}

export enum Role {
  Admin = "admin",
  Advocate = "advocate",
  Staff = "staff",
}

export enum Status {
  Claimed = "claimed",
  New = "new",
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

export interface State {
  id: number;
  title: string;
  state_code: string;
  created_at: Date;
  updated_at: Date;
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  return axios
    .get<GroupsData>(url, { params: data })
    .then((groupsData) => {
      return groupsData.data.data;
    });
};
