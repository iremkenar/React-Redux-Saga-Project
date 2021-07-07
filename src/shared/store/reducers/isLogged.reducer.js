import { SIGN_IN } from "../constants/counter.constant";
const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
