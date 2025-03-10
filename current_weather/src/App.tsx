import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherForm from "./Modules/weatherForm.tsx";
import { Weather } from "./Modules/weatherInterface.tsx";
import MainTable from "./Modules/mainTable.tsx";
import '@fontsource/montserrat/index.css';
import '@fontsource/montserrat/700.css';

function App() {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [localDate, setLocalDate] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [city, setCity] = useState<string>("Aguascalientes"); // Ciudad por defecto
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = async (cityName: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/forecast.json",
        {
          params: {
            key: "6e4b28cf54744dc0a4e143637250603",
            q: cityName, // Usamos el parámetro en lugar del estado
          },
        }
      );

      const weatherData: Weather = response.data;
      const date = new Date(weatherData.location.localtime);
      const formattedDateTime = date.toLocaleString("es-ES", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });

      setWeather(weatherData);
      console.log(weatherData);
      setLocalDate(formattedDateTime);
    } catch (error) {
      setError("Ciudad no encontrada. Intenta con otra.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  // Cargar el clima de la ciudad predeterminada al iniciar
  useEffect(() => {
    fetchWeather(city);
  }, []); // Se ejecuta solo una vez al montar el componente

  return (
    <div className="mainContent">
      <div className="header">
      <p className = "mainTitle">¿Cómo está el clima en tu Ciudad/País soñado??</p>
      <img id = "icon" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/c6023f30971807.563b2b13a55cc.gif" alt="Gif" />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Cargando clima...</p>}
      <h3 id="secondTitle">Información de la ciudad</h3>
      {weather ? (
        <div className="weather">
          <MainTable weather={weather} localDate={localDate}></MainTable>
        </div>
      ) : (
        <p>Ingresa una ciudad para ver el clima.</p>
      )}
      <h3 id="secondTitle">Elegir mi ciudad</h3>
      <WeatherForm city={city} setCity={setCity} fetchWeather={() => fetchWeather(city)}></WeatherForm>
    </div>
  );
}

export default App;