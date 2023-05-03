import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

export default function App() {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("Toronto");

  const DEVELOPER_KEY = "YOUR_DEVELOPER_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${DEVELOPER_KEY}&units=metric`;
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${DEVELOPER_KEY}&units=metric`;

  function handleChange(event: {
    target: { value: React.SetStateAction<string> };
  }) {
    setLocation(event.target.value);
  }
  console.log("location", location);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       // setData(data.map())
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [url]);

  // console.log("data", data);

  // :root {
  //   --bg_main: #0a1f44
  //   --text_light: #fff
  //   --text_med: #53627c
  //   --text_dark: #1e2432
  //   --red: #ff1e42
  //   --darkred: #c3112d
  //   --orange: #ff8c00
  // }

  return (
    <main className="flex flex-col h-screen bg-[#222] text-white text-5xl justify-center items-center">
      <section
        id="top-banner-container"
        className="flex flex-col gap-10 justify-center items-center text-white bg-gradient-to-r from-red-600 to-purple-600 p-1  "
      >
        <div
          id="border-gradient-enabler"
          className="h-full w-full bg-[#222] p-8"
        >
          <h1 id="heading" className="text-7xl font-bold tracking-wide pb-8 ">
            MyWeatherApp
          </h1>
          <form className=" relative flex items-center w-full max-[700px]:flex-col">
            <input
              className="focus:outline-none text-white text-2xl h-full w-full pl-1 rounded-md max-[700px]:w-full bg-[#222] border-2 border-slate-500 mr-2  "
              type="text"
              placeholder="Search for a city..."
              onChange={handleChange}
              // autoFocus
            />
            <button
              type="submit"
              className=" bg-slate-700 text-base h-full tracking-widest px-4 rounded-md hover:bg-slate-500 max-[700px]:w-full max-[700px]:mt-5 "
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Search
            </button>
            <span
              id="msg"
              className="absolute -bottom-10 left-0 max-w-md min-h-[40px] max-[700px]:static max-[700px]:max-w-none max-[700px]:min-h-0 max-[700px]:mt-2.5 "
            ></span>
          </form>
        </div>
      </section>
      <section id="api-call-container" className="mt-12 mb-5 ">
        <ul
          id="cities"
          className="grid gap-y-8 gap-x-5 grid-cols-4 max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1 "
        >
          <ListItem />
          {/* <ListItem />
          <ListItem />
          <ListItem />
          <ListItem /> */}
        </ul>
      </section>
    </main>
  );
}
