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

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  axios.get(url, { params: data }).then((groupsData) => {
    console.log(groupsData);
  });
};
