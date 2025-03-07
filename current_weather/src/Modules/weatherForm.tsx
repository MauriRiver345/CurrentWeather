import React from "react";
import { Button, TextField, Box, Typography } from "@mui/material";

interface WeatherFormProps {
  city: string;
  setCity: React.Dispatch<React.SetStateAction<string>>;
  fetchWeather: () => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ city, setCity, fetchWeather }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchWeather(); // Llamar a la API con la ciudad ingresada
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", textAlign: "center", p: 2 }}>
      <Typography variant="h5" gutterBottom>🏙️ Seleccionar ciudad</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 , marginTop: 2}}>
        <TextField
          label="Escribir ciudad"
          type="text"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{
            "& label": { color: "blue" },
            "& label.Mui-focused": { color: "blue" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "blue" },
              "&:hover fieldset": { borderColor: "blue" },
              "&.Mui-focused fieldset": { borderColor: "blue" },
            },
            "& .MuiInputBase-input": { color: "white" },
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
