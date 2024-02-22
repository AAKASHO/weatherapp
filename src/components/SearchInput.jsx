import React, { useState } from 'react'
// icons
import { PiMapPinLineBold } from "react-icons/pi";
import { RiSearchLine } from "react-icons/ri";
// Context
import { useWeatherContext } from '../context/WeatherProvider ';


const SearchInput = () => {
    // e.preventDefault();
    const { city, setCity, fetchWeather } = useWeatherContext();
    const [result, setResults]=useState([]);

    const submitHandler = async(e) => {
        e.preventDefault();
        setResults("");
        fetchWeather();
    }
    const handleSelect=async(resulte,e)=>{
        e.preventDefault();
        setCity(resulte.city);
        submitHandler(e);
    }


    const handleOnChange=async(e)=>{
        setCity(e.target.value);
        const response = await fetch(`https://api.geoapify.com/v1/geocode/autocomplete?text=${city}&format=json&apiKey=263f159b5a7d494c89954f20d031e8d6`);
        const data = await response.json();      
        setResults(data.results);
        // console.log(data);
        // console.log(result);
    }




    return (
        <div>

            <form className='form-input' onSubmit={(e) => submitHandler(e)}>
                <div className='input-container'>
                    <PiMapPinLineBold />
                    <input type='text' placeholder='Enter your location..' onChange={handleOnChange} value={city} />
                </div>
                <button className='input-button' onClick={(e) => submitHandler(e)}>
                    <RiSearchLine />
                </button> 
            </form>
            <div>
    {
        result && result.length > 0 ? (
            result.slice(0,3).map((resulte, id) => (
                <div className='suggestions' key={id} onClick={(e) => handleSelect(resulte,e)}>{resulte.city}, {resulte.country}</div>
            ))
        ) : (
            <div> 

            </div>
        )
    }
</div>
        </div>

    )
}

export default SearchInput