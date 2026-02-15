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
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";
import { motion } from 'framer-motion';

const WEATHER_ICON_API = import.meta.env.VITE_WEATHER_ICON_API;

interface WeatherContainerProps {
    weatherData: WeatherApiResponse | null;
}


const WeatherContainer = ({ weatherData }: WeatherContainerProps) => {
    const [commuteType, setCommuteType] = useState<CommuteType | "">("");
    const navigate = useNavigate();

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
            <main className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50 py-8 px-4">
                <div className="container mx-auto max-w-2xl">
                    {/* Weather Information Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Card className="shadow-lg">
                            <CardHeader>
                                <div className="flex flex-col sm:flex-row justify-around items-center gap-4 sm:gap-6">
                                    <div className="flex flex-col justify-center items-center text-center">
                                        <div className="text-2xl md:text-3xl font-medium mb-2 text-gray-800">
                                            {weatherData.name}
                                        </div>
                                        <h1 className="text-5xl md:text-6xl font-semibold mb-2 text-gray-900">
                                            {formatTemp(weatherData.main.temp)}°C
                                        </h1>
                                        <p className="font-light text-slate-600 capitalize">
                                            {weatherData.weather[0].description}
                                        </p>
                                    </div>
                                    <div className="flex-shrink-0">
                                        <img
                                            src={getWeatherIconUrl(weatherData.weather[0].icon)}
                                            alt={weatherData.weather[0].description}
                                            className="h-24 sm:h-32 mx-auto"
                                        />
                                    </div>
                                </div>
                            </CardHeader>

                            <Separator />

                            <CardContent className="pt-6">
                                <div className="space-y-4">
                                    <div className="text-base font-medium text-gray-800">
                                        Select your commute method:
                                    </div>
                                    <RadioGroup
                                        value={commuteType || ""}
                                        onValueChange={(value) => setCommuteType(value as CommuteType)}
                                        className="space-y-3"
                                    >
                                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer">
                                            <RadioGroupItem value="walking" id="walking" />
                                            <Label htmlFor="walking" className="cursor-pointer flex-1">
                                                🚶 Walking
                                            </Label>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer">
                                            <RadioGroupItem value="bike" id="bike" />
                                            <Label htmlFor="bike" className="cursor-pointer flex-1">
                                                🚴 Bike
                                            </Label>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer">
                                            <RadioGroupItem value="car" id="car" />
                                            <Label htmlFor="car" className="cursor-pointer flex-1">
                                                🚗 Car
                                            </Label>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sky-50 transition-colors cursor-pointer">
                                            <RadioGroupItem value="bus" id="bus" />
                                            <Label htmlFor="bus" className="cursor-pointer flex-1">
                                                🚌 Bus / Tram
                                            </Label>
                                        </div>
                                    </RadioGroup>
                                </div>
                            </CardContent>

                            {commuteType && risk && (
                                <>
                                    <Separator />
                                    <CardFooter className="pt-6">
                                        <RiskDisplay risk={risk} commute={commuteType} />
                                    </CardFooter>
                                </>
                            )}
                        </Card>
                    </motion.div>

                    {/* Sun Times - Additional Weather Info */}
                    <motion.div
                        className="mt-6 bg-white rounded-lg shadow-md p-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex flex-col sm:flex-row justify-around items-center gap-4 text-center sm:text-left">
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🌅</span>
                                <div>
                                    <div className="text-sm text-slate-600">Sunrise</div>
                                    <div className="font-semibold text-gray-800">
                                        {formatTime(weatherData.sys.sunrise)}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-2xl">🌇</span>
                                <div>
                                    <div className="text-sm text-slate-600">Sunset</div>
                                    <div className="font-semibold text-gray-800">
                                        {formatTime(weatherData.sys.sunset)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation - Back Button */}
                    <motion.div
                        className="mt-8 flex justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Button
                            variant="ghost"
                            onClick={() => navigate("/projects")}
                            className="bg-sky-500 text-gray-100 hover:bg-sky-600 active:bg-sky-600 border-sky-500  transition-colors w-full sm:w-auto cursor-pointer"
                        >
                            ← Back to Projects
                        </Button>
                    </motion.div>
                </div>
            </main>
        </>
    )
}

export default WeatherContainer;