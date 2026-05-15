import express from "express";
import cors from "cors";
import { createServer } from "http";

import { setupWeatherSocket } from "./websocket/weatherSocket";

import { getWeather } from "./services/weatherService";
import { getCityCoordinates } from "./services/geocodingService";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("ClimateNow API funcionando!");
});

app.get("/weather", async (req, res) => {
  try {
    const city = req.query.city as string;

    if (!city) {
      return res.status(400).json({
        error: "Cidade obrigatória",
      });
    }

    const coordinates = await getCityCoordinates(city);

    const weatherData = await getWeather(
      String(coordinates.latitude),
      String(coordinates.longitude)
    );

    res.json({
      city: coordinates.name,
      country: coordinates.country,
      temperature: weatherData.current_weather.temperature,
      windspeed: weatherData.current_weather.windspeed,
      weathercode: weatherData.current_weather.weathercode,
      time: weatherData.current_weather.time,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro ao buscar clima",
    });
  }
});

const server = createServer(app);

setupWeatherSocket(server);

const PORT = 3001;

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
