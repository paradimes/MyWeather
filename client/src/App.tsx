import React, { useState, useEffect } from "react";
import { WeatherResponse, ErrorType } from "./components/customTypes";
import WeatherCard from "./components/WeatherCard";
import Axios from "axios";

export default function App() {
  const [location, setLocation] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorResponse, setErrorResponse] = useState<ErrorType>({});
  const [dataArray, setDataArray] = useState<WeatherResponse[]>([]);
  const [cityNames, setCityNames] = useState<string[]>([]);
  const [visited, setVisited] = useState<string[]>([]);
  const [repeat, setRepeat] = useState<boolean>(false);

  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setLocation(event.target.value);
  }

  useEffect(() => {
    if (location && location.length >= 3) {
      Axios.get(
        `http://localhost:3002/api/get/mobileMake/${location.slice(0, 3)}`
      ).then((response) => {
        const data = response.data;
        const finalArray: string[] = data.map(
          (obj: { city_country: string }) => obj.city_country
        );
        setCityNames([...finalArray]);
      });
    }
  }, [location]);

  async function getWeather() {
    setIsLoading(true);
    setErrorResponse({});
    setRepeat(false);
    await Axios({
      url: `http://localhost:3002/api/get/getWeather/${location}`,
      method: "GET",
    })
      .then((response) => {
        setIsLoading(false);
        if (
          visited.includes(
            response.data.name + ", " + response.data.sys.country
          )
        ) {
          setRepeat(true);
        } else {
          setDataArray([...dataArray, response.data]);
          setVisited([
            ...visited,
            response.data.name + ", " + response.data.sys.country,
          ]);
        }
      })
      .catch(function (error) {
        setIsLoading(false);
        setErrorResponse(error.response.data);
      });
  }

  return (
    <main className="flex flex-col h-screen overflow-auto bg-[#222] text-white items-center pt-10">
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
              autoFocus
              name="mobileMake"
              list="suggestion"
            />
            <datalist id="suggestion">
              {cityNames.map((city, index) => {
                while (index <= 10) {
                  return (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  );
                }
              })}
            </datalist>
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
          {errorResponse.message || repeat ? (
            <div
              id="msg"
              className=" max-w-md min-h-[40px] text-sm font-bold text-red-700 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-3 max-[500px]:text-xs max-[700px]:static max-[700px]:min-h-0"
            >
              {errorResponse.message
                ? `Error: ${errorResponse.message}. Please enter a valid city name.`
                : `You have already searched for this location.`}
            </div>
          ) : null}
        </div>
      </section>

      {dataArray.length ? (
        <section id="api-section" className="mt-16 mb-5 mx-0 max-[700px]:mt-5">
          <div id="container" className="">
            <ul
              id="cities"
              className="grid gap-y-8 gap-x-5 grid-cols-4 max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1 "
            >
              {isLoading
                ? "Loading..."
                : dataArray.map((cityData, index) => {
                    return <WeatherCard data={cityData} key={index} />;
                  })}
            </ul>
          </div>
        </section>
      ) : null}
    </main>
  );
}
