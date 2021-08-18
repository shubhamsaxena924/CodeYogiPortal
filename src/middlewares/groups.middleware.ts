import {
  groupsFetchAction,
  groupsQueryAction,
} from "../actions/groups.actions";
import { fetchGroups, GroupRequest } from "../api/groups.api";
import { groupQueryLoadingSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroupsMidWare = (request: GroupRequest) => {
  const queryLoading = groupQueryLoadingSelector(store.getState());
  const query = request.query;
  const loading = queryLoading[query!];
  store.dispatch(groupsQueryAction(query!));
  if (loading) {
    return;
  }

  return fetchGroups(request).then((groups) => {
    store.dispatch(groupsFetchAction(query!, groups));
    return groups;
  });
};
