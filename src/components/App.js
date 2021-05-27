import React from "react";
import DayList from "./DayList/DayList";

/**
 * App Components
 */
const App = () => (
  <div className="App">
      <header>
          <h1>This is One-Shot Weather App Exercise</h1>
      </header>
      <section>
          <ul>
              <li>Provide 5 day weather forecast by city name (you can hardcode it) </li>
              <li>OpenWeatherMap API Documentation: <a rel="noreferrer" href="http://openweathermap.org/forecast5" target="_blank">http://openweathermap.org/forecast5</a> </li>
              <li>
                  API_KEY: 00f024c81fe188ad264aedc20c7ec218
                  WEATHER_API_URI: https://api.openweathermap.org/data/2.5/forecast

                  /**
                  * getWeatherForecast
                  *
                  * Sample Call:
                  * https://api.openweathermap.org/data/2.5/forecast?q=London&appid=00f024c81fe188ad264aedc20c7ec218&units=metric
                  */
              </li>
              <li>API Key is provided in /api.js</li>
              <li>Use any supporting technologies, package management, build systems, component libraries that you are familiar with and feel are appropriate.</li>
              <li>You can use any 3-rd party library.</li>
          </ul>
      </section>
      <section className="main-container">
          <DayList />
      </section>
  </div>
);

export default App;
