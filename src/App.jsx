import { useState } from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <>
      <div className="min-h-screen w-full p-4 pt-20 sm:p-10 bg-black text-white flex justify-center lg:items-center">
        <WeatherApp />
      </div>
    </>
  );
}

export default App;
