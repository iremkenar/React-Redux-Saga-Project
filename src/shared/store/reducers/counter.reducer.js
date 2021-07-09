import { INCREMENT, DECREMENT } from "../constants/counter.constant";
const counterReducer = (initialState = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return initialState + 1;
    case DECREMENT:
      return initialState - 1;
    default:
      return initialState;
  }
};

export default counterReducer;
