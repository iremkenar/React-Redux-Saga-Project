import { all } from "redux-saga/effects";
import { userWatcherSaga } from "./user.saga";

export default function* mySaga() {
  yield all([userWatcherSaga()]);
}
