import express from "express";
import cors from "cors";
import { getWeather } from "./services/weatherService";

const app = express();

app.use(cors());
app.use(express.json());

/* ROTA TESTE */
app.get("/", (req, res) => {
  res.send("API ClimateNow funcionando!");
});

/* ROTA DO CLIMA */
app.get("/weather", async (req, res) => {
  try {
    const { lat, lon } = req.query;

    if (!lat || !lon) {
      return res.status(400).json({
        error: "lat e lon são obrigatórios",
      });
    }

    const data = await getWeather(String(lat), String(lon));

    res.json({
      temperature: data.current_weather.temperature,
      windspeed: data.current_weather.windspeed,
      time: data.current_weather.time,
    });
  } catch (error) {
    res.status(500).json({
      error: "Erro ao buscar clima",
    });
  }
});

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
