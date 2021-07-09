import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  loggedIn,
} from "../../shared/store/actions/counter.action";

const HomePage = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>This is my counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(loggedIn())}>Click to log in!</button>
      {isLogged ? <p>You are logged in!</p> : ""}
    </div>
  );
};

export default HomePage;
