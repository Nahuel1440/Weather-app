import React, { useState } from "react";
import "./App.css";
import Cards from "../components/Cards";
import NavWithSearch from "../components/NavWithSearch";
import video from "../img/clouds_-_16495 (Original).mp4";
import { Route } from "react-router-dom";
import City from "../components/City";

export default function App() {
  const [cities, setCities] = useState([]);
  const apiKey = "4ae2636d8dfbdc3044bede63951a019b";

  function onSearch(city) {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((recurso) => {
        if (
          recurso.main !== undefined &&
          !cities.some((elem) => elem.id === recurso.id)
        ) {
          const newCity = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon,
          };
          setCities((oldCities) => [newCity, ...oldCities]);
        } else if (recurso.main !== undefined) {
          alert(`Ya se esta mostrando ${city}`);
        } else alert("Ciudad no encontrada");
      })
      .catch((e) => console.log(e));
  }

  function onClose(e, id) {
    setCities((oldCities) => oldCities.filter((elem) => elem.id !== id));
  }

  function onFilter(id) {
    let ciudad = cities.filter((c) => c.id === parseInt(id));
    if (ciudad.length > 0) {
      return ciudad[0];
    } else {
      return null;
    }
  }

  return (
    <div className="App">
      <video src={video} loop={true} autoPlay={true} muted={true} />
      {/* https://vod-progressive.akamaized.net/exp=1651633021~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F3301%2F12%2F316506213%2F1224524897.mp4~hmac=177ea47277484dc7812fb18a1e74c92d15e47f6f56ff85063b5d6c474a3bffaa/vimeo-prod-skyfire-std-us/01/3301/12/316506213/1224524897.mp4*/}
      <Route path="/" render={() => <NavWithSearch onSearch={onSearch} />} />
      <Route
        exact
        path="/"
        render={() => <Cards cities={cities} onClose={onClose} />}
      />
      {/* <Route path='/about' component={"About"}/> */}
      <Route
        path="/city/:id"
        render={({ match }) => <City city={onFilter(match.params.id)} />}
      />
    </div>
  );
}
