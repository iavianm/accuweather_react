import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppBar, Toolbar, Tabs, Tab } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  tab: {
    fontWeight: "bold !important",
    fontSize: "0.9rem !important",
    color: "white !important",
  },
  selectedTab: {
    color: "yellow !important",
  },
}));

const Header = () => {
  const classes = useStyles();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <AppBar position="static">
      <Toolbar>
        <Tabs value={currentPath} variant="scrollable" scrollButtons="auto">
          <Tab
            className={`${classes.tab} ${
              currentPath === "/" ? classes.selectedTab : ""
            }`}
            label="Home"
            value="/"
            component={Link}
            to="/"
          />
          <Tab
            className={`${classes.tab} ${
              currentPath === "/weather/current" ? classes.selectedTab : ""
            }`}
            label="Current Conditions"
            value="/weather/current"
            component={Link}
            to="/weather/current"
          />
          <Tab
            className={`${classes.tab} ${
              currentPath === "/weather/historical" ? classes.selectedTab : ""
            }`}
            label="Historical Conditions"
            value="/weather/historical"
            component={Link}
            to="/weather/historical"
          />
          <Tab
            className={`${classes.tab} ${
              currentPath === "/weather/historical/max"
                ? classes.selectedTab
                : ""
            }`}
            label="Historical Conditions Max"
            value="/weather/historical/max"
            component={Link}
            to="/weather/historical/max"
          />
          <Tab
            className={`${classes.tab} ${
              currentPath === "/weather/historical/min"
                ? classes.selectedTab
                : ""
            }`}
            label="Historical Conditions Min"
            value="/weather/historical/min"
            component={Link}
            to="/weather/historical/min"
          />
          <Tab
            className={`${classes.tab} ${
              currentPath === "/weather/historical/avg"
                ? classes.selectedTab
                : ""
            }`}
            label="Historical Conditions AVG"
            value="/weather/historical/avg"
            component={Link}
            to="/weather/historical/avg"
          />
          <Tab
            className={`${classes.tab} ${
              currentPath === "/by_time" ? classes.selectedTab : ""
            }`}
            label="Conditions By Time"
            value="/by_time"
            component={Link}
            to="/by_time"
          />
          <Tab
            className={`${classes.tab} ${
              currentPath === "/health" ? classes.selectedTab : ""
            }`}
            label="Status"
            value="/health"
            component={Link}
            to="/health"
          />
        </Tabs>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
