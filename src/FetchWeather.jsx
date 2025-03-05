// Importing Necessary Component
import React, { useState } from "react";

function Display() {
  const apiKey = "3cb8cc9e1bcd4dcf91792013240609"; // Make sure this key is valid

  // States To Handle The Fetching
  const [value, setValue] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  // function To Fetch Data
  const fetchWeatherData = (event) => {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${value}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.location) {
          setWeatherData(data); // Set the weather data
          setErrorMessage(null); // Clear any previous error message
        } else {
          setErrorMessage("City not found!!"); // Set error message for city not found
        }
      })
      .catch((error) => {
        setErrorMessage(`Error while fetching data: ${error.message}`); // Set error message
        console.log("Error while fetching data: ", error);
      });
  };

  return (
    <section className="weather-container">
      <h1 className="title">Weather App</h1>
      <form id="weather-form" onSubmit={fetchWeatherData}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="city"
          placeholder="Enter City Name"
          required
        />
        <button type="submit">Get Weather</button>
      </form>
      <div id="weather-info">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {weatherData && (
          <div className="weather-details">
            <img
              className="weather-icon"
              src={`https:${weatherData.current.condition.icon}`}
              alt={weatherData.current.condition.text}
            />
            <h3 className="weather-location">
              Weather in {weatherData.location.name}, {weatherData.location.region}, {weatherData.location.country}
            </h3>
            <div className="weather-stats">
              <p><strong>Day/Night:</strong> {weatherData.current.is_day ? "Day" : "Night"}</p>
              <p><strong>Latitude:</strong> {weatherData.location.lat}</p>
              <p><strong>Longitude:</strong> {weatherData.location.lon}</p>
              <p><strong>Local Time:</strong> {weatherData.location.localtime}</p>
            </div>

            <h3 className="conditions-heading">Current Conditions</h3>
            <div className="weather-conditions">
              <p><strong>Temperature:</strong> {weatherData.current.temp_c} °C</p>
              <p><strong>Feels Like:</strong> {weatherData.current.feelslike_c} °C</p>
              <p><strong>Wind:</strong> {weatherData.current.wind_mph} mph / {weatherData.current.wind_kph} kph</p>
              <p><strong>Direction:</strong> {weatherData.current.wind_dir} ({weatherData.current.wind_degree}°)</p>
              <p><strong>Precipitation:</strong> {weatherData.current.precip_mm} mm</p>
              <p><strong>Humidity:</strong> {weatherData.current.humidity}%</p>
              <p><strong>Visibility:</strong> {weatherData.current.vis_km} km</p>
              <p><strong>UV Index:</strong> {weatherData.current.uv}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// Exporting The Component
export default Display;
