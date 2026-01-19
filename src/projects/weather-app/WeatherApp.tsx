import SearchField from "@/projects/weather-app/components/SearchField.tsx";
import WeatherContainer from "@/projects/weather-app/components/WeatherContainer.tsx";
import DateTable from "@/projects/weather-app/components/DateTable.tsx";
import {Theme} from "@radix-ui/themes";
import {useEffect, useRef, useState} from "react";
import {getCurrentWeather} from "@/projects/weather-app/services/api.weather.ts";
import type {WeatherDetailsProps} from "@/projects/weather-app/types/typesWeather.tsx";

const WeatherApp = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [query, setQuery] = useState("");
    const [loading, setLoading] = useState(true);
    const [weather, setWeather] = useState<WeatherDetailsProps | null>();

    const addQueryToInput = (value: string) => {
        if (query.trim() !== "") {
            setQuery(value);
        }
    }

    //TODO: Add node.js for backend: CORS issue
    useEffect(() => {
        async function fetchWeather() {
            try {
                setLoading(true);
                const data = await getCurrentWeather(query);
                setWeather({
                    temperature: data.main.temp,
                    description: data.weather[0].description,
                    country: data.sys.country,
                    name: data.name,
                });
            } catch(err) {
                console.error(err);
            }
        }
        fetchWeather().catch(err => console.error("Unhandled promise:", err));
        setLoading(false);
        inputRef.current?.focus();
    }, []);

    return (
        <>
       <Theme>
           {/*  SearchField */}
           <SearchField
               inputRef={inputRef}
               searchInput={addQueryToInput}

           />
           {!loading && (
               <WeatherContainer
                   temperature={weather?.temperature}
                   description={weather?.description}
                   country={weather?.country}
                   name={weather?.name}
               />
           )}
           {/*  Footer: Table containing dates */}
           <DateTable/>
       </Theme>
        </>
    )
}

export default WeatherApp;