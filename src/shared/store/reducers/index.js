import counterReducer from "./counter.reducer";
import loggedReducer from "./isLogged.reducer";
import { combineReducers } from "redux";
import userReducer from "./user.reducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  user: userReducer,
});

export default rootReducer;
