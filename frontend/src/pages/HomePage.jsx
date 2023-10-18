// pages/HomePage.jsx

import React from "react";
import { Link } from "react-router-dom";
import { Button, Grid } from "@mui/material";

function HomePage() {
  return (
    <div>
      <h1>Weather forecast (Accuweather)</h1>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/weather/current"
          >
            Current Conditions
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/weather/historical"
          >
            Historical Conditions
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/weather/historical/max"
          >
            Historical Max Conditions
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/weather/historical/min"
          >
            Historical Min Conditions
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/weather/historical/avg"
          >
            Historical AVG Conditions
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/by_time"
          >
            Conditions By Time
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            component={Link}
            to="/health"
          >
            Status
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
