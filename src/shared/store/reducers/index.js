import counterReducer from "./counter.reducer";
import loggedReducer from "./isLogged.reducer";
import userReducer from "./user.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  user: userReducer,
});

export default rootReducer;
