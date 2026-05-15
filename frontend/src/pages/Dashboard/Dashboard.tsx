import { useEffect, useState } from "react";
import { WiDaySunny,WiCloud,WiRain,WiSnow,WiThunderstorm,} from "react-icons/wi";

type WeatherData = {
  city: string;
  country: string;
  temperature: number;
  windspeed: number;
  weathercode: number;
  time: string;
};

export function Dashboard() {

   function getWeatherIcon(code: number) {
        if (code === 0) {
            return <WiDaySunny />;
        }
        if (code <= 3) {
            return <WiCloud />;
        }
        if (code <= 67) {
            return <WiRain />;
        }
        if (code <= 77) {
            return <WiSnow />;
        }
        return <WiThunderstorm />;
    }
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
          <div className="weather-icon">
            {getWeatherIcon(weather.weathercode)}
          </div>
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