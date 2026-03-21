import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

function SearchBox({ updateInfo }) {
  let [city, setCity] = useState("");
  let [error, setError] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "eb94b40fb313ce74aefe7c2f2be53afa";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,
      );
      let jsonReasponse = await response.json();
      console.log(jsonReasponse);
      let result = {
        temp: jsonReasponse.main.temp,
        tempMin: jsonReasponse.main.temp_min,
        tempMax: jsonReasponse.main.temp_max,
        humidity: jsonReasponse.main.humidity,
        feelslike: jsonReasponse.main.feels_like,
        weather: jsonReasponse.weather[0].description,
        name: jsonReasponse.name,
      };
      console.log(result);
      return result;
    } catch (error) {
      setError("No such place found");
      throw error
    }
  };

  let handleChange = (e) => {
    setCity(e.target.value);
  };

  let handleSubmit = async (e) => {
    try {
      e.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (error) {
      setError("No such place found in our database");
    }
  };

  return (
    <>
      <div className="relative font-semibold text-lg sm:text-xl flex flex-col justify-center items-center p-4 sm:py-5 border-2 rounded-2xl border-gray-900 w-full
      
    backdrop-blur-xs shadow-xl
      ">
        <h3 className="pb-3">Search for the weather</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <input
            required
            className=" text-white text-base border p-2 rounded-lg  placeholder:px-2 placeholder:font-normal w-full sm:w-auto"
            placeholder="Enter city"
            onChange={handleChange}
            id="City"
            type="text"
          />
          <button
            className="bg-white text-black font-mono font-medium px-4 py-2 sm:px-3 sm:py-1 rounded-lg w-full sm:w-auto"
            type="submit"
            size="small"
            variant="contained"
          >
            Search
          </button>
          {error && <p className="text-red-600 font-extralight font-serif">No such place found ! </p>}
        </form>
      </div>
    </>
  );
}

export default SearchBox;
