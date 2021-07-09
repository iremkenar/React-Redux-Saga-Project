import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  loggedIn,
} from "../../shared/store/actions/counter.action";
import { userActions } from "../../shared/store/actions/user.action";

const HomePage = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  const loadUser = () => {
    dispatch(userActions.loadUserAction(1));
  };

  return (
    <div>
      <div onClick={loadUser}>Click Me!</div>
      <h1>This is my counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(loggedIn())}>Click to log in!</button>
      {isLogged ? <p>You are logged in!</p> : ""}
    </div>
  );
};

export default HomePage;
