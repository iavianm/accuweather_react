import "./Pages.css";
import React, { useContext } from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import WeatherContext from "../contexts/WeatherContext.jsx";
import { calculateAverageTemperature } from "../utils/helpers.js";

function HistoricalAvg() {
  const { weather } = useContext(WeatherContext);

  const result = calculateAverageTemperature(weather);

  return (
    <PageTemplate title="Historical Weather Avg">
      {weather && (
        <div>
          <p className={"date"}>Date: last 24 hours</p>
          <h2 className={"temp"}>Temperature: {result}</h2>
        </div>
      )}
    </PageTemplate>
  );
}

export default HistoricalAvg;
