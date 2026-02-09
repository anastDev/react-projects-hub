import SearchField from "@/projects/commute-risk-dashboard/components/SearchField.tsx";
import {Theme} from "@radix-ui/themes";
import {useEffect, useRef, useState} from "react";
import WeatherContainer from "@/projects/commute-risk-dashboard/components/WeatherContainer.tsx";
import {getCurrentWeather} from "@/projects/commute-risk-dashboard/services/api.weather.ts";
import type {WeatherApiResponse} from "@/projects/commute-risk-dashboard/types/typesWeather.tsx";
import CenterSearchField from "@/projects/commute-risk-dashboard/components/CenterSearchField.tsx";

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
            return;
        }
        async function fetchWeather() {
            try {
                setLoading(true);
                const data = await getCurrentWeather(city);
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

    useEffect(() => {
        document.title = "Commute Risk Dashboard";
    });

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