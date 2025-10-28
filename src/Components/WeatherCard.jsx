export default function WeatherCard({ weather }) {
  const { city, temperature, windspeed, weathercode } = weather;

  const weatherDescriptions = {
    0: "☀️ Clear sky",
    1: "🌤️ Mainly clear",
    2: "⛅ Partly cloudy",
    3: "☁️ Overcast",
    45: "🌫️ Fog",
    48: "🌫️ Rime fog",
    51: "🌦️ Light drizzle",
    61: "🌧️ Rain",
    71: "❄️ Snow",
    95: "⛈️ Thunderstorm",
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center w-80">
      <h2 className="text-2xl font-bold text-blue-700 mb-2">{city}</h2>
      <p className="text-5xl font-semibold mb-2">{temperature}°C</p>
      <p className="text-lg text-gray-700 mb-2">
        {weatherDescriptions[weathercode] || "Unknown"}
      </p>
      <p className="text-gray-500 text-sm">💨 {windspeed} km/h wind</p>
    </div>
  );
}
