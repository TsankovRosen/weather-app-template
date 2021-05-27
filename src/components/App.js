import React from "react";
import DayList from "./DayList/DayList";

/**
 * App Component
 */
const App = () => (
  <div className="App">
      <header>
          <h1>Weather App Exercise</h1>
      </header>
      <section>
          <ul>
              <li>Provide 5 day weather forecast by city name.</li>
              <li>OpenWeatherMap API Documentation: <a rel="noreferrer" href="http://openweathermap.org/forecast5" target="_blank">http://openweathermap.org/forecast5</a> </li>
              <li>API_KEY: 00f024c81fe188ad264aedc20c7ec218</li>
              <li>WEATHER_API_URI: https://api.openweathermap.org/data/2.5/forecast</li>
              <li>
                  Sample Call:
                  <br />
                  <a target="_blank" href="https://api.openweathermap.org/data/2.5/forecast?q=London&appid=00f024c81fe188ad264aedc20c7ec218&units=metric">
                      https://api.openweathermap.org/data/2.5/forecast?q=London&appid=00f024c81fe188ad264aedc20c7ec218&units=metric
                  </a>
              </li>
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
