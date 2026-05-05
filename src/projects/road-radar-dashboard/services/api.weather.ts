import type {WeatherApiResponse} from "@/projects/road-radar-dashboard/types/typesWeather.ts";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

export async function getCurrentWeather(cityName: string) : Promise<WeatherApiResponse> {
    try {
        if(!cityName || cityName.trim() === "") {
           console.error("City name is required");
        }

        const res = await fetch(`${VITE_BASE_URL}/weather/${cityName}`);

        if (!res.ok) {
          console.error(`Unable to get current weather for city ${cityName}`);
        }

       return await res.json();
    } catch (err) {
        console.error("Error fetching weather: ",err);
        throw err;
    }
}