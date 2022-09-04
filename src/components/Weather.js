import React, { useState } from "react";
import axios from "axios";

const WeatherSearch = (props) => {
const [city, setCity] = useState("");
const [weather, setWeather] = useState({});
const [loaded, setLoaded] = useState(false);

const showWeather = (response) => {
    setLoaded(true);
    setWeather({
        temperature: Math.round(response.data.main.temp),
        wind: response.data.wind.speed,
        humidity: response.data.main.humidity,
        icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const apiKey = "3a94f3778290bfeee61278505dbbe51d";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showWeather);
};

const updateCity = (event) => {
    setCity(event.target.value);
};

let form = (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            type="search"
            placeholder="Enter city name"
            onChange={updateCity}
            />
            <input type="submit" value="Search" />
        </form>
        <div className="result">
            <div className="left">
                <p>
                    Temperature: <b>{weather.temperature}</b> °C
                </p>
                <p>
                    Wind: <b>{weather.wind}</b> km/h
                </p>
                <p>
                    Humidity: <b>{weather.humidity}</b> %
                </p>
            </div>
            <div className="right">
                <p>
                    {" "}
                    in <strong>{city}</strong>
                </p>
                <p>
                    <img src={weather.icon} alt={weather.description} />
                </p>
            </div>
        </div>
    </div>
);

    if (loaded) {
        return <div>{form}</div>;
        } else {
            return form;
        }
};

export default WeatherSearch;
