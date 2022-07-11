import { put, takeLatest } from "redux-saga/effects";
import { userActions } from "../actions/user.action";
import { userConstant } from "../constants/user.constant";

function* loadUser(action) {
  try {
    // const response = yield call(userService.loadUser, action.payload);
    // () => {
    //     return {
    //         user: 1,
    //         name: 'irem',
    //         success: true,
    //     };
    // }
    const response = {
      data: {
        id: 1,
        name: "John",
        age: "35",
      },
      success: true,
    };
    if (!response.success) {
      yield put(userActions.loadUserFailAction());
    } else {
      yield put(userActions.loadUserSuccessAction(response.data));
    }
  } catch (error) {
    yield put(userActions.loadUserFailAction());
  }
}

export function* userWatcherSaga() {
  yield takeLatest(userConstant.LOAD_USER, loadUser);
}
