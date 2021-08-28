import { AnyAction } from "redux";
import { call, delay, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  UserActions,
  userFetchSingleAction,
  userFetchSingleErrorAction,
  usersFetchAction,
} from "../actions/users.actions";
import {
  fetchUsers as fetchUsersAPI,
  fetchOneUser as fetchOneUserAPI,
} from "../api/users.api";

export function* fetchUsers(): Generator<any> {
  yield delay(1000);
  const usersRes: any = yield call(fetchUsersAPI);
  yield put(usersFetchAction(usersRes.data.data));
}

export function* fetchOneUser(action: AnyAction): Generator<any> {
  try {
    const user: any = yield call(fetchOneUserAPI, action.payload);
    yield put(userFetchSingleAction(user.data.data));
  } catch (e) {
    const error = e.response.data?.message || "Some Error Occurred";
    yield put(userFetchSingleErrorAction(action.payload, error));
  }
}

export function* listenUserQueryActions() {
  yield takeLatest(UserActions.USERS_QUERY, fetchUsers);
  yield takeEvery(UserActions.USER_QUERY_SINGLE, fetchOneUser);
}
