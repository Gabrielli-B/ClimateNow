import axios from "axios";


export async function getCityCoordinates(city: string) {
  const response = await axios.get(
    "https://geocoding-api.open-meteo.com/v1/search",
    {
      params: {
        name: city,
        count: 1,
        language: "pt",
        format: "json",
      },
    }
  );

  if (!response.data.results || response.data.results.length === 0) {
    throw new Error("Cidade não encontrada");
  }

  const cityData = response.data.results[0];

  return {
    latitude: cityData.latitude,
    longitude: cityData.longitude,
    name: cityData.name,
    country: cityData.country,
  };
}