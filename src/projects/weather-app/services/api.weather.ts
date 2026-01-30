import type {WeatherApiResponse} from "@/projects/weather-app/types/typesWeather.tsx";

const WEATHER_API = import.meta.env.VITE_WEATHER_API;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function getCurrentWeather(cityName: string) : Promise<WeatherApiResponse> {
    try {
        const res = await fetch(`${WEATHER_API}weather?q=${cityName}&units=metric&appid=${API_KEY}`);
        console.log("Response status", res.status);

        if (!res.ok) {
            throw new Error(`Failed to fetch weather ${res.status}`);
        }

       return await res.json();
    } catch (err) {
        console.log("Error fetching weather: ",err);
        throw err;
    }
}