import React, { useState } from "react";
import ListItem from "./components/ListItem";
import Axios, { AxiosResponse } from "axios";

const DEVELOPER_KEY = "125082994c1be107485b48cdd321f07c";

const majorUSCities = [
  "Aberdeen",
  "Abilene",
  "Akron",
  "Albany",
  "Albuquerque",
  "Alexandria",
  "Allentown",
  "Amarillo",
  "Anaheim",
  "Anchorage",
  "Ann Arbor",
  "Antioch",
  "Apple Valley",
  "Appleton",
  "Arlington",
  "Arvada",
  "Asheville",
  "Athens",
  "Atlanta",
  "Atlantic City",
  "Augusta",
  "Aurora",
  "Austin",
  "Bakersfield",
  "Baltimore",
  "Barnstable",
  "Baton Rouge",
  "Beaumont",
  "Bel Air",
  "Bellevue",
  "Berkeley",
  "Bethlehem",
  "Billings",
  "Birmingham",
  "Bloomington",
  "Boise",
  "Boise City",
  "Bonita Springs",
  "Boston",
  "Boulder",
  "Bradenton",
  "Bremerton",
  "Bridgeport",
  "Brighton",
  "Brownsville",
  "Bryan",
  "Buffalo",
  "Burbank",
  "Burlington",
  "Cambridge",
  "Canton",
  "Cape Coral",
  "Carrollton",
  "Cary",
  "Cathedral City",
  "Cedar Rapids",
  "Champaign",
  "Chandler",
  "Charleston",
  "Charlotte",
  "Chattanooga",
  "Chesapeake",
  "Chicago",
  "Chula Vista",
  "Cincinnati",
  "Clarke County",
  "Clarksville",
  "Clearwater",
  "Cleveland",
  "College Station",
  "Colorado Springs",
  "Columbia",
  "Columbus",
  "Concord",
  "Coral Springs",
  "Corona",
  "Corpus Christi",
  "Costa Mesa",
  "Dallas",
  "Daly City",
  "Danbury",
  "Davenport",
  "Davidson County",
  "Dayton",
  "Daytona Beach",
  "Deltona",
  "Denton",
  "Denver",
  "Des Moines",
  "Detroit",
  "Downey",
  "Duluth",
  "Durham",
  "El Monte",
  "El Paso",
  "Elizabeth",
  "Elk Grove",
  "Elkhart",
  "Erie",
  "Escondido",
  "Eugene",
  "Evansville",
  "Fairfield",
  "Fargo",
  "Fayetteville",
  "Fitchburg",
  "Flint",
  "Fontana",
  "Fort Collins",
  "Fort Lauderdale",
  "Fort Smith",
  "Fort Walton Beach",
  "Fort Wayne",
  "Fort Worth",
  "Frederick",
  "Fremont",
  "Fresno",
  "Fullerton",
  "Gainesville",
  "Garden Grove",
  "Garland",
  "Gastonia",
  "Gilbert",
  "Glendale",
  "Grand Prairie",
  "Grand Rapids",
  "Grayslake",
  "Green Bay",
  "GreenBay",
  "Greensboro",
  "Greenville",
  "Gulfport-Biloxi",
  "Hagerstown",
  "Hampton",
  "Harlingen",
  "Harrisburg",
  "Hartford",
  "Havre de Grace",
  "Hayward",
  "Hemet",
  "Henderson",
  "Hesperia",
  "Hialeah",
  "Hickory",
  "High Point",
  "Hollywood",
  "Honolulu",
  "Houma",
  "Houston",
  "Howell",
  "Huntington",
  "Huntington Beach",
  "Huntsville",
  "Independence",
  "Indianapolis",
  "Inglewood",
  "Irvine",
  "Irving",
  "Jackson",
  "Jacksonville",
  "Jefferson",
  "Jersey City",
  "Johnson City",
  "Joliet",
  "Kailua",
  "Kalamazoo",
  "Kaneohe",
  "Kansas City",
  "Kennewick",
  "Kenosha",
  "Killeen",
  "Kissimmee",
  "Knoxville",
  "Lacey",
  "Lafayette",
  "Lake Charles",
  "Lakeland",
  "Lakewood",
  "Lancaster",
  "Lansing",
  "Laredo",
  "Las Cruces",
  "Las Vegas",
  "Layton",
  "Leominster",
  "Lewisville",
  "Lexington",
  "Lincoln",
  "Little Rock",
  "Long Beach",
  "Lorain",
  "Los Angeles",
  "Louisville",
  "Lowell",
  "Lubbock",
  "Macon",
  "Madison",
  "Manchester",
  "Marina",
  "Marysville",
  "McAllen",
  "McHenry",
  "Medford",
  "Melbourne",
  "Memphis",
  "Merced",
  "Mesa",
  "Mesquite",
  "Miami",
  "Milwaukee",
  "Minneapolis",
  "Miramar",
  "Mission Viejo",
  "Mobile",
  "Modesto",
  "Monroe",
  "Monterey",
  "Montgomery",
  "Moreno Valley",
  "Murfreesboro",
  "Murrieta",
  "Muskegon",
  "Myrtle Beach",
  "Naperville",
  "Naples",
  "Nashua",
  "Nashville",
  "New Bedford",
  "New Haven",
  "New London",
  "New Orleans",
  "New York",
  "New York City",
  "Newark",
  "Newburgh",
  "Newport News",
  "Norfolk",
  "Normal",
  "Norman",
  "North Charleston",
  "North Las Vegas",
  "North Port",
  "Norwalk",
  "Norwich",
  "Oakland",
  "Ocala",
  "Oceanside",
  "Odessa",
  "Ogden",
  "Oklahoma City",
  "Olathe",
  "Olympia",
  "Omaha",
  "Ontario",
  "Orange",
  "Orem",
  "Orlando",
  "Overland Park",
  "Oxnard",
  "Palm Bay",
  "Palm Springs",
  "Palmdale",
  "Panama City",
  "Pasadena",
  "Paterson",
  "Pembroke Pines",
  "Pensacola",
  "Peoria",
  "Philadelphia",
  "Phoenix",
  "Pittsburgh",
  "Plano",
  "Pomona",
  "Pompano Beach",
  "Port Arthur",
  "Port Orange",
  "Port Saint Lucie",
  "Port St. Lucie",
  "Portland",
  "Portsmouth",
  "Poughkeepsie",
  "Providence",
  "Provo",
  "Pueblo",
  "Punta Gorda",
  "Racine",
  "Raleigh",
  "Rancho Cucamonga",
  "Reading",
  "Redding",
  "Reno",
  "Richland",
  "Richmond",
  "Richmond County",
  "Riverside",
  "Roanoke",
  "Rochester",
  "Rockford",
  "Roseville",
  "Round Lake Beach",
  "Sacramento",
  "Saginaw",
  "Saint Louis",
  "Saint Paul",
  "Saint Petersburg",
  "Salem",
  "Salinas",
  "Salt Lake City",
  "San Antonio",
  "San Bernardino",
  "San Buenaventura",
  "San Diego",
  "San Francisco",
  "San Jose",
  "Santa Ana",
  "Santa Barbara",
  "Santa Clara",
  "Santa Clarita",
  "Santa Cruz",
  "Santa Maria",
  "Santa Rosa",
  "Sarasota",
  "Savannah",
  "Scottsdale",
  "Scranton",
  "Seaside",
  "Seattle",
  "Sebastian",
  "Shreveport",
  "Simi Valley",
  "Sioux City",
  "Sioux Falls",
  "South Bend",
  "South Lyon",
  "Spartanburg",
  "Spokane",
  "Springdale",
  "Springfield",
  "St. Louis",
  "St. Paul",
  "St. Petersburg",
  "Stamford",
  "Sterling Heights",
  "Stockton",
  "Sunnyvale",
  "Syracuse",
  "Tacoma",
  "Tallahassee",
  "Tampa",
  "Temecula",
  "Tempe",
  "Thornton",
  "Thousand Oaks",
  "Toledo",
  "Topeka",
  "Torrance",
  "Trenton",
  "Tucson",
  "Tulsa",
  "Tuscaloosa",
  "Tyler",
  "Utica",
  "Vallejo",
  "Vancouver",
  "Vero Beach",
  "Victorville",
  "Virginia Beach",
  "Visalia",
  "Waco",
  "Warren",
  "Washington",
  "Waterbury",
  "Waterloo",
  "West Covina",
  "West Valley City",
  "Westminster",
  "Wichita",
  "Wilmington",
  "Winston",
  "Winter Haven",
  "Worcester",
  "Yakima",
  "Yonkers",
  "York",
  "Youngstown",
];

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
