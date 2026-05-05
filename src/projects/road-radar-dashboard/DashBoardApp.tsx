import {Theme} from "@radix-ui/themes";
import {useCallback, useEffect, useRef, useState} from "react";
import ConditionsContainer from "@/projects/road-radar-dashboard/components/ConditionsContainer.tsx";
import CenterSearchField from "@/projects/road-radar-dashboard/components/CenterSearchField.tsx";
import {useWeather} from "@/projects/road-radar-dashboard/hooks/useWeather.ts";

const DashBoardApp = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [city, setCity] = useState("");
    const { weather, loading } = useWeather(city);

    const handleSearch = useCallback((value: string) => {
        if (value.trim()) {
            setCity(value.trim());
        };
    }, []);

    useEffect(() => {
        inputRef.current?.focus();
        document.title = "Commute Risk Dashboard";
    }, []);

    return (
        <Theme>
            {weather && !loading ? (
                <ConditionsContainer
                    city={city}
                    weatherData={weather}
                    onSearch={handleSearch}
                    inputRef={inputRef}
                />
            ) : (
                <CenterSearchField
                    inputRef={inputRef}
                    onSearch={handleSearch}
                />
            )}
        </Theme>
    );
};

export default DashBoardApp;
