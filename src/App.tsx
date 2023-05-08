import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

export default function App() {
  const [data, setData] = useState("");
  const [location, setLocation] = useState("Toronto");

  const DEVELOPER_KEY = "YOUR_DEVELOPER_KEY";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${DEVELOPER_KEY}&units=metric`;

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
            <button
              type="submit"
              className=" bg-slate-700 text-base h-full tracking-widest px-4 rounded-md hover:bg-slate-500 max-[700px]:w-full max-[700px]:mt-5 max-[700px]:mb-0 max-[700px]:mx-0 "
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Search
            </button>
          </form>
          <div
            id="msg"
            className=" max-w-md min-h-[40px] text-sm font-bold text-red-700 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-3 max-[500px]:text-xs max-[700px]:static max-[700px]:min-h-0"
          >
            ...The fox jumped over the lorem ipsum dolor sit amet The fox jumped
            over the lorem ipsum dolor sit amet
          </div>
        </div>
      </section>
      <section
        id="api-section"
        className="mt-16 mb-5 mx-0 max-[700px]:mt-5 border-4 border-green-600"
      >
        <div id="container" className="">
          <ul
            id="cities"
            className="grid gap-y-8 gap-x-5 grid-cols-4 max-[1000px]:grid-cols-3 max-[700px]:grid-cols-2 max-[500px]:grid-cols-1 "
          >
            <ListItem />
            <ListItem />
            <ListItem />
            {/* <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem />
            <ListItem /> */}
          </ul>
        </div>
      </section>
    </main>
  );
}
