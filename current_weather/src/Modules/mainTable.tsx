import {Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Card} from "@mui/material";
import React from "react";
import "./mainTable.css";

interface MainTableProps {
  weather: any;
  localDate: string | null;
}

const MainTable: React.FC<MainTableProps> = ({ weather, localDate }) => {
  return (
    <Card sx={{ padding: "0px", marginTop: "20px",  backgroundColor: "lightgray" }}>
      <TableContainer>
        <Table>
          <TableHead id="tableHeader">
            <TableRow>
                <TableCell id="tableTextHeader">Pais</TableCell>
                <TableCell id="tableTextHeader">Ciudad</TableCell>
                <TableCell id="tableTextHeader">Región</TableCell>
                <TableCell id="tableTextHeader">🕛 Día/Hora</TableCell>
                <TableCell id="tableTextHeader">🌡️ Temp Actual</TableCell>
                <TableCell id="tableTextHeader">🌡️ Máx</TableCell>
                <TableCell id="tableTextHeader">🌡️ Mín</TableCell>
                <TableCell id="tableTextHeader">🌤️ Estado</TableCell>
                <TableCell id="tableTextHeader">Vista</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
            <TableCell>{weather.location.country}</TableCell>
                  <TableCell>{weather.location.name}</TableCell>
                  <TableCell>{weather.location.region}</TableCell>
                  <TableCell>{localDate}</TableCell>
                  <TableCell>{weather.current.temp_c}°C</TableCell>
                  <TableCell>{weather.forecast.forecastday[0].day.maxtemp_c}°C</TableCell>
                  <TableCell>{weather.forecast.forecastday[0].day.mintemp_c}°C</TableCell>
                  <TableCell>{weather.current.condition.text}</TableCell>
                  <TableCell><img id="weatherIcon" src={`https:${weather.current.condition.icon}`} alt="Clima" /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default MainTable;
