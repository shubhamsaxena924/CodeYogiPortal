import axios, { Canceler } from "axios";
import {
  groupsFetchAction,
  groupsQueryAction,
} from "../actions/groups.actions";
import { fetchGroups, GroupRequest } from "../api/groups.api";
import { store } from "../store";

let canceler: Canceler | undefined;

export const fetchGroupsMidWare = (request: GroupRequest) => {
  // const queryLoading = groupQueryLoadingSelector(store.getState());
  const query = request.query;
  store.dispatch(groupsQueryAction(query!));
  // if (loading) {
  //   return;
  // } //Not needed, as we are cancelling the previous request already

  canceler && canceler();

  const { cancel, token } = axios.CancelToken.source();
  canceler = cancel;

  return fetchGroups(request, { cancel, token })
    .then((groups) => {
      store.dispatch(groupsFetchAction(query!, groups.data.data)); //Updated as we need to use new get function()
      canceler = undefined;
      return groups;
    })
    .catch((error) => console.log(error));
};
