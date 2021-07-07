import {userConstant} from "../constants/user.constant";

const loadUserAction = (payload) => ({
    type: userConstant.LOAD_USER,
    payload,
});

const loadUserSuccessAction = (payload) => ({
    type: userConstant.LOAD_USER_SUCCESS,
    payload,
});

const loadUserFailAction = () => ({
    type: userConstant.LOAD_USER_FAIL,
});

export const userActions = {
    loadUserAction,
    loadUserSuccessAction,
    loadUserFailAction,
}
