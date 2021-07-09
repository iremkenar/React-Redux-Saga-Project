import { SIGN_IN } from "../constants/action-types";
const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
