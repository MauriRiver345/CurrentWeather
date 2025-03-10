import React from "react";
import {TextField, Box, Typography } from "@mui/material";
import "../Styles/weatherForm.css";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

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
    <Box  className = "divForm" sx={{ maxWidth: 400, textAlign: "center", p: 2 }}>
      <Typography variant="h5" style={{color:"black"}} gutterBottom>🏙️ Seleccionar ciudad</Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 , marginTop: 2}}>
        <TextField
          label="Escribir ciudad"
          type="text"
          fullWidth
          value={city}
          onChange={(e) => setCity(e.target.value)}
          sx={{
            "& label": { color: "black" },
            "& label.Mui-focused": { color: "black" },
            "& .MuiOutlinedInput-root": {
              "& fieldset": { borderColor: "black" },
              "&:hover fieldset": { borderColor: "black" },
              "&.Mui-focused fieldset": { borderColor: "black" },
            },
            "& .MuiInputBase-input": { color: "black" },
          }}
        />
        <Button id="formButton" variant="contained" color="primary" endIcon={<SendIcon />}>
          Enviar
        </Button>
      </Box>
    </Box>
  );
};

export default WeatherForm;
