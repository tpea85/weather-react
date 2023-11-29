import React, { useState } from "react";
import axios from "axios";

export default function Search(props) {
  const [temperature, setTemperature] = useState(null);
  const [city, setCity] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function showTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function fetchData(event) {
    event.preventDefault();
    let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  if (temperature !== null) {
    return (
      <div>
        <form onSubmit={fetchData}>
          <input
            onChange={handleChange}
            type="Search"
            placeholder="Enter a city.."
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature: {Math.round(temperature)} °C </li>
          <li>Description: {description}</li>
          <li>Humidity: {Math.round(humidity)} %</li>
          <li>Wind: {Math.round(wind)} km/h</li>
          <li>
            <img alt="icon" src={icon} />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={fetchData}>
          <input
            onChange={handleChange}
            type="Search"
            placeholder="Enter a city.."
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
