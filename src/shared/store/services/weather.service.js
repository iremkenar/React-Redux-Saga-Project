import axios from "axios";

const baseUrl =
  "https://api.openweathermap.org/data/2.5/forecast?q=";
const API_KEY = "209681e4c06f24f06f8d7496ce90e792";


const getWeatherData = async (cityname) => {
  const response = await axios.get(`${baseUrl}${cityname}&units=metric&appid=${API_KEY}`);
  return response;
};

export default getWeatherData;
