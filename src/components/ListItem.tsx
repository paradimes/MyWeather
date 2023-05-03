import React from "react";

export default function ListItem() {
  return (
    <li
      id="city"
      className="border-4 border-red-500 relative py-10 px-[10%] rounded-2xl bg-white text-slate-600 after:w-11/12 after:h-12 after:absolute after:-bottom-3 after:z-index-1 	after:z-[-1] after:opacity-30 after:rounded-2xl   "
    >
      {/* color: var(--text_light); background: var(--orange); */}
      <h2 id="city-name">
        <span>Athens</span>
        <sup className="px-[0.6em] py-[0.2em] rounded-[30px] bg-orange-500 text-white">
          GR
        </sup>
      </h2>
      <span
        id="city-temp"
        className="text-[5rem] font-[bold] mt-2.5 text-slate-800"
      >
        11<sup className="text-[0.5em]">°C </sup>
      </span>
      <figure>
        <img
          id="city-icon"
          src=""
          alt=""
          className="w-[100px] h-[100px] mt-2.5"
        />
        <figcaption className="uppercase tracking-wider mt-2.5">
          Very heavy rain
        </figcaption>
      </figure>
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
