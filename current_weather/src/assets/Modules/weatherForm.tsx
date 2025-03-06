import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

const WeatherForm = () => {
  return (
    <Box sx={{ maxWidth: 400, margin: "auto", textAlign: "center", p: 2 }}>
      <Typography variant="h5" gutterBottom>🏙️ Seleccionar ciudad</Typography>

      <Box component="form" className="latlong" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <TextField
        label="Definir latitud"
        type="number"
        inputProps={{ step: "any" }}
        fullWidth
        sx={{
          "& label": { color: "blue" }, // Color del label
          "& label.Mui-focused": { color: "blue" }, // Color del label cuando está enfocado
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" }, // Color del borde
            "&:hover fieldset": { borderColor: "blue" }, // Color al pasar el mouse
            "&.Mui-focused fieldset": { borderColor: "blue" }, // Color cuando está enfocado
          },
          "& .MuiInputBase-input": { color: "white" }, // Color del texto dentro del input
        }}
      />
      <TextField
        label="Definir longitud"
        type="number"
        inputProps={{ step: "any" }}
        fullWidth
        sx={{
          "& label": { color: "blue" }, // Color del label
          "& label.Mui-focused": { color: "blue" }, // Color del label cuando está enfocado
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "blue" }, // Color del borde
            "&:hover fieldset": { borderColor: "blue" }, // Color al pasar el mouse
            "&.Mui-focused fieldset": { borderColor: "blue" }, // Color cuando está enfocado
          },
          "& .MuiInputBase-input": { color: "white" }, // Color del texto dentro del input
        }}
      />
        <Button variant="contained" color="primary" type="submit">
          Buscar
        </Button>
      </Box>
    </Box>
  );
};

export default WeatherForm;
