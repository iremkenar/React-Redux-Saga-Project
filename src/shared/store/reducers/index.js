import counterReducer from "./counter.reducer";
import loggedReducer from "./isLogged.reducer";
import userReducer from "./user.reducer";
import weatherReducer from "./weather.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  isLogged: loggedReducer,
  user: userReducer,
  weather: weatherReducer,
});

export default rootReducer;
