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
  const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const loadUser = () => {
    dispatch(userActions.loadUserAction());
  };

  return (
    <div>
      <div onClick={loadUser}>Click Me!</div>
      <p>{userData.name}</p>
      <h1>This is my counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(loggedIn())}>Click to log in!</button>
      {isLogged ? <p>You are logged in!</p> : ""}
    </div>
  );
};

export default HomePage;
