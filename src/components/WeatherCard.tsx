import React from "react";

type WeatherCardProps = {
  location: string;
};

export default function WeatherCard({ location }: WeatherCardProps) {
  return (
    <div className="border-4 border-white px-4 py-4 w-96 h-52 flex flex-col items-center justify-center rounded-3xl bg-indigo-300 ">
      {/* /border-4 border-emerald-400 */}
      <h1 className=" bg-indigo-700 text-xl text-white font-medium rounded-xl px-3 py-0.5">
        {location}
      </h1>
    </div>
  );
}
