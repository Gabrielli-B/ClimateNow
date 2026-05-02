import axios from "axios";

// função responsável por buscar dados na API externa
export async function getWeather(lat: string, lon: string) {
  const response = await axios.get(
    "https://api.open-meteo.com/v1/forecast",
    {
      params: {
        latitude: lat,
        longitude: lon,
        current_weather: true,
      },
    }
  );

  return response.data;
}