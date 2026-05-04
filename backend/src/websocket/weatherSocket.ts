import { Server } from "http";
import { WebSocketServer } from "ws";

import { getWeather } from "../services/weatherService";
import { getCityCoordinates } from "../services/geocodingService";

export function setupWeatherSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("Cliente conectado");

    const sendWeather = async () => {
      try {
        const coordinates = await getCityCoordinates("Porto Alegre");

        const weatherData = await getWeather(
          String(coordinates.latitude),
          String(coordinates.longitude)
        );

        ws.send(
          JSON.stringify({
            city: coordinates.name,
            temperature: weatherData.current_weather.temperature,
            windspeed: weatherData.current_weather.windspeed,
            time: weatherData.current_weather.time,
          })
        );
      } catch (error) {
        console.log("Erro no websocket");
      }
    };

    // envia imediatamente
    sendWeather();

    // atualiza a cada 5 segundos
    const interval = setInterval(sendWeather, 5000);

    ws.on("close", () => {
      console.log("Cliente desconectado");
      clearInterval(interval);
    });
  });
}