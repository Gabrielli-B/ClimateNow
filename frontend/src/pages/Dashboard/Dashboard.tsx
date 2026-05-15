import { useEffect, useState } from "react";

type WeatherData = {
  city: string;
  country: string;
  temperature: number;
  windspeed: number;
  time: string;
};

export function Dashboard() {
  const [city, setCity] = useState("Porto Alegre");

  const [weather, setWeather] =
    useState<WeatherData | null>(null);

  useEffect(() => {
    const socket = new WebSocket(
      "ws://localhost:3001"
    );

    socket.onopen = () => {
      console.log("Conectado no websocket");

      socket.send(
        JSON.stringify({
          city,
        })
      );
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      console.log(data);

      setWeather(data);
    };

    return () => {
      socket.close();
    };
  }, [city]);

  return (
    <div>
      <h1>Dashboard ClimateNow</h1>

      <input
        type="text"
        placeholder="Digite uma cidade"
        value={city}
        onChange={(e) =>
          setCity(e.target.value)
        }
      />

      {weather && (
        <div>
          <h2>
            {weather.city} - {weather.country}
          </h2>

          <p>
            Temperatura:
            {weather.temperature}°C
          </p>

          <p>
            Vento:
            {weather.windspeed} km/h
          </p>

          <p>
            Atualizado em:
            {weather.time}
          </p>
        </div>
      )}
    </div>
  );
}