import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-center mb-6">
      <input
        type="text"
        placeholder="Enter city name..."
        className="border p-2 w-72 rounded-l-lg focus:outline-none"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 rounded-r-lg hover:bg-blue-700"
      >
        Search
      </button>
    </form>
  );
}
