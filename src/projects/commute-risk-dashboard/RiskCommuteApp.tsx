import SearchField from "@/projects/commute-risk-dashboard/components/SearchField.tsx";
import {Theme} from "@radix-ui/themes";
import {useCallback, useEffect, useRef, useState} from "react";
import WeatherContainer from "@/projects/commute-risk-dashboard/components/WeatherContainer.tsx";
import CenterSearchField from "@/projects/commute-risk-dashboard/components/CenterSearchField.tsx";
import {useWeather} from "@/projects/commute-risk-dashboard/hooks/useWeather.ts";

const RiskCommuteApp = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [city, setCity] = useState("");
    const {weather, loading} = useWeather(city);

    const handleSearch = useCallback((value: string) => {
        if (value.trim() === "") {
            setCity(value);
        }
    }, []);

    useEffect(() => {
        inputRef.current?.focus();
        document.title = "Commute Risk Dashboard";
    }, []);

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

export default RiskCommuteApp;