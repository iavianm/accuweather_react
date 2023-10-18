import React, { useState, useContext } from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import WeatherContext from "../contexts/WeatherContext.jsx";
import { TextField, Button } from "@mui/material";
import { normalizeData } from "../utils/helpers.js";

function ConditionsByTime() {
  const { weather } = useContext(WeatherContext);
  const [inputValue, setInputValue] = useState("");
  const [temperature, setTemperature] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [notWeather, setNotWeather] = useState(false);

  const handleSearch = () => {
    const timestamp = parseInt(inputValue, 10);
    const lowerBound = timestamp - 3600;
    const upperBound = timestamp + 3600;

    if (weather) {
      setNotWeather(false);

      const timeRecord = weather.find((record) => {
        const recordTimestamp = Date.parse(record.time) / 1000;
        return recordTimestamp >= lowerBound && recordTimestamp <= upperBound;
      });

      if (timeRecord) {
        setTemperature(timeRecord);
        setNotFound(false);
      } else {
        setTemperature(null);
        setNotFound(true);
      }
    } else {
      setTemperature(null);
      setNotWeather(true);
    }
  };

  const result = normalizeData(temperature);

  return (
    <PageTemplate title="Weather by time">
      <TextField
        label="Enter Timestamp"
        size="small"
        variant="outlined"
        value={inputValue}
        onChange={(e) => {
          if (e.target.value.match(/^\d*$/)) {
            setInputValue(e.target.value);
          }
        }}
        placeholder="e.g. 1697651917"
        style={{ marginBottom: "20px", marginRight: "20px", width: "30%" }}
      />
      <Button variant="contained" color="primary" onClick={handleSearch}>
        Search
      </Button>
      {temperature && (
        <div>
          <p className={"date"}>Date: {result.time}</p>
          <h2 className={"temp"}>Temperature: {result.temperature}</h2>
        </div>
      )}
      {notFound && (
        <div style={{ color: "red" }}>Data not found for the given time.</div>
      )}
      {notWeather && (
        <div style={{ color: "red" }}>Update the weather data.</div>
      )}
    </PageTemplate>
  );
}

export default ConditionsByTime;
