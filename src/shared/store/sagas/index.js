import { all } from "redux-saga/effects";
import { userWatcherSaga } from "./user.saga";
import { weatherWatcherSaga } from "./weather.saga";

export default function* mySaga() {
  yield all([userWatcherSaga(), weatherWatcherSaga()]);
}
