import axios, { CancelTokenSource } from "axios";
import { User } from "../models/User";
import { BASE_URL, get } from "./base.api";
import { Issue } from "./groups.api";

export interface UsersData {
  data: User[];
}

export interface Meta {
  "2fa"?: The2Fa;
  onboarding_feed?: boolean;
  onboarding_events?: boolean;
  onboarding_groups?: boolean;
  caucuses_status?: boolean;
}

export interface The2Fa {
  totp_code: boolean;
  email_code: boolean;
  phone_code: boolean;
  backup_code: boolean;
  is_number_verified?: boolean;
}

export interface Person {
  id: number;
  party: string;
  job_type?: string;
  chamber?: string;
  created_at: Date;
  updated_at: Date;
  committees: PersonCommittees;
  issues: Issue[];
  legMember?: LegDetails;
  legOffice?: LegDetails;
}

export interface PersonCommittees {
  caucuses: Caucus[];
  committees: any;
}

export interface Caucus {
  id: number;
  parent_id?: string;
  chamber_id: number;
  role: string;
  state_code: string;
  category?: string;
  display_name: string;
  urls: any;
  created_at: Date;
  updated_at: Date;
  __type: string;
  memberRole: string;
}

export interface LegDetails {
  id: number;
  person_id: number;
  chamber_id: number;
  state_code: string;
  role: string;
  seat_status: string;
  district_code: string;
  district_title: string;
  created_at: Date;
  updated_at: Date;
}

export interface RecentEducation {
  __type: string;
  id: number;
  user_id: number;
  course_name_short: string;
  course_name: string;
  school_name: string;
  majors?: any;
  minors?: any;
  start_year: string;
  end_year: string;
  source?: string;
  created_at: Date;
  updated_at: Date;
}

export interface RecentOccupation {
  id: number;
  user_id: number;
  title: string;
  company: string;
  start_year: string;
  end_year: string;
  source?: any;
  source_id?: any;
  source_updated_at?: Date;
  created_at: Date;
  updated_at: Date;
  committee: any;
  legMember: LegDetails;
  legOffice: LegDetails;
}

export const fetchUsers = (data?: any, tokenSource?: CancelTokenSource) => {
  const url = BASE_URL + "/people";
  return get<UsersData>(url, {
    params: data,
    cancelToken: tokenSource?.token,
  });
};

export const fetchOneUser = (userId: number) => {
  const url = BASE_URL + "/people/" + userId;
  return axios.get<UsersData>(url);
};
