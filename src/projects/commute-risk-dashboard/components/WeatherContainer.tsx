import { Spinner} from "@radix-ui/themes";
import type {WeatherApiResponse} from "@/projects/commute-risk-dashboard/types/typesWeather.tsx";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator.tsx";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {useState} from "react";
import type {CommuteType, RiskResponse} from "@/projects/commute-risk-dashboard/types/typeRisk.ts";
import RiskDisplay from "@/projects/commute-risk-dashboard/components/RiskDisplay.tsx";

const WEATHER_ICON_API = import.meta.env.VITE_WEATHER_ICON_API;

interface WeatherContainerProps {
    weatherData: WeatherApiResponse | null;
}


const WeatherContainer = ({ weatherData }: WeatherContainerProps) => {
    const [commuteType, setCommuteType] = useState<CommuteType | "">("");

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

    function calculateRisk(weather: WeatherApiResponse, commute: CommuteType) : RiskResponse {
        let score = 0;
        const reasons: string[] = [];
        const recommendations: string[] = [];
        const hasSnowOrIce = ["Snow", "Sleet", "Ice"].includes(weather.weather[0].description);

        if(hasSnowOrIce) {
            score +=2;
            reasons.push("Snow or icy conditions detected!");
        } else if (weather.weather[0].description.includes("Rain")) {
            score += 1;
            reasons.push("Rain increases road and sidewalk risk");
        }

        if(weather.main.temp < 0) {
            score += 1;
            reasons.push("Temperature below 0°C");
        }

        if (weather.wind.speed > 10) {
            score += 1;
            reasons.push("Strong wind conditions");
        }

        if (commute === "walking" && ["Snow", "Sleet", "Ice"].includes(weather.weather[0].description)) {
            score += 1;
            reasons.push("Walking surfaces may be slippery");
        }

        if (commute === "bike" && ["Snow", "Sleet", "Ice"].includes(weather.weather[0].description)) {
            score += 3;
            reasons.push("Biking is riskier on snow and ice");
        }
        if ((commute === "bus" || commute === "tram") && ["Snow", "Sleet", "Ice"].includes(weather.weather[0].description)) score += 1;

        let level: "Low" | "Medium" | "High" | "";
        if(score <= 1) level = "Low";
        else if (score <= 3) level = "Medium";
        else level = "High";

        if(level == "Low") {
            recommendations.push("No special precautions needed.")
        }

        if (level === "Medium") {
            recommendations.push("Allow extra travel time and stay alert.");
        }

        if (level === "High") {
            recommendations.push("Consider public transport or delaying your commute.");
        }

        if((commute === "bike" || commute === "walking") && level === "High") {
            recommendations.push("Consider taking public transport instead.")
        }

        return {score, level, reasons, recommendations};
    }

    const risk =  calculateRisk(weatherData, commuteType);

    return (
        <>
            <main>
                <div className="mt-8 h-full">
                    <div className="w-2xl mx-auto">
                        <div>
                            <Card>
                                <CardHeader>
                                    <div className="flex flex-row justify-around space-x-6">
                                        <div className="flex flex-col justify-center items-center">
                                            <div className="text-2xl font-medium mb-2">{weatherData.name}</div>
                                            <h1 className="text-5xl font-semibold mb-2">{formatTemp(weatherData.main.temp)}°C</h1>
                                            <p className="font-light">{weatherData!.weather[0].description}</p>
                                        </div>
                                        <div>
                                            <img
                                                src={getWeatherIconUrl(weatherData!.weather[0].icon)}
                                                alt={weatherData!.weather[0].description}
                                                className="h-32 mx-auto"
                                            />
                                        </div>
                                    </div>
                                </CardHeader>
                                <Separator/>
                                <CardContent>
                                    <div className="my-4">
                                        <div>Please select a commute type:</div>
                                        <div className="mt-4">
                                            <RadioGroup
                                                defaultValue={commuteType || ""}
                                                onValueChange={(value)=> setCommuteType(value as CommuteType)}>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="walking" id="walking"/>
                                                    <Label htmlFor="walking">Walking</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="bike" id="bike" />
                                                    <Label htmlFor="bike">Bike</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="car" id="car" />
                                                    <Label htmlFor="car">Car</Label>
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <RadioGroupItem value="bus" id="bus" />
                                                    <Label htmlFor="bus">Bus / Tram</Label>
                                                </div>
                                            </RadioGroup>
                                        </div>
                                    </div>
                                </CardContent>
                                <Separator/>
                                <CardFooter>
                                    {commuteType && risk && (
                                        <>
                                            <RiskDisplay
                                                risk={risk}
                                                commute={commuteType}
                                            />
                                        </>
                                    )}
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="w-xs mx-auto mt-4 flex justify-evenly">
                            <div className="flex flex-row">
                                <div className="mr-1">Sunrise: </div>
                                <div className="font-medium">{formatTime(weatherData.sys.sunrise)}</div>
                            </div>
                            <div className="flex flex-row">
                                <div className="mr-1">Sunset:</div>
                                <div className="font-medium">{formatTime(weatherData.sys.sunset)}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default WeatherContainer;