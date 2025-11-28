import {Button} from "@radix-ui/themes";
import type {WeatherDetailsProps} from "@/types/typesWeather.ts";

const WeatherContainer = ( {temperature, description, name, country}: WeatherDetailsProps) => {
    const weatherConditions = [
        {
            label: "UV Index",
            value: "2",
            description: "Low UV for the rest of the day"
        },
        {
            label: "Humidity",
            value: "55%",
            description: "Comfortable moisture levels"
        },
        {
            label: "Wind Speed",
            value: "12 km/h",
            description: "Light breeze, nothing dramatic"
        },
        {
            label: "Feels Like",
            value: "19°C",
            description: "Slightly cooler than actual temp because of wind"
        },
        {
            label: "Visibility",
            value: "10 km",
            description: "Clear visibility"
        },
        {
            label: "Cloud Cover",
            value: "40%",
            description: "Partly cloudy skies"
        },
        {
            label: "Pressure",
            value: "1016 hPa",
            description: "Stable pressure"
        },
        {
            label: "Dew Point",
            value: "10°C",
            description: "Comfortable, not muggy"
        },
        {
            label: "Chance of Rain",
            value: "10%",
            description: "Low chance — umbrella stays home"
        },
        {
            label: "Air Quality",
            value: "32 AQI",
            description: "Good air quality"
        },
        {
            label: "Sunrise",
            value: "06:42",
            description: "Early daylight vibes"
        },
        {
            label: "Sunset",
            value: "17:12",
            description: "Golden hour incoming"
        }
    ];


    return (
        <>
            <main>
                <div className="mx-2 my-4 min-h-screen flex md:flex-col md:space-y-4">
                    {/* Left Side */}
                    <div className="md:col-span-2">
                        <div className="md:h-60 border border-black flex md:flex-row md:justify-between rounded-lg overflow-hidden">
                            <div className="bg-gray-200 text-center flex-1 h-[1/2]">
                                Picture
                            </div>
                            <div className="flex-1">
                                <div className="text-center py-6">
                                    <h1 className="text-5xl my-2">{temperature}</h1>
                                    <p className="font-light">{description}</p>
                                </div>
                                <hr className="w-54 mx-auto border-none bg-gray-300 h-[2px]"/>
                                <div className="flex flex-col text-center mt-6">
                                    <div>
                                        {name}
                                    </div>
                                    <div>
                                        {country}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col">
                        <div className="mb-4 ml-2 space-x-2 flex flex-row gap-6">
                            <Button variant="ghost" > Today </Button>
                            <Button variant="ghost" > Tomorrow </Button>
                        </div>
                        <div className="grid gap-4 grid-cols-3 grid-rows-3">
                            {weatherConditions.map((weatherCondition) => (
                                <div className="md:w-full h-40 flex flex-col px-4 pt-4 border border-black rounded-lg">
                                    <div className="text-lg font-light">{weatherCondition.label}</div>
                                    <div className=" text-3xl font-medium">{weatherCondition.value}</div>
                                    <div className="mt-2 text-sm">{weatherCondition.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default WeatherContainer;