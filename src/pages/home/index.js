import { React } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  loggedIn,
} from "../../shared/store/actions/counter.action";
import {
  getUserDataSelector,
  getUserLoadedSelector,
} from "../../shared/store/selectors/user.selector";
import { userActions } from "../../shared/store/actions/user.action";
import { weatherActions } from "../../shared/store/actions/weather.action";

const HomePage = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const weatherData = useSelector((state) => state.weather);
  console.log(weatherData);
  //const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();

  const userData = useSelector(getUserDataSelector);
  const userLoaded = useSelector(getUserLoadedSelector);

  const loadWeather = () => {
    dispatch(weatherActions.loadWeatherApiAction());
  };
  const loadUser = () => {
    dispatch(userActions.loadUserAction(1));
  };

  return (
    <div>
      <div onClick={loadUser}>Click Me!</div>
      <div onClick={loadWeather}>Click to see the weather</div>
      <p>{weatherData.coord}</p>
      <p>{userData.name}</p>
      {userLoaded ? (
        <>
          <h1>This is my counter: {counter}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(loggedIn())}>Click to log in!</button>
          {isLogged ? <p>You are logged in!</p> : ""}
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HomePage;
