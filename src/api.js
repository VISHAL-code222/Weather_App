
import axios from 'axios';

const API_KEY = '0fbba6e349464b62c151b15c7e966dea'; //THIS IS THE API KEY OF OPEN-WEATHER API
const BASE_URL = 'https://api.openweathermap.org/data/2.5'; //THIS IS URL OF WEATHER-API

export const getWeatherByCity = async (city) => {         //IN THIS WE ARE USING ASYNC/AWAIT,WHICH IS A ES-6 JAVASCRIPT CONCEPT FOR PERFORMING ASYNCHRONOUS OPERATION.
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {  //IN THIS WE HAVE USED TRY AND CATCH AND ALSO WE ARE USING AXIOS TO FETCH DATA FROM API.
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  }
  catch (error) {
    console.error("Error fetching weather data", error);
    throw error;
  }
};
