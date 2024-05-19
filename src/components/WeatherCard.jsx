const WeatherCard = ({ date, temp, weather_desc, icon }) => {
  return (
    <div className="col-6 col-sm-3 mb-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{date}</h5>
          <img
            src={`/assets/weather-icons/${icon}.svg`}
            className="card-img-top weather-icon"
            alt="weather icon"
          />
          <p className="card-text">{Math.floor(temp - 273.15)}°C</p>
          <p className="card-text">{weather_desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
