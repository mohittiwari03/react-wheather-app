import React from "react";

function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1740235228766-3a3cef4c13c0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="mt-8 w-full shadow-black p-6 sm:py-10 flex flex-col justify-center items-center border rounded-2xl border-gray-700 text-center">
      <img
        className="bg-slate-600 rounded-3xl border border-slate-500 w-full sm:w-3/4 md:w-1/2 h-48 sm:h-64 object-cover"
        src={INIT_URL}
        alt=""
      />
      <h3 className="my-4 font-bold text-xl sm:text-2xl">{info.city? info.city: info.name}</h3>
      <div className="text-sm sm:text-base flex flex-col gap-1 ">
        <p>Temperature - {info.temp}&deg;C</p>
        <p>Humidity - {info.humidity}</p>
        <p>Min Temp - {info.tempMin}</p>
        <p>Max Temp - {info.tempMax}</p>
        <p>The Weather feels like - {info.feelslike}&deg;C</p>
        <p>Weather - {info.weather}</p>
      </div>
    </div>
  );
}

export default InfoBox;
