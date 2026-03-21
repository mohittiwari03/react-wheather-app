import { useState } from "react";
import "./App.css";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import WeatherApp from "./WeatherApp";

function App() {
   const INIT_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <div className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:`url(${INIT_URL})`}}>
        <div className="min-h-screen w-full p-4 pt-20 sm:p-10 bg-black/50 text-white flex justify-center lg:items-center
        ">
          <WeatherApp />
        </div>
      </div>
    </>
  );
}

export default App;
