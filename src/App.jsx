import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const fetchWeather = async () => {
    if (!city.trim()) return;

    setLoading(true);
    setErrorMsg("");
    setWeatherData(null);

    try {
      const geoResponse = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
      );
      const geoInfo = await geoResponse.json();

      if (!geoInfo.results?.length) {
        setErrorMsg("City not found.");
        setLoading(false);
        return;
      }

      const { latitude, longitude, name, country } = geoInfo.results[0];
      setLocation({ name, country });

      const weatherResponse = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
      );
      const result = await weatherResponse.json();

      setWeatherData(result.current_weather);
    } catch {
      setErrorMsg("Unable to fetch weather details right now.");
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-[#0D1117] text-white flex flex-col items-center py-10 px-5">
      <h1 className="text-4xl font-bold text-[#35C2FF] mb-6">Weather Now</h1>

      <div className="w-full max-w-xl">
        <SearchBar
          city={city}
          setCity={setCity}
          onSearch={fetchWeather}
        />
      </div>

      {loading && (
        <p className="text-[#35C2FF] text-lg mt-6 animate-pulse">
          Fetching data...
        </p>
      )}

      {errorMsg && (
        <p className="text-red-500 text-lg mt-6">{errorMsg}</p>
      )}

      {weatherData && location && (
        <div className="w-full max-w-md mt-8">
          <WeatherCard weather={weatherData} place={location} />
        </div>
      )}
    </main>
  );
}
