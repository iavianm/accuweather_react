import "./App.css";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import CurrentConditions from "../../pages/CurrentConditions";
import Header from "../Header/Header";
import HomePage from "../../pages/HomePage.jsx";
import HistoricalCurrent from "../../pages/HistoricalCurrent.jsx";
import HistoricalMax from "../../pages/HistoricalMax.jsx";
import HistoricalAvg from "../../pages/HistoricalAvg.jsx";
import ConditionsByTime from "../../pages/ConditionsByTime.jsx";
import HistoricalMin from "../../pages/HistoricalMin.jsx";
import Health from "../../pages/Health.jsx";
import { getEndpointStatus, getHistoricalWeather } from "../../utils/api.js";

import WeatherContext from "../../contexts/WeatherContext.jsx";
import PageTemplate from "../PageTemplate/PageTemplate.jsx";

function App() {
  const [weather, setWeather] = React.useState(null);
  const [lastUpdated, setLastUpdated] = React.useState(null);
  const [status, setStatus] = React.useState(null);

  function getWeather() {
    if (lastUpdated && new Date().getTime() - lastUpdated < 15 * 60 * 1000) {
      console.log("Using cached weather data");
      return;
    }

    getHistoricalWeather().then((data) => {
      setWeather(data);
      setLastUpdated(new Date().getTime());
    });
  }

  function getStatus() {
    getEndpointStatus()
      .then((data) => {
        if (data) {
          setStatus("OK");
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus("ERROR");
      });
  }

  return (
    <WeatherContext.Provider value={{ weather, getWeather, getStatus }}>
      <Router>
        <div className={"app"}>
          <Header />
          <main className={"main"}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/weather/current" element={<CurrentConditions />} />
              <Route
                path="/weather/historical"
                element={<HistoricalCurrent />}
              />
              <Route
                path="/weather/historical/max"
                element={<HistoricalMax />}
              />
              <Route
                path="/weather/historical/min"
                element={<HistoricalMin />}
              />
              <Route
                path="/weather/historical/avg"
                element={<HistoricalAvg />}
              />
              <Route path="/by_time" element={<ConditionsByTime />} />
              <Route path="/health" element={<Health status={status} />} />
            </Routes>
          </main>
        </div>
      </Router>
    </WeatherContext.Provider>
  );
}

export default App;
