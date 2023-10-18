import "./PageTemplate.css";

import React, { useContext } from "react";
import { Button } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import WeatherContext from "../../contexts/WeatherContext.jsx";

function PageTemplate({ title, children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { getWeather, getStatus } = useContext(WeatherContext);

  const renderWeatherButton = () => {
    if (location.pathname === "/by_time") {
      return null;
    }

    if (location.pathname === "/health") {
      return (
        <Button variant="contained" color="primary" onClick={getStatus}>
          Проверить статус
        </Button>
      );
    }

    return (
      <Button variant="contained" color="primary" onClick={getWeather}>
        Получить погоду
      </Button>
    );
  };

  return (
    <div>
      <div className={"title"}>
        <h1>{title}</h1>
        {renderWeatherButton()}
      </div>
      <div className={"temperature"}>{children}</div>

      <Button variant="contained" color="primary" onClick={() => navigate(-1)}>
        Назад
      </Button>
    </div>
  );
}

export default PageTemplate;
