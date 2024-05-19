import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useWeather } from "../contexts/WeatherContext";

const useLocationSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { fetchWeatherData, setLocation } = useWeather();

  const navigate = useNavigate();

  // function that sets a timeout for other functions, primarily to prevent overfetching data from api
  const debounce = (func, delay) => {
    let timoutId;
    return function (...args) {
      clearTimeout(timoutId);
      timoutId = setTimeout(() => func.apply(this, args), delay);
    };
  };

  const debouncedSearch = debounce((value) => {
    if (value.trim() === "") {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }
    //  get request to api that returns up to 5 location suggestions
    const suggestions = async () => {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=3&appid=${
          // this api is not the best as it returns many duplicates.
          import.meta.env.VITE_WEATHER_API_KEY
        }`
      );
      return response.data;
    };

    suggestions().then((res) => {
      const names = res.map((item) => item.name);
      setSuggestions(names);
      setShowSuggestions(true);
    });
  }, 2000); // delay search suggestions by 2000ms to prevent overuse of my api key and because the api suggestions are not good until enough characters are used.

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearchTerm(value); // updates state of entered search term
    debouncedSearch(value); // ensures suggestions are delayed
  };

  const handleSuggestionClick = (value) => {
    setSearchTerm(value);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLocation(searchTerm);
    await fetchWeatherData(searchTerm);

    navigate(`results/${searchTerm}`);
  };

  return {
    searchTerm,
    suggestions,
    showSuggestions,
    setShowSuggestions,
    handleSearch,
    handleSuggestionClick,
    handleSubmit,
  };
};

export default useLocationSearch;
