import { all } from "redux-saga/effects";
import { listenLoginRequestActions } from "./auth.saga";
import { listenGroupQueryChangeAction } from "./groups.saga";
import { listenUserQueryActions } from "./users.saga";

export function* rootSaga() {
  yield all([
    listenGroupQueryChangeAction(),
    listenLoginRequestActions(),
    listenUserQueryActions(),
  ]);
}
