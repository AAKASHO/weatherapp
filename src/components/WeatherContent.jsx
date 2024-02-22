import React, { useEffect } from 'react'
import { useWeatherContext } from '../context/WeatherProvider '

import Clear from "../images/sun.png"
import Fog from "../images/fog.png"
import Rain from "../images/rain.png"
import Snow from "../images/snow.png"
import Clouds from "../images/cloud.png"
import Wind from "../images/wind.png"
import Mist from "../images/fog.png"

import { BiWater } from "react-icons/bi";
import { PiWindBold } from "react-icons/pi";
import NotFound from './NotFound'


const WeatherContent = () => {

    const { result } = useWeatherContext();

    useEffect(() => {
        console.log(result)
    }, [result])


    const checkImage = (image) => {
        switch (image) {
            case 'Clear':
                return Clear;

            case 'Fog':
                return Fog;

            case "Smoke":
                return Fog;

            case 'Rain':
                return Rain;

            case 'Snow':
                return Snow;

            case 'Clouds':
                return Clouds;

            case 'Haze':
                return Wind;

            case 'Mist':
                return Mist;

            default:
                return ""
        }
    }

    if (!result) return null

    if (result.cod === "404") {
        return <NotFound />
    }

    return (
        <div className={`weather-container ${result ? "visible" : "hidden"}`}>
            <div class="weather-box">
                <img src={checkImage(result.weather[0].main)} width={200} alt='Weather Icon' />
                <p class="temperature">{Math.round(result.main.temp)}<span>°C</span></p>
                <p class="description">{result.weather[0].description}</p>
            </div>

            <div class="weather-details">
                <div class="humidity">
                    <BiWater />
                    <div>
                        <p>{result.main.humidity}%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="wind">
                    <PiWindBold />
                    <div>
                        <p>{Math.round(result.wind.speed)}Km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherContent