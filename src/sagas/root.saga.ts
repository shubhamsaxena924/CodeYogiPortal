import { all } from "redux-saga/effects";
import { listenLoginRequestActions } from "./auth.saga";
import { listenGroupQueryChangeAction } from "./groups.saga";

export function* rootSaga() {
  yield all([listenGroupQueryChangeAction(), listenLoginRequestActions()]);
}
