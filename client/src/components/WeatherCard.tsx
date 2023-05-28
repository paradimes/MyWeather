import React from "react";
import { WeatherResponse } from "./customTypes";
import ListItem from "./ListItem";

type WeatherCardProps = {
  data: WeatherResponse;
};

export default function WeatherCard({ data }: WeatherCardProps) {
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
}
