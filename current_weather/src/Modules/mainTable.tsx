import {Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Card} from "@mui/material";
import React from "react";

interface MainTableProps {
  weather: any;
  localDate: string | null;
}

const MainTable: React.FC<MainTableProps> = ({ weather, localDate }) => {
  return (
    <Card sx={{ border: "5px solid lightgray", padding: "10px", marginTop: "20px" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
                <TableCell>Pais</TableCell>
                <TableCell>Ciudad</TableCell>
                <TableCell>Región</TableCell>
                <TableCell>🕛 Día/Hora</TableCell>
                <TableCell>🌡️ Máx</TableCell>
                <TableCell>🌡️ Mín</TableCell>
                <TableCell>🌤️ Estado</TableCell>
                <TableCell>Vista</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
            <TableCell>{weather.location.country}</TableCell>
                  <TableCell>{weather.location.name}</TableCell>
                  <TableCell>{weather.location.region}</TableCell>
                  <TableCell>{localDate}</TableCell>
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
