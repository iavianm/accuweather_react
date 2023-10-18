import "./Pages.css";
import React, { useContext } from "react";
import PageTemplate from "../components/PageTemplate/PageTemplate";
import WeatherContext from "../contexts/WeatherContext.jsx";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

function HistoricalCurrent() {
  const { weather } = useContext(WeatherContext);

  return (
    <PageTemplate title="Current Weather">
      {weather && (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={"table_title"}>Time</TableCell>
              <TableCell className={"table_title"}>Temperature</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {weather.map((record, index) => (
              <TableRow key={index}>
                <TableCell>{record.time.replace("T", " ")}</TableCell>
                <TableCell>{record.temperature}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </PageTemplate>
  );
}

export default HistoricalCurrent;
