import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import WeatherCard from "../components/WeatherCard";
const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState([]);
  const [location, setLocation] = useState("london");

  const fetchWeatherData = async () => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    const updatedData = updateWeatherState(response.data);
    setWeatherData(updatedData);
  };

  useEffect(() => {
    fetchWeatherData();
  }, [location]);

  const updateWeatherState = (data) => {
    if (!data || !data.list) {
      return [];
    }
    const tempDays = [];
    const dayIndices = getDayIndices(data);

    for (let i = 0; i < 5; i++) {
      const currentData = data.list[dayIndices[i]];
      tempDays.push({
        date: currentData.dt_txt,
        weather_desc: currentData.weather[0].description,
        icon: currentData.weather[0].icon,
        temp: currentData.main.temp,
      });
    }
    return tempDays;
  };
  // returns array with Indices of the next five days in the list from the API data (every day at 12:00 pm)
  const getDayIndices = (data) => {
    let dayIndices = [0];
    let currentDay = data.list[0].dt_txt.slice(8, 10);

    for (let i = 1; i < data.list.length; i++) {
      let day = data.list[i].dt_txt.slice(8, 10);
      let hour = data.list[i].dt_txt.slice(11, 13);

      if (day !== currentDay && hour === "15") {
        dayIndices.push(i);
        currentDay = day;

        // Stop after finding 4 different days
        if (dayIndices.length === 5) {
          break;
        }
      }
    }
    return dayIndices;
  };

  const weatherBoxes = weatherData
    .slice(1)
    .map((day) => <WeatherCard {...day} key={new Date(day.date).getDay()} />);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        fetchWeatherData,
        location,
        setLocation,
        weatherBoxes,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);

export default WeatherContext;
