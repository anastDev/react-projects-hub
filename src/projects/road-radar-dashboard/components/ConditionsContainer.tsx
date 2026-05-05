import { Spinner} from "@radix-ui/themes";
import type {WeatherApiResponse} from "@/projects/road-radar-dashboard/types/typesWeather.ts";
import {type RefObject, useState} from "react";
import {useNavigate} from "react-router";
import { motion } from 'framer-motion';
import {ChevronLeft} from "lucide-react";
import {useRoadConditions} from "@/projects/road-radar-dashboard/hooks/useRoadConditions.ts";
import {Button} from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input";
import RoadConditionsMap from "@/projects/road-radar-dashboard/components/RoadConditionsMap.tsx";
import RoadConditions from "@/projects/road-radar-dashboard/components/RoadConditions.tsx";
import {useAccidents} from "@/projects/road-radar-dashboard/hooks/useAccidents.ts";

const WEATHER_ICON_API = import.meta.env.VITE_WEATHER_ICON_API;

interface ConditionsContainerProps {
    weatherData: WeatherApiResponse | null;
    onSearch: (value: string) => void;
    inputRef: RefObject<HTMLInputElement | null>;
    city: string;
}

const ConditionsContainer = ({ weatherData, onSearch, inputRef, city }: ConditionsContainerProps) => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const {conditions, userLocation, locationStatus, loading, error} = useRoadConditions(city);
    const {deviations} = useAccidents(city);

    const handleSearch = () => {
        if (searchValue.trim()) {
            onSearch(searchValue.trim());
            setSearchValue("");
        }
    };

    if (!weatherData) {
        return (
            <div className="min-h-screen bg-slate-950 flex items-center justify-center">
                <Spinner size="3" />
            </div>
        );
    }

    const formatTemp = (temp: number) => Math.floor(temp);
    const formatTime = (ts: number) =>
        new Date(ts * 1000).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const getWeatherIconUrl = (icon: string) => `${WEATHER_ICON_API}${icon}@2x.png`;

    return (
        <div className="min-h-screen bg-slate-950 text-gray-100">
            {/* Sticky search header */}
            <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 px-4 py-3">
                <div className="max-w-2xl lg:max-w-6xl mx-auto flex items-center gap-3 px-2">
                    <Button
                        onClick={() => navigate("/projects")}
                        className="flex items-center gap-1 bg-slate-900  border-slate-700 text-gray-100 hover:text-gray-200 hover:border-amber-500 focus:border-amber-500 text-sm transition-colors cursor-pointer border  rounded-lg px-3 py-2 shrink-0"
                    >
                        <ChevronLeft/>
                        Projects
                    </Button>
                    <Input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        placeholder="Search another city..."
                        className="flex-1 bg-slate-900 border  text-gray-100 placeholder:text-slate-500 rounded-lg px-3 py-2 text-sm focus:outline-none hover:border-amber-500 focus:border-amber-500/50 transition-all"
                    />
                    <Button
                        onClick={handleSearch}
                        className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all cursor-pointer shrink-0"
                    >
                        Search
                    </Button>
                </div>
            </header>

            <main className="max-w-2xl lg:max-w-6xl mx-auto px-4 py-6">
                <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-6 lg:items-stretch">

                    {/* Left Column — Weather + Road conditions */}
                    <div className="flex flex-col gap-4">

                        {/* Weather hero card */}
                        <motion.div
                            className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-between"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div>
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-1">
                                    {weatherData.name}, {weatherData.sys.country}
                                </p>
                                <div className="text-7xl font-black tracking-tight leading-none">
                                    {formatTemp(weatherData.main.temp)}°
                                </div>
                                <p className="text-slate-400 capitalize text-sm mt-2">
                                    {weatherData.weather[0].description}
                                </p>
                                <div className="flex flex-wrap gap-x-4 mt-3 text-slate-600">
                                    <span>🌅 {formatTime(weatherData.sys.sunrise)}</span>
                                    <span>🌇 {formatTime(weatherData.sys.sunset)}</span>
                                    <span>🌬️ {Math.round(weatherData.wind.speed)} m/s</span>
                                    <span>💧 {weatherData.main.humidity}%</span>
                                </div>
                            </div>
                            <img
                                src={getWeatherIconUrl(weatherData.weather[0].icon)}
                                alt={weatherData.weather[0].description}
                                className="h-36 drop-shadow-lg shrink-0"
                            />
                        </motion.div>

                        {/* Road conditions list */}
                        {conditions.length > 0 && (
                            <motion.div
                                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex-1"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.16 }}
                            >
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                                    Road conditions nearby
                                </p>
                                <RoadConditions
                                    conditions={conditions}
                                    loading={loading}
                                    error={error}
                                />
                            </motion.div>
                        )}
                    </div>

                    {/* Right Column — Map + Location status */}
                    <div className="flex flex-col gap-4 mt-4 lg:mt-0 h-full">

                        {/* Location detecting feedback */}
                        {locationStatus.status === "detecting" && !loading && (
                            <motion.div
                                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center gap-3"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Spinner size="2" />
                                <p className="text-sm text-slate-400">Detecting your location...</p>
                            </motion.div>
                        )}

                        {/* Location failed feedback */}
                        {locationStatus.status === "failed" && loading && (
                            <motion.div
                                className="bg-slate-900 border border-red-500/20 rounded-2xl p-6"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <p className="text-sm text-red-400">📍 Unable to detect your location. Please enable location access and try again.</p>
                            </motion.div>
                        )}

                        {/* Map — sticky on large screens so it stays visible while scrolling */}
                        {userLocation && (
                            <motion.div
                                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex-1"
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4, delay: 0.24 }}
                            >
                                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 px-6 py-4">
                                    Map view
                                </p>
                                <RoadConditionsMap
                                    conditions={conditions}
                                    accidents={deviations}
                                    userLat={userLocation.lat}
                                    userLong={userLocation.long}
                                />
                            </motion.div>
                        )}
                    </div>

                </div>
            </main>
        </div>
    );
};

export default ConditionsContainer;