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
import Button from "./styled/Button";
import CitySubmit from "./styled/CitySubmit";
import WeatherInformation from "./styled/WeatherInformation";
import BackgroundImage from "./styled/BackgroundImage";
import CardWrapper from "./styled/CardWrapper";

const HomePage = () => {
  // const counter = useSelector((state) => state.counter);
  // const isLogged = useSelector((state) => state.isLogged);
  //const weatherData = useSelector((state) => state.weather);
  //const userData = useSelector((state) => state.user.data);
  const dispatch = useDispatch();
  const [cityName, setCityName] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  // const userData = useSelector(getUserDataSelector);
  // const userLoaded = useSelector(getUserLoadedSelector);
  const weatherData = useSelector(getWeatherDataSelector);
  const weatherLoaded = useSelector(getWeatherLoadedSelector);


  const changeHandler = (e) => {
    setCityName(e.target.value);
    if (cityName.trim().length > 0) {
      setIsValid(true);
      setIsVisible(!isVisible);
    }
  }

  const loadWeather = (city) => {
    dispatch(weatherActions.loadWeatherApiAction(cityName));
    if (cityName.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setCityName('');
  };

  // const loadUser = () => {
  //   dispatch(userActions.loadUserAction());
  //   setIsVisible(!isVisible);
  // };


  return (
    <>
      <BackgroundImage>
        <CitySubmit invalid={!isValid}>
          <input type='text' value={cityName} placeholder='Please type a city name' onChange={changeHandler}></input>
          <Button onClick={loadWeather}>Show me the weather forecast</Button>
          {weatherLoaded ? (
            <CardWrapper>
              <WeatherInformation><span>City:</span> {weatherData.city.name}</WeatherInformation>
              <WeatherInformation><span>Temp: </span>{Math.trunc(weatherData.list[0].main.temp)} &deg;C</WeatherInformation>
              <WeatherInformation><span>Description: </span>{weatherData.list[0].weather[0].description}</WeatherInformation>

            </CardWrapper>
          ) : (<></>)}
        </CitySubmit>

        {/* <Button onClick={loadUser}>Click me to see the counter and a name!</Button>
      {userLoaded ? (
        <>
          <p>{userData.name}</p>
          <h1>This is my counter: {counter}</h1>
          <Button onClick={() => dispatch(increment())}>+</Button>
          <Button onClick={() => dispatch(decrement())}>-</Button>
          <Button onClick={() => dispatch(loggedIn())}>Click to log in!</Button>
          {isLogged ? <p>You are logged in!</p> : ""}
        </>
      ) : (
        <></>
      )} */}
      </BackgroundImage>
    </>
  );
};

export default HomePage;
