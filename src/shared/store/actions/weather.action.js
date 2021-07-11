import { weatherConstant } from "../constants/weather.constant";

const loadWeatherApiAction = {
  type: weatherConstant.LOAD_WEATHER_API,
  payload,
};

const loadWeatherApiSuccessAction = {
  type: weatherConstant.LOAD_WEATHER_API_SUCCESS,
  payload,
};

const loadWeatherApiFailAction = {
  type: weatherConstant.LOAD_WEATHER_API_FAIL,
};

export const weatherActions = {
  loadWeatherApiAction,
  loadWeatherApiSuccessAction,
  loadWeatherApiFailAction,
};
