import axios from "axios";

export const LOGIN_TOKEN_KEY = "login_token";

interface LoginRequest {
  email: string;
  password: string;
}

interface LoginResponseData {
  token: string;
  user: User;
  data: { is_2fa_enabled: boolean };
}

interface User {
  __type: string;
  id: number;
  guid: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: string;
  status: string;
  profile_pic_url: string;
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

export const BASE_URL = "https://api-dev.domecompass.com";

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  console.log(data);

  return axios.post<LoginResponseData>(url, data).then((response) => {
    console.log(response);
    localStorage.setItem(LOGIN_TOKEN_KEY, response.data.token);
    return response.data.user;
  });
};

export const logout = () => {
  localStorage.removeItem(LOGIN_TOKEN_KEY);
  // Add code to invalidate user token from the server
  window.location.href = "/login";
};
