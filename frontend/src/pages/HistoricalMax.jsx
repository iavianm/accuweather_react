import "./Pages.css";
import React, { useContext } from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import WeatherContext from "../contexts/WeatherContext.jsx";
import { filterByLatestDate, normalizeData } from "../utils/helpers.js";

function HistoricalMax() {
  const { weather } = useContext(WeatherContext);

  function findMaxTemperature(data) {
    if (data) {
      return data.reduce((maxRecord, currentRecord) => {
        return currentRecord.temperature > maxRecord.temperature
          ? currentRecord
          : maxRecord;
      });
    }
  }

  const filteredData = filterByLatestDate(weather);
  const maxTempRecord = findMaxTemperature(filteredData);
  const result = normalizeData(maxTempRecord);

  return (
    <PageTemplate title="Historical Weather Max">
      {weather && (
        <div>
          <p className={"date"}>Date: {result.time}</p>
          <h2 className={"temp"}>Temperature: {result.temperature}</h2>
        </div>
      )}
    </PageTemplate>
  );
}

export default HistoricalMax;
