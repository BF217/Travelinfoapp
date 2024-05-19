import React from "react";
import FavouriteButton from "./FavouriteButton";
import { useWeather } from "../contexts/WeatherContext";
import { useFavourites } from "../contexts/UserFavouritesContext";

const SearchResults = () => {
  const { favourites } = useFavourites();
  const { weatherBoxes, weatherData, location } = useWeather();
  const today = weatherData[0];

  return (
    <div className="responsive-bg text-sm-center container-fluid d-flex flex-column align-items-center min-vh-50">
      <h1 className="mt-2">Showing you</h1>
      <h1>{location}</h1>
      <div className="d-flex">
        <FavouriteButton isBookmarked={favourites.includes(location)} />
        <p>click to add to favourites</p>
      </div>
      <div className="container bg-white mt-2">
        <div className="row">
          <h2>Today's weather:</h2>
          <p>{today.date}</p>
        </div>
        <div className="row">
          <div className="col-6">
            <img
              className="img-fluid weather-icon"
              src={`/assets/weather-icons/${today.icon}.svg`}
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-between">
            <p>{Math.floor(today.temp - 273.15)}°C</p>
            <p>{today.weather_desc}.</p>
          </div>
        </div>
        <div className="row mt-2">{weatherBoxes}</div>
      </div>
    </div>
  );
};

export default SearchResults;
