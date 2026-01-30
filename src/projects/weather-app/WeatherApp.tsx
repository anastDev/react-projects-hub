import SearchField from "@/projects/weather-app/components/SearchField.tsx";
import DateTable from "@/projects/weather-app/components/DateTable.tsx";
import {Theme} from "@radix-ui/themes";
import {useEffect, useRef, useState} from "react";
import WeatherContainer from "@/projects/weather-app/components/WeatherContainer.tsx";
import {getCurrentWeather} from "@/projects/weather-app/services/api.weather.ts";
import type {WeatherApiResponse} from "@/projects/weather-app/types/typesWeather.tsx";
import CenterSearchField from "@/projects/weather-app/components/CenterSearchField.tsx";

const WeatherApp = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [city, setCity] = useState("");
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState<WeatherApiResponse | null>(null);

    const handleSearch = (value: string) => {
       if(value.trim() !== "") {
           console.log(">>Received Value>>>", value);
           setCity(value);
       } else {
           console.log("Search value is empty: ", value);
       }
    }

    useEffect(() => {
        if (!city.trim()) {
            console.log("City is empty")
            return;
        }
        async function fetchWeather() {
            try {
                setLoading(true);
                console.log("Fetching weather for:", city);
                const data = await getCurrentWeather(city);
                console.log("Weather data received:", data);
                setWeather(data);
            } catch(err) {
                console.error("Error:", err);
                setWeather(null);
            } finally {
                setLoading(false);
            }
        }
        fetchWeather().catch((err) => {throw Error("Error: ",err)});
        inputRef.current?.focus();
    }, [city]);

    return (
        <>
       <Theme>
           {weather && !loading ? (
               <>
                   <SearchField
                       inputRef={inputRef}
                       onSearch={handleSearch}

                   />
                   <WeatherContainer
                       weatherData={weather}
                   />
                   <DateTable/>
               </>
           ) : (
               <>
                   <CenterSearchField
                       inputRef={inputRef}
                       onSearch={handleSearch}
                       />
               </>
           )}
       </Theme>
        </>
    )
}

export default WeatherApp;