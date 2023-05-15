import React, { useState } from "react";
import ListItem from "./components/ListItem";
import Axios, { AxiosResponse } from "axios";

const DEVELOPER_KEY = "YOUR_DEVELOPER_KEY";

interface WeatherResponse {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain: {
    "1h": number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export default function App() {
  const [location, setLocation] = useState(null);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorResponse, setErrorResponse] = useState("");
  const [dataArray, setDataArray] = useState([]);

  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setLocation(event.target.value);
  }

  async function getWeather() {
    setIsLoading(true);
    setErrorResponse("");
    await Axios({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${DEVELOPER_KEY}&units=metric`,
      method: "GET",
    })
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
        setDataArray([...dataArray, response.data]);
      })
      .catch(function (error) {
        setIsLoading(false);
        setErrorResponse(error.response.data);
      });
  }
  console.log("data = ", data);
  console.log("errorResponse = ", errorResponse);
  console.log("dataArray", dataArray);

  return (
    <main className="border-4 border-cyan-500 flex flex-col h-screen overflow-auto bg-[#222] text-white items-center pt-10">
      <section
        id="top-banner"
        className="flex flex-col gap-10 items-center text-white bg-gradient-to-r from-red-600 to-purple-600 p-1  "
      >
        <div
          id="container"
          className="h-full w-full bg-[#222] p-8 items-center justify-center"
        >
          <h1
            id="heading"
            className="text-6xl font-bold tracking-wide pb-8 max-[700px]:text-5xl max-[500px]:text-3xl"
          >
            MyWeatherApp
          </h1>
          <form className=" relative flex items-center w-full max-[700px]:flex-col  max-[700px]:items-start">
            <input
              className="focus:outline-none text-white text-2xl h-full w-full pl-1 rounded-md max-[700px]:w-full bg-[#222] border-2 border-slate-500 mr-2 "
              type="text"
              placeholder="Search for a city..."
              onChange={handleChange}
              // autoFocus
            />
            {!location ? (
              <button
                type="submit"
                className=" bg-slate-700 text-base h-full tracking-widest px-4 rounded-md max-[700px]:w-full max-[700px]:mt-5 max-[700px]:mb-0 max-[700px]:mx-0 cursor-not-allowed opacity-50"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Search
              </button>
            ) : (
              <button
                type="submit"
                className=" bg-slate-700 text-base h-full tracking-widest px-4 rounded-md hover:bg-slate-500 max-[700px]:w-full max-[700px]:mt-5 max-[700px]:mb-0 max-[700px]:mx-0 "
                onClick={(e) => {
                  e.preventDefault();
                  getWeather();
                }}
              >
                Search
              </button>
            )}
          </form>
          {errorResponse ? (
            <div
              id="msg"
              className=" max-w-md min-h-[40px] text-sm font-bold text-red-700 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-3 max-[500px]:text-xs max-[700px]:static max-[700px]:min-h-0"
            >
              Error {errorResponse.cod}: {errorResponse.message}. Please enter a
              valid city name.
            </div>
          ) : null}
        </div>
      </section>

      {dataArray ? (
        <section
          id="api-section"
          className="mt-16 mb-5 mx-0 max-[700px]:mt-5 border-4 border-green-600"
        >
          <div id="container" className="">
            <ul
              id="cities"
              className="grid gap-y-8 gap-x-5 grid-cols-4 max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1 "
            >
              {dataArray.map((cityData) => {
                return <WeatherCard isLoading={isLoading} data={cityData} />;
              })}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  );
}

const WeatherCard = ({
  data,
  isLoading,
}: {
  data: WeatherResponse;
  isLoading: boolean;
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data) {
    return null;
  }

  const { main, name, sys, weather } = data;
  const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
  return (
    <ListItem
      locationCity={name}
      locationCountry={sys.country}
      temperature={Math.round(main.temp)}
      iconSrc={icon}
      iconAlt={weather[0]["description"]}
      iconCaption={weather[0]["description"]}
    />
  );
};
