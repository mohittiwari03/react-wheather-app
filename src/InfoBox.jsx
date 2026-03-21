import React from "react";

function InfoBox({ info }) {
  const WEATHER_VIDEO_URL = "https://www.pexels.com/download/video/29693156/";

  const INIT_URL =
    "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1075&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    const CLOUDY_URL = "https://www.pexels.com/download/video/33847367/"

  let COLD_URL = "https://www.pexels.com/download/video/36286233/";

  let HOT_URL = "https://www.pexels.com/download/video/6980396/";

  let RAIN_URL = "https://www.pexels.com/download/video/32601707/";

  const getWeatherMedia = (info) => {
    if (!info || !info.weather)
      return {
        type: "video",
        src: WEATHER_VIDEO_URL,
      };

    const condition = info.weather.toLowerCase();

    const { temp, humidity } = info;

    if (humidity > 80 && temp > 20) {
      return { type: "video", src: RAIN_URL };
    }

    if (temp >= 15 && temp <= 30 && humidity >= 40 && humidity <= 75) {
      return { type: "video", src: CLOUDY_URL}; 
    }

    if (temp < 15 && humidity > 60) {
      return { type: "video", src: COLD_URL };
    }

    if (temp > 30 && humidity < 50) {
      return { type: "video", src: HOT_URL };
    }

    return { type: "video", src: WEATHER_VIDEO_URL };
  };

  const media = getWeatherMedia(info);

  return (
    <div
      className="mt-8 w-full shadow-black p-6 sm:py-10 flex flex-col justify-center items-center border-2 rounded-2xl border-gray-900 text-center
    backdrop-blur-xs bg-white/5 shadow-xl
    "
    >
      {media.type === "video" ? (
        <video
          src={media.src || WEATHER_VIDEO_URL}
          autoPlay
          loop
          muted
          className="w-full rounded-xl sm:w-3/4 md:w-1/2 h-48 sm:h-64 object-cover"
        >
          <source src="/weather_video.mp4" type="video/mp4" />
        </video>
      ) : (
        <img
          src={media.src}
          alt="weather"
          className="w-full rounded-xl sm:w-3/4 md:w-1/2 h-48 sm:h-64 object-cover"
        />
      )}
      <h3 className="my-4 font-bold text-xl sm:text-2xl">
        {info.city ? info.city : info.name}
      </h3>
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
