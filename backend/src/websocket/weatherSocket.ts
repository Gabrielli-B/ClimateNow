import { Server } from "http";
import { WebSocketServer } from "ws";

import { getWeather } from "../services/weatherService";
import { getCityCoordinates } from "../services/geocodingService";

export function setupWeatherSocket(server: Server) {
  const wss = new WebSocketServer({ server });

  wss.on("connection", (ws) => {
    console.log("Cliente conectado");

    let interval: NodeJS.Timeout;

    ws.on("message", async (message) => {
      try {
        // recebe a cidade enviada pelo frontend
        const parsedMessage = JSON.parse(message.toString());

        const city = parsedMessage.city;

        console.log("Cidade recebida:", city);

        // limpa atualização anterior
        if (interval) {
          clearInterval(interval);
        }

        const sendWeather = async () => {
          try {
            const coordinates = await getCityCoordinates(city);

            const weatherData = await getWeather(
              String(coordinates.latitude),
              String(coordinates.longitude)
            );

            ws.send(
              JSON.stringify({
                city: coordinates.name,
                country: coordinates.country,
                temperature: weatherData.current_weather.temperature,
                windspeed: weatherData.current_weather.windspeed,
                time: weatherData.current_weather.time,
              })
            );
          } catch (error) {
            ws.send(
              JSON.stringify({
                error: "Erro ao buscar clima",
              })
            );
          }
        };

        // envia imediatamente
        sendWeather();

        // atualiza a cada 5 segundos
        interval = setInterval(sendWeather, 5000);
      } catch (error) {
        console.log("Erro websocket");
      }
    });

    ws.on("close", () => {
      console.log("Cliente desconectado");

      if (interval) {
        clearInterval(interval);
      }
    });
  });
}