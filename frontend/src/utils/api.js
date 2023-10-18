import axios from "axios";

const BASE_URL = "http://localhost:4001";

export const getHistoricalWeather = () => {
  return axios
    .get(`${BASE_URL}/weather/historical`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response ? error.response.status : new Error("Network Error");
    });
};

export const getEndpointStatus = () => {
  return axios
    .get(`${BASE_URL}/weather/status`)
    .then((response) => response.data)
    .catch((error) => {
      throw error.response ? error.response.status : new Error("Network Error");
    });
};
