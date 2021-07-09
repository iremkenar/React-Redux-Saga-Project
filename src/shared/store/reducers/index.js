import counterReducer from "./counter.reducer";
import loggedReducer from "./isLogged.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
});

export default rootReducer;
