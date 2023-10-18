import "./Pages.css";
import React, { useContext } from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import WeatherContext from "../contexts/WeatherContext.jsx";
import { checkCurrentTemperature, normalizeData } from "../utils/helpers.js";

function CurrentConditions() {
  const { weather } = useContext(WeatherContext);

  const data = checkCurrentTemperature(weather);
  const result = normalizeData(data);

  return (
    <PageTemplate title="Current Weather">
      {weather && (
        <div>
          <p className={"date"}>Date: {result.time}</p>
          <h2 className={"temp"}>Temperature: {result.temperature}</h2>
        </div>
      )}
    </PageTemplate>
  );
}

export default CurrentConditions;
