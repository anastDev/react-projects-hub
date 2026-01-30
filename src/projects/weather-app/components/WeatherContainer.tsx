import { Spinner} from "@radix-ui/themes";
import type {WeatherApiResponse} from "@/projects/weather-app/types/typesWeather.tsx";

const WEATHER_ICON_API = import.meta.env.VITE_WEATHER_ICON_API;

interface WeatherContainerProps {
    weatherData: WeatherApiResponse | null;
}

const WeatherContainer = ({ weatherData }: WeatherContainerProps) => {
    if(!weatherData) {
        return (
            <>
                <div className="flex justify-center">
                    <Spinner  size="3"/>
                </div>
            </>
        )
    }

    const formatTemp = (temp: number): number => {
        return Math.floor(temp);
    };

    const formatTime = (timestamp: number): string => {
        const date = new Date(timestamp * 1000);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const getWeatherIconUrl = (iconCode: string): string => {
        return `${WEATHER_ICON_API}${iconCode}@2x.png`;
    };

    const baseWeatherConditions = [
        {
            label: "Feels Like",
            value: `${formatTemp(weatherData!.main.feels_like)}°C`,
            description: "Perceived temperature"
        },
        {
            label: "Humidity",
            value: `${weatherData?.main.humidity}%`,
            description: "Relative humidity"
        },
        {
            label: "Wind Speed",
            value: `${weatherData!.wind.speed} m/s`,
            description: `Wind direction: ${weatherData!.wind.deg}°`
        },
        {
            label: "Visibility",
            value: `${(weatherData!.visibility / 1000).toFixed(1)} km`,
            description: ""
        },
        {
            label: "Pressure",
            value: `${weatherData!.main.pressure} hPa`,
            description: ""
        },
    ];

    const weatherConditions = [...baseWeatherConditions];

    if (weatherData.rain) {
        if (weatherData.rain["1h"] !== undefined) {
            weatherConditions.unshift({
                label: "Rain (1h)",
                value: `${weatherData.rain["1h"]} mm`,
                description: "Rainfall in the last hour"
            });
        }
    }

    if (weatherData.snow) {
        if (weatherData.snow["1h"] !== undefined) {
            weatherConditions.unshift({
                label: "Snow (1h)",
                value: `${weatherData.snow["1h"]} mm`,
                description: "Snowfall in the last hour"
            });
        }
    }

    const getChanceOfRain = (): number => {
        const weatherMain = weatherData.weather[0].main.toLowerCase();
        const weatherDescription = weatherData.weather[0].description.toLowerCase();

        if (weatherMain.includes('thunderstorm')) {
            return 90;
        }
        if (weatherMain.includes('rain') || weatherMain.includes('drizzle')) {
            return 80;
        }
        if (weatherDescription.includes('scattered') || weatherDescription.includes('broken')) {
            return 50;
        }
        if (weatherDescription.includes('overcast')) {
            return 40;
        }
        if (weatherDescription.includes('light') || weatherDescription.includes('few')) {
            return 30;
        }
        if (weatherMain.includes('snow')) {
            return 20;
        }
        return 10;
    };

    weatherConditions.unshift({
        label: "Chance of Rain",
        value: `${getChanceOfRain()}%`,
        description: ""
    });


    return (
        <>
            <main>
                <div className="mx-4 my-6 min-h-screen flex flex-col md:space-y-4">
                    <div className="col-span-4 flex-1 mt-4 min-h-20">
                        <div className="lg:w-3/4 md:w-3xl mx-auto border border-black flex flex-row justify-between rounded-lg overflow-hidden">
                            <div className="text-center flex-1 h-[1/2] flex items-center justify-center border-r border-gray-900">
                                <div className="text-center">
                                    <img
                                        src={getWeatherIconUrl(weatherData!.weather[0].icon)}
                                        alt={weatherData!.weather[0].description}
                                        className="w-24 h-24 mx-auto"
                                    />
                                    <p className="mt-2 capitalize">{weatherData!.weather[0].main}</p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <div className="flex flex-col text-center mt-6">
                                    <div className="text-lg font-semibold">
                                        {weatherData!.name}, {weatherData!.sys.country}
                                    </div>
                                </div>
                                <div className="text-center pb-6">
                                    <h1 className="text-5xl my-2">
                                        {formatTemp(weatherData!.main.temp)}°C
                                    </h1>
                                    <p className="font-light capitalize mt-4">
                                        {weatherData!.weather[0].description}
                                    </p>
                                    <div className="text-sm mt-1">
                                        H: {formatTemp(weatherData!.main.temp_max)}°C •
                                        L: {formatTemp(weatherData!.main.temp_min)}°C
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-cols-2">
                        <div className="flex my-4 justify-center space-x-4">
                            <div className="w-1/6">
                                <div className="text-xl">Sunrise: <span className="font-medium">{formatTime(weatherData.sys.sunrise)}</span></div>
                            </div>
                            <div className="w-1/6">
                                <div className="text-xl">Sunset: <span className="font-medium">{formatTime(weatherData.sys.sunset)}</span></div>
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-4 grid-cols-2">
                        {weatherConditions.map((weatherCondition, index) => (
                            <div
                                key={index}
                                className="md:w-full lg:w-full md:h-35 lg:h-35 flex flex-col px-4 pt-4 border border-black rounded-lg"
                            >
                                <div className="text-lg my-2 font-medium">{weatherCondition.label}</div>
                                <div className="text-3xl font-semibold">{weatherCondition.value}</div>
                                <div className="mt-2 text-sm font-light">{weatherCondition.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}

export default WeatherContainer;