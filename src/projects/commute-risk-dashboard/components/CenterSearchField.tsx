import { useState} from "react";
import type {WeatherInputProps} from "@/projects/commute-risk-dashboard/types/typesWeather.ts";
import {useNavigate} from "react-router";
import {Button} from "@/components/ui/button.tsx";
import { motion } from 'framer-motion';
import {ChevronLeft} from "lucide-react";

const CenterSearchField = ({ inputRef, onSearch }: WeatherInputProps) => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchValue.trim()) {
            onSearch(searchValue.trim());
            setSearchValue("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") handleSearch();
    };

    return (
        <div className="min-h-screen bg-slate-950 flex flex-col  items-center justify-center px-6 relative overflow-hidden">

            <motion.div
                className="relative z-10 w-full max-w-xl text-center"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
            >
                <div className="inline-flex items-center gap-2 bg-amber-400/15 text-amber-400 text-shadow-amber-500 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 mb-8 rounded-full">
                    Commute Risk Dashboard
                </div>
                <h1 className="text-5xl lg:text-6xl font-black text-gray-100 leading-tight tracking-tight mb-4">
                    Know before <span className="text-amber-400">you go.</span>
                </h1>

                <p className="text-slate-400 text-base mb-10 leading-relaxed">
                    Real-time weather and road conditions for your commute.
                </p>

                <div className="flex gap-2">
                    <input
                        ref={inputRef}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Enter your city..."
                        className="flex-1 bg-slate-900 border border-slate-700 text-gray-100 placeholder:text-slate-500 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-amber-500/50 focus:ring-2 focus:ring-amber-500/15 transition-all"
                    />
                    <Button
                        onClick={handleSearch}
                        className="bg-amber-500 hover:bg-amber-400 active:scale-95 text-slate-950 font-bold py-6 rounded-lg text-sm transition-all cursor-pointer whitespace-nowrap"
                    >
                        Check Risk
                    </Button>
                </div>

                <Button
                    onClick={() => navigate("/projects")}
                    className="mt-8 text-slate-600 hover:text-gray-100 hover:border hover:border-amber-500 text-sm transition-colors cursor-pointer"
                >
                   <ChevronLeft/> Back to projects
                </Button>
            </motion.div>
        </div>
    );
};

export default CenterSearchField;