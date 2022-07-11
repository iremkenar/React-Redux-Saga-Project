import { userConstant } from "../constants/user.constant";

const INITIAL_STATE = {
  data: {
    id: null,
    name: "Joe",
    age: "30",
  },
  loading: false,
  loaded: false,
  loadFail: false,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userConstant.LOAD_USER:
      return {
        ...state,
        loading: true,
        loaded: false,
        loadFail: false,
      };
    case userConstant.LOAD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        loadFail: false,
        data: action.payload,
      };
    case userConstant.LOAD_USER_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        loadFail: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default userReducer;
