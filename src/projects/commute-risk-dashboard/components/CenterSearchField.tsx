import {Cloud, Coffee, SearchIcon, Umbrella} from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group.tsx"
import {Button} from "@/components/ui/button.tsx"
import { useState} from "react";
import type {WeatherInputProps} from "@/projects/commute-risk-dashboard/types/typesWeather.ts";
import {useNavigate} from "react-router";
import { motion } from 'framer-motion';

const CenterSearchField = ({inputRef, onSearch} : WeatherInputProps) => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = () => {
        if (searchValue.trim() !== "") {
        onSearch(searchValue.trim());
        setSearchValue("");
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    }

    return (
        <>
            <div className="bg-gradient-to-b from-sky-50 to-blue-100 min-h-screen flex flex-col items-center justify-center px-4 py-8">

                {/* Welcome Message */}
                <motion.div
                    className="text-center mb-8 max-w-4xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-3xl lg:text-5xl font-bold text-slate-800 mb-4">
                        Welcome to Commute Risk Dashboard
                    </h1>
                    <p className="text-base lg:text-xl text-slate-600 leading-relaxed">
                        Check the weather conditions before you step outside. Whether you're walking,
                        biking, or taking transit, know what to expect and plan your commute with confidence.
                    </p>
                </motion.div>

                <motion.div
                    className="flex gap-6 mb-8"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                >
                    <Cloud className="w-8 h-8 md:w-10 md:h-10 text-sky-400" />
                    <Umbrella className="w-8 h-8 md:w-10 md:h-10 text-blue-500" />
                    <Coffee className="w-8 h-8 md:w-10 md:h-10 text-amber-600" />
                </motion.div>

                {/* Search Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="w-full max-w-2xl"
                >
                    <div className="text-center mb-4">
                        <p className="text-lg lg:text-xl text-slate-700 font-medium">
                            Enter your city to get started
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full">
                        <div className="flex-1 w-full">
                            <InputGroup>
                                <InputGroupInput
                                    placeholder="Type your city name..."
                                    type="text"
                                    value={searchValue}
                                    ref={inputRef}
                                    onKeyDown={handleKeyDown}
                                    onChange={handleChange}
                                    className="bg-gray-50 border-sky-200 text-gray-700 placeholder:text-slate-400 focus:ring-sky-400 focus:border-sky-400 rounded-r-md overflow-hidden"
                                />
                                <InputGroupAddon align="inline-start" className="bg-gray-100">
                                    <SearchIcon size={28} className="text-sky-500 mx-2"/>
                                </InputGroupAddon>
                            </InputGroup>
                        </div>
                        <Button
                            variant="outline"
                            className="bg-sky-500 text-gray-100 hover:bg-sky-600 active:bg-sky-600 border-sky-500 px-8 py-3 text-base md:text-lg font-semibold w-full sm:w-auto cursor-pointer"
                            type="button"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </div>
                </motion.div>

                {/* Back Button */}
                <motion.div
                    className="mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                >
                    <Button
                        variant="ghost"
                        onClick={() => navigate("/projects")}
                        className="bg-sky-500 text-gray-100 hover:bg-sky-600 border-sky-500 px-8 py-3 text-base md:text-lg font-semibold w-full sm:w-auto cursor-pointer"
                    >
                        ← Back to Projects
                    </Button>
                </motion.div>
            </div>
        </>
    )
}

export default CenterSearchField;