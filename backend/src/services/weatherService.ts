import axios from "axios";

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