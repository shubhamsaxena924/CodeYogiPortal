import {
  GroupActions,
  groupFetchSingleAction,
  groupFetchSingleErrorAction,
  groupsFetchAction,
} from "../actions/groups.actions";
import {
  fetchGroups as fetchGroupsAPI,
  fetchOneGroup as fetchOneGroupAPI,
} from "../api/groups.api";
import { call, put, takeEvery, takeLatest, delay } from "redux-saga/effects";
import { AnyAction } from "redux";

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(500);

  const groupRes: any = yield call(fetchGroupsAPI, {
    query: action.payload,
    status: "all-groups",
  });

  yield put(groupsFetchAction(action.payload, groupRes.data.data));
}

export function* fetchOneGroup(action: AnyAction): Generator<any> {
  try {
    const groupRes: any = yield call(fetchOneGroupAPI, action.payload);

    yield put(groupFetchSingleAction(groupRes.data.data));
  } catch (e) {
    const error: string = e.response.data?.message || "Some Error Occurred";
    yield put(groupFetchSingleErrorAction(action.payload, error));
  }
}

export function* listenGroupQueryChangeAction() {
  yield takeLatest(GroupActions.GROUPS_QUERY, fetchGroups);
  yield takeEvery(GroupActions.GROUP_QUERY_SINGLE, fetchOneGroup);
}
