import {
  groupsFetchAction,
  groupsQueryAction,
} from "../actions/groups.actions";
import { fetchGroups, GroupRequest } from "../api/groups.api";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroupsMidWare = (request: GroupRequest) => {
  const queryMap = groupQueryMapSelector(store.getState());
  const query = request.query;
  const groupIds = queryMap[query!];
  store.dispatch(groupsQueryAction(query!, !groupIds));
  if (groupIds) {
    return;
  }

  return fetchGroups(request).then((groups) => {
    store.dispatch(groupsFetchAction(query!, groups));
    return groups;
  });
};
