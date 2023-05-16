// import React from "react";

type ListItemProps = {
  locationCity: string;
  locationCountry: string;
  temperature: number;
  iconSrc: string;
  iconAlt?: string;
  iconCaption: string;
};

export default function ListItem({
  locationCity,
  locationCountry,
  temperature,
  iconSrc,
  iconAlt,
  iconCaption,
}: ListItemProps) {
  return (
    <li>
      <div className="border-4 border-red-600 min-w-[200px] flex flex-col h-full py-5 px-[10%] rounded-3xl bg-white text-slate-600">
        <div id="city" className="pb-3 text-[20px]">
          {locationCity}
          <sup className="ml-1 text-xs px-[0.6em] py-[0.2em] rounded-[30px] bg-orange-500 text-white">
            {locationCountry}
          </sup>
        </div>
        <div
          id="temp"
          className="text-7xl font-[bold] text-slate-800 max-[700px]:text-5xl  "
        >
          {temperature}
          <sup className="text-[0.5em]">°C </sup>
        </div>
        <figure id="icon" className="">
          <img
            id="city-icon"
            src={iconSrc}
            alt={iconAlt}
            className="w-[100px] h-[100px] mt-2.5"
          />
          <figcaption className="uppercase tracking-wider mt-2.5  ">
            {iconCaption}
          </figcaption>
        </figure>
      </div>
    </li>
  );
}
