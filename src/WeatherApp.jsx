import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";

function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "-",
    feelslike: "-",
    temp: "-",
    tempMin: "-",
    tempMax: "-",
    humidity: "-",
    weather: null,
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  } 

  return (
    <div className="w-full max-w-3xl 
    ">
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo} />
    </div>
  );
}

export default WeatherApp;
