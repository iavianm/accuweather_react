import "./Pages.css";
import React, { useContext } from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import WeatherContext from "../contexts/WeatherContext.jsx";
import { filterByLatestDate, normalizeData } from "../utils/helpers.js";

function HistoricalMin() {
  const { weather } = useContext(WeatherContext);

  function findMinTemperature(data) {
    if (data) {
      return data.reduce((minRecord, currentRecord) => {
        return currentRecord.temperature < minRecord.temperature
          ? currentRecord
          : minRecord;
      }, data[0]);
    }
  }

  const filteredData = filterByLatestDate(weather);
  const minTempRecord = findMinTemperature(filteredData);
  const result = normalizeData(minTempRecord);

  return (
    <PageTemplate title="Historical Weather Min">
      {weather && (
        <div>
          <p className={"date"}>Date: {result.time}</p>
          <h2 className={"temp"}>Temperature: {result.temperature}</h2>
        </div>
      )}
    </PageTemplate>
  );
}

export default HistoricalMin;
