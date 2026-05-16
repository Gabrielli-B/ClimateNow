import { useEffect, useState } from "react";
import { WiDaySunny, WiCloud, WiRain, WiSnow, WiThunderstorm, } from "react-icons/wi";
import "./Dashboard.css";
import iconClimateNow from "../../assets/icon_climateNow.png";
import icon_sun from"../../assets/icon_sun.png";
import icon_cloud from"../../assets/icon_cloud.png";
import icon_cloud_sun from"../../assets/icon_cloud_sun.png";
import icon_rain from"../../assets/icon_rain.png";
import icon_snow from"../../assets/icon_snow.png";

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
      return<img src={icon_sun} alt="Sol"/>
    }
    if (code <= 3) {
      return<img src={icon_cloud_sun} alt="Nublado"/>
    }
    if (code <= 67) {
      return<img src={icon_rain} alt="Chuva"/>
    }
    if (code <= 77) {
      return<img src={icon_snow} alt="Neve"/>
    }
    return<img src={icon_rain} alt="Tempestade"/>
  }
  const [city, setCity] = useState("");
  const [searchCity, setSearchCity] = useState("");

  const [weather, setWeather] =
    useState<WeatherData | null>(null);

  useEffect(() => {

    if (!searchCity) return;

    const socket = new WebSocket(
      "ws://localhost:3001"
    );

    socket.onopen = () => {
      console.log("Conectado no websocket");

      socket.send(
        JSON.stringify({
          city: searchCity,
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
  }, [searchCity]);

  return (
    <div className="container-dashboard">

      <header className="header-dashboard">

        <div className="title">

          <img src={iconClimateNow} alt="Logo ClimateNow" />
          <h1>Climate</h1>
          <h1 className="titleColor">Now</h1>

        </div>
      </header>

      <div className="content-dashboard">

        <nav className="nav-dashboard">

        </nav>

        <main className="main-dashboard">

          <h1>Dashboard</h1>
          <p className="d-p">Acompanhe as condições climáticas em tempo real</p>

          <div className="search-city">
            <input
              type="text"
              placeholder="Digite uma cidade"
              value={city}
              onChange={(e) =>
                setCity(e.target.value)
              }
            />
            <button onClick={() => setSearchCity(city)}>
              Buscar
            </button>
          </div>

          {weather && (
            <div className="weather-card">
              <div className="weather-left">
                <div className="weather-icon">
                  {getWeatherIcon(weather.weathercode)}
                </div>

                <div className="weather-info">
                  <h2>
                    {weather.city} 
                    <span> - {weather.country}</span>
                  </h2>

                  <h1>
                    {weather.temperature}°C
                  </h1>

                  <p>
                    Vento:
                    {weather.windspeed} km/h
                  </p>
                </div>
              </div>
              <p>
                Atualizado em:
                {weather.time}
              </p>
            </div>
          )}

        </main>

      </div>

    </div>
  );
}