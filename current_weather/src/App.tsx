import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import "./assets/Modules/weatherForm.tsx";
import WeatherForm from "./assets/Modules/weatherForm.tsx";
import { Weather } from "./assets/Modules/weatherInterface.tsx";


function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [localDate, setLocalDate] = useState<String | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            key: "6e4b28cf54744dc0a4e143637250603",
            q: "Buenos Aires",
          },
        }
      );
      
      const weatherData: Weather = response.data;
      console.log(response.data);
      const date = new Date(weatherData.location.localtime);
      const formattedDateTime = date.toLocaleString('es-ES', {
        weekday: 'long',  // Día de la semana (Lunes)
        year: 'numeric',  // Año completo (2025)
        month: 'long',    // Mes completo (Abril)
        day: 'numeric',   // Día del mes (03)
        hour: '2-digit',  // Hora en 2 dígitos
        minute: '2-digit', // Minutos en 2 dígitos
      });

      setWeather(weatherData);
      setLocalDate(formattedDateTime);
    } catch (error) {
      setError("Error al obtener el clima");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([fetchWeather()]); // Ejecutar ambas llamadas en paralelo
      } catch (error) {
        setError("Error al obtener datos");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Información Actual</h1>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {weather ? (
        <div className="weather">
          <h2>🌦️ Clima</h2>
          <h3>🌐 Ciudad: {`${weather.location.name}, ${weather.location.region}, ${weather.location.country}`}</h3>
          <p>🕒 Hora Local: {localDate}</p>
          <p>🌡️ Temperatura: {weather.current.temp_c}°C</p>
          <img id="weatherIcon" src={`https:${weather.current.condition.icon}`} alt="" />
          <p>🌤️ Clima: {weather.current.condition.text}</p>
          <p>🌤️ Max Temp: {weather.forecast.forecastday[0].day.maxtemp_c}</p>
          <p>🌤️ Min Temp: {weather.forecast.forecastday[0].day.mintemp_c}</p>
          <WeatherForm />
          </div>
      ) : (
        <p>Cargando clima...</p>
      )}
    </div>
  );
}

export default App;
