import { React, useState } from "react";
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
import {
  getWeatherDataSelector, getWeatherLoadedSelector
} from "../../shared/store/selectors/weather.selector";
import { userActions } from "../../shared/store/actions/user.action";
import { weatherActions } from "../../shared/store/actions/weather.action";

const HomePage = () => {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  //const weatherData = useSelector((state) => state.weather);
  //const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');

  const userData = useSelector(getUserDataSelector);
  const userLoaded = useSelector(getUserLoadedSelector);
  const weatherData = useSelector(getWeatherDataSelector);
  const weatherLoaded = useSelector(getWeatherLoadedSelector);


  const changeHandler = (e) => {
    setCityName(e.target.value);
  }

  const loadWeather = (city) => {
    dispatch(weatherActions.loadWeatherApiAction(cityName));
  };

  const loadUser = () => {
    dispatch(userActions.loadUserAction());
  };

  return (
    <div>
      <br />
      <input type='text' value={cityName} placeholder='Please type a city name' onChange={changeHandler}></input>
      <button onClick={loadWeather}>show me the forecast</button>
      {weatherLoaded ? (
        <>
          <p>City: {weatherData.city.name}</p>
          <p>Description: {weatherData.list[0].weather[0].description}</p>
          <p>Temp: {Math.trunc(weatherData.list[0].main.temp)} &deg;C</p>
        </>
      ) : (<></>)}


      {userLoaded ? (
        <>
          <p>{userData.name}</p>
          <h1>This is my counter: {counter}</h1>
          <button onClick={() => dispatch(increment())}>+</button>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(loggedIn())}>Click to log in!</button>
          {isLogged ? <p>You are logged in!</p> : ""}
        </>
      ) : (
        <></>
      )}

      <div onClick={loadUser}>Click me to see the counter and a name!</div>
    </div>
  );
};

export default HomePage;
