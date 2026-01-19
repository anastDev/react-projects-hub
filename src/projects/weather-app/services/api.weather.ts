const API_URL = import.meta.env.WEATHER_API_URL_GEO;
const API_KEY = import.meta.env.WEATHER_API_KEY;

export async function getCurrentWeather(cityName: string) {
    try {
        const res = await fetch(`${API_URL}weather?q=${cityName}&units=metric&appid=${API_KEY}`);
        console.log("Response status", res.status);

        if (res.ok) {
            const text = await res.text();
            console.error("Fetch failed", text);
            throw new Error(`Failed to fetch weather ${res.status}`);
        }

        const data = await res.json();
        console.log("Received data", data);
        return data;
    } catch (err) {
        console.log("Error fetching weather: ",err);
        throw err;
    }
}