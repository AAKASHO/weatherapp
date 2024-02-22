import React, { createContext, useContext, useState } from 'react';

const WeatherContext = createContext();

export const useWeatherContext = () => {
    return useContext(WeatherContext);
};

// const response = await fetch(https://api.geoapify.com/v1/geocode/autocomplete?text=YOUR_TEXT&format=json&apiKey=YOUR_API_KEY);
// const data = await response.json();      

// console.log(data);

export const WeatherProvider = ({ children }) => {
    const [city, setCity] = useState('');
    
    const [result, setResult] = useState(null);

    const apiKey = "d0b1f3b332aea712de95f284306bca64";

    const fetchWeather = async () => {
        if (city) {
            try {
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
                const data = await response.json();
                setResult(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        }
    };

    return (
        <WeatherContext.Provider
            value={{
                city,
                setCity,
                result,
                fetchWeather,
            }}
        >
            {children}
        </WeatherContext.Provider>
    );
};