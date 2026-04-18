import { Spinner} from "@radix-ui/themes";
import type {WeatherApiResponse} from "@/projects/commute-risk-dashboard/types/typesWeather.ts";
import {type RefObject, useState} from "react";
import type {CommuteType} from "@/projects/commute-risk-dashboard/types/typeRisk.ts";
import RiskDisplay from "@/projects/commute-risk-dashboard/components/RiskDisplay.tsx";
import {useNavigate} from "react-router";
import { motion } from 'framer-motion';
import calculateRisk from "@/projects/commute-risk-dashboard/utils/calculateRisk.ts";
import {ChevronLeft} from "lucide-react";
import {useRoadConditions} from "@/projects/commute-risk-dashboard/hooks/useRoadConditions.ts";
import RoadConditions from "@/projects/commute-risk-dashboard/components/RoadConditions.tsx";
import {Button} from "@/components/ui/button.tsx";

const WEATHER_ICON_API = import.meta.env.VITE_WEATHER_ICON_API;

interface WeatherContainerProps {
    weatherData: WeatherApiResponse | null;
    onSearch: (value: string) => void;
    inputRef: RefObject<HTMLInputElement | null>;
    city: string;
}

const commuteModes = [
    { value: "walking", label: "Walking", icon: "🚶" },
    { value: "bike",    label: "Cycling", icon: "🚴" },
    { value: "car",     label: "Car",     icon: "🚗" },
    { value: "bus",     label: "Commute", icon: "🚌" },
] as const;

const WeatherContainer = ({ weatherData, onSearch, inputRef, city }: WeatherContainerProps) => {
    const [commuteType, setCommuteType] = useState<CommuteType | "">("");
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();
    const {conditions, loading, error} = useRoadConditions(city);

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

    const risk = calculateRisk(weatherData, commuteType);

    const riskStyles: Record<string, { text: string; card: string }> = {
        Low:    { text: "text-emerald-400", card: "bg-emerald-500/8 border-emerald-500/20" },
        Medium: { text: "text-amber-400",   card: "bg-amber-500/8 border-amber-500/20"   },
        High:   { text: "text-red-400",     card: "bg-red-500/8 border-red-500/20"       },
    };
    const style = riskStyles[risk.level] ?? { text: "text-slate-400", card: "" };

    return (
        <div className="min-h-screen bg-slate-950 text-gray-100">
            {/* Sticky search header */}
            <header className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/60 px-4 py-3">
                <div className=" max-w-2xl lg:max-w-4xl mx-auto flex items-center gap-3 px-2">
                    <Button
                        onClick={() => navigate("/projects")}
                        className="flex items-center gap-1 text-slate-500 hover:text-gray-100 text-sm transition-colors cursor-pointer border border-slate-800 rounded-lg px-3 py-2 shrink-0"
                    >
                        <ChevronLeft/>
                        Projects
                    </Button>
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                        placeholder="Search another city..."
                        className="flex-1 bg-slate-900 border border-slate-700 text-gray-100 placeholder:text-slate-500 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-amber-500/50 transition-all"
                    />
                    <button
                        onClick={handleSearch}
                        className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold px-4 py-2 rounded-lg text-sm transition-all cursor-pointer shrink-0"
                    >
                        Search
                    </button>
                </div>
            </header>

            <main className="max-w-2xl lg:max-w-4xl mx-auto px-4 py-6 space-y-4">

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

                {/* Commute selector */}
                <motion.div
                    className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.08 }}
                >
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-4">
                        How are you commuting?
                    </p>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {commuteModes.map(({ value, label, icon }) => (
                            <button
                                key={value}
                                onClick={() => setCommuteType(value)}
                                className={`flex flex-col items-center gap-2 p-4 rounded-xl border text-sm font-medium transition-all cursor-pointer
                                    ${commuteType === value
                                    ? "bg-amber-500/10 border-amber-500/40 text-amber-400"
                                    : "bg-slate-800/40 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-slate-200"
                                }`}
                            >
                                <span className="text-2xl">{icon}</span>
                                {label}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {conditions.length > 0 && (
                    <motion.div
                        className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
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

                {/* Risk display */}
                {commuteType && risk.level && (
                    <RiskDisplay risk={risk} commute={commuteType} riskTextClass={style.text} riskCardClass={style.card} />
                )}
            </main>
        </div>
    );
};

export default WeatherContainer;