import { GroupMemberStatus } from "../api/groups.api";

export interface User {
  __type: string;
  id: number;
  guid: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
  status: string;
  profile_pic_url: string;
  groupMemberStatus?: GroupMemberStatus;
  email: string;
  bio: string;
  legal_name: string;
  nick_name: string;
  job_type: string;
  phone_number: string;
  alternate_phone_number: number;
  gender: string;
  birth_year: number;
  birth_month: number;
  birth_date: number;
  death_year: number;
  death_month: number;
  death_date: number;
  urls: any[];
  last_invited_to_platform_at: Date;
  education: any;
  hometown: string;
  state_code: number;
  home_state_code: number;
  meta: Request;
  is_2fa_enabled: boolean;
  default_2fa_type: any;
  created_at: Date;
  updated_at: Date;
  is_zoom_connected: boolean;
  person: any;
  educations: any[];
  occupations: any[];
  blockedUsers: any[];
  memberToAdvocatePages: any[];
  ownerToAdvocatePages: any[];
  academic: any;
  followedAcademics: any[];
}
