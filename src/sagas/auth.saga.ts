import { AnyAction } from "redux";
import { all, call, put, takeLatest } from "redux-saga/effects";
import { AuthActions, meFetchAction } from "../actions/auth.actions";
import { login } from "../api/login.api";
import { me } from "../api/me.api";
import { User } from "../models/User";

export function* loginUser(action: AnyAction): Generator<any> {
  const user = yield call(login, action.payload);
  yield put(meFetchAction(user as User));
}

export function* fetchMe(): Generator<any> {
  console.log("Called fetchme");
  const user = yield call(me);
  yield put(meFetchAction(user as User));
}

export function* listenLoginRequestActions() {
  yield all([
    takeLatest(AuthActions.ME_REQUEST, fetchMe),
    takeLatest(AuthActions.ME_LOGIN, loginUser),
  ]);
}
