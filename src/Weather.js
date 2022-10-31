import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function handleWeather(response) {
    console.log(response.data);
    setLoaded(true);

    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `2af1ab046f283f38f8ddb93800aaf9bd`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    console.log(url);
    axios.get(url).then(handleWeather);
    //access to the city
    //alert(city);
    //1.API call
    //2.update the weather UI
  }

  function handleCity(event) {
    setCity(event.target.value);
  }

  let form = (
    <div>
      <h1> Weather App </h1>
      <form onSubmit={handleSubmit}>
        <input type="search" placeholder="Enter a city" onChange={handleCity} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li> Temperature {Math.round(weather.temperature)} °C</li>
          <li> Description: {weather.description} </li>
          <li> Humidity {weather.humidity}%</li>
          <li>Wind {weather.wind} km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
