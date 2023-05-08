import React from "react";

export default function ListItem() {
  return (
    <li>
      <div className="border-4 border-red-600  flex flex-col h-fit py-5 px-[10%] rounded-3xl bg-white text-slate-600">
        <div id="city" className="pb-3 text-[20px] ">
          Athens
          <sup className="ml-1 text-xs px-[0.6em] py-[0.2em] rounded-[30px] bg-orange-500 text-white">
            GR
          </sup>
        </div>
        <div
          id="temp"
          className="text-7xl font-[bold] text-slate-800 max-[700px]:text-5xl  "
        >
          11
          <sup className="text-[0.5em]">°C </sup>
        </div>
        <figure id="icon" className="">
          <img
            id="city-icon"
            src=""
            alt=""
            className="w-[100px] h-[100px] mt-2.5"
          />
          <figcaption className="uppercase tracking-wider mt-2.5  ">
            Very heavy rain
          </figcaption>
        </figure>
      </div>
    </li>
  );
}

// :root {
//   --bg_main: #0a1f44
//   --text_light: #fff ---> text-white
//   --text_med: #53627c ---> text-slate-600
//   --text_dark: #1e2432 --- text-slate-800
//   --red: #ff1e42 --- text-red-500
//   --darkred: #c3112d --- text-red-700
//   --orange: #ff8c00 --- text-orange-500
// }
