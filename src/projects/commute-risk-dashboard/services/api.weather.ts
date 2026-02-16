import type {WeatherApiResponse} from "@/projects/commute-risk-dashboard/types/typesWeather.tsx";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getCurrentWeather(cityName: string) : Promise<WeatherApiResponse> {
    try {
        if(!cityName || cityName.trim() === "") {
            throw new Error("City name is required");
        }

        const encodedCity = encodeURIComponent(cityName.trim());
        const res = await fetch(`${VITE_BASE_URL}/${encodedCity}`);
        console.log("Response status", res.status);

        if (!res.ok) {
            throw new Error(`Failed to fetch weather ${res.status}`);
        }

       return await res.json();
    } catch (err) {
        console.error("Error fetching weather: ",err);
        throw err;
    }
}