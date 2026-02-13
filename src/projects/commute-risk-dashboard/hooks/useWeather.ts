import {useEffect, useState} from "react";
import type {WeatherApiResponse} from "@/projects/commute-risk-dashboard/types/typesWeather.tsx";
import {getCurrentWeather} from "@/projects/commute-risk-dashboard/services/api.weather.ts";

export function useWeather(city: string) {
    const [loading, setLoading] = useState(false);
    const [weather, setWeather] = useState<WeatherApiResponse | null>(null);

    useEffect(() => {
        if (!city.trim()) {
            return;
        }

        let isCancelled = false;
        async function fetchWeather() {
            try {
                setLoading(true);
                const data = await getCurrentWeather(city);
                if (!isCancelled) {
                    setWeather(data);
                }
            } catch(err) {
                console.error("Error:", err);
                setWeather(null);
            } finally {
                setLoading(false);
            }
        }
        fetchWeather().catch((err) => {throw Error("Error: ",err)});
        return () => {
            isCancelled = true;
        }
    }, [city]);

    return {weather, loading};
}