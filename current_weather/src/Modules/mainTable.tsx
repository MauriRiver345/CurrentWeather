import {Table, TableHead, TableBody, TableCell, TableContainer, TableRow, Card} from "@mui/material";
import React from "react";
import "../Styles/mainTable.css";

interface MainTableProps {
  weather: any;
  localDate: string | null;
}

const MainTable: React.FC<MainTableProps> = ({ weather, localDate }) => {
  return (
    <Card sx={{borderRadius: "10px", backgroundColor: "#B9B9B9"}}>
      <TableContainer>
        <Table>
          <TableHead id="tableHeader">
            <TableRow>
                <TableCell className="tableTextHeader">Pais</TableCell>
                <TableCell className="tableTextHeader">Ciudad</TableCell>
                <TableCell className="tableTextHeader">Región</TableCell>
                <TableCell className="tableTextHeader">🕛 Día/Hora</TableCell>
                <TableCell className="tableTextHeader">🌡️ Temp Actual</TableCell>
                <TableCell className="tableTextHeader">🌡️ Sensación</TableCell>
                <TableCell className="tableTextHeader">🌡️ Máx</TableCell>
                <TableCell className="tableTextHeader">🌡️ Mín</TableCell>
                <TableCell className="tableTextHeader">🌤️ Estado</TableCell>
                <TableCell className="tableTextHeader">Vista</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
            <TableCell className="tableData">{weather.location.country}</TableCell>
                  <TableCell className="tableData">{weather.location.name}</TableCell>
                  <TableCell className="tableData">{weather.location.region}</TableCell>
                  <TableCell className="tableData">{localDate}</TableCell>
                  <TableCell className="tableData" id="mainTableText">{weather.current.temp_c}°C</TableCell>
                  <TableCell className="tableData">{weather.current.feelslike_c}°C</TableCell>
                  <TableCell className="tableData">{weather.forecast.forecastday[0].day.maxtemp_c}°C</TableCell>
                  <TableCell className="tableData">{weather.forecast.forecastday[0].day.mintemp_c}°C</TableCell>
                  <TableCell className="tableData">{weather.current.condition.text}</TableCell>
                  <TableCell><img src={`https:${weather.current.condition.icon}`} alt="Clima" /></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
};

export default MainTable;
