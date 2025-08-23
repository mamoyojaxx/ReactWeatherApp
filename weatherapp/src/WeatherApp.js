import "./styles.css";

export default function WeatherApp() {
  return (
    <div className="weather_app">
      <header>
        <div className="logo">
          <img src="images/weather_logo.png" alt="logo" className="fwalogo" />
          <h1 className="fwa">Full Weather App</h1>
        </div>
        <form className="search-form">
          <input
            type="search"
            name="city"
            placeholder="Enter a city"
            required
            className="search-form-input"
          />
          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>
      <main>
        <div className="app_data">
          <div>
            <h1 className="app_city">Harare</h1>
            <p className="app_details">
              <span></span> <span></span>
              <br />
              Humidity: <strong>60% </strong>
              Windspeed: <strong>7.2km/hr</strong>
            </p>
          </div>
          <div className="app_temp_container">
            <div></div>
            <div className="app_temp"></div>
            <div className="app_unit">°C</div>
          </div>
        </div>
        <div className="app-forecast"></div>
      </main>
      <footer>
        This project has been done by{" "}
        <a
          href="https://github.com/mamoyojaxx"
          target="_blank"
          rel="noreferrer"
        >
          RJ Mtomba
        </a>{" "}
        is{" "}
        <a
          href="https://github.com/mamoyojaxx/ReactWeatherApp"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on Github
        </a>{" "}
        and{" "}
        <a
          href="https://reactweath.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
