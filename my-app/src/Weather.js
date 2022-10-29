import React from "react";
import axios from "axios";
export default function Weather(props) {
  function showTemperature(response) {
    console.log(response.data);
    alert(
      `The temperature in ${response.data.name} is ${Math.round(
        response.data.main.temp
      )} C`
    );
  }

  let apiKey = "2af1ab046f283f38f8ddb93800aaf9bd";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

  axios.get(url).then(showTemperature);
  return <h1> Hello there </h1>;
}
