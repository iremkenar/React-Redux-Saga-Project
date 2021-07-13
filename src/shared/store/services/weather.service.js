import axios from "axios";

const baseUrl =
  "https://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=";
const API_KEY = "209681e4c06f24f06f8d7496ce90e792";

const getWeatherData = async () => {
  const response = await axios.get(`${baseUrl}${API_KEY}`);
  return response;
};

export default getWeatherData;
