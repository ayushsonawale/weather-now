export default function WeatherCard({ weather, place }) {
  return (
    <div className="mt-8 bg-[#1A1F25] p-6 rounded-xl border border-white/10 text-center">
      <h2 className="text-2xl font-semibold text-[#35C2FF]">
        {place.name}
      </h2>
      <p className="text-gray-400 text-sm">{place.country}</p>

      <h3 className="text-6xl font-bold mt-4 text-white">
        {weather.temperature}°C
      </h3>

      <div className="text-gray-300 mt-4 text-lg">
        Wind: {weather.windspeed} km/h
        <span className="mx-2 text-[#35C2FF]">|</span>
        Dir: {weather.winddirection}°
      </div>

      <p className="text-xs text-gray-500 mt-3">
        {weather.time.replace("T", " • ")}
      </p>
    </div>
  );
}
