import axios from "axios";
import { User } from "../models/User";
import {
  BASE_URL,
  tokenInterceptor,
  tokenValidityInterceptor,
} from "./base.api";

tokenInterceptor(); //Will add token to every request to the api automatically
tokenValidityInterceptor(); //will logout the user if the token is not valid

interface MeResponse {
  data: User;
}

export const me = () => {
  const url = BASE_URL + "/me";
  return axios.get<MeResponse>(url).then((response) => response.data.data);
};
