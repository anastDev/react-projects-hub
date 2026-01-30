import {SearchIcon} from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group.tsx"
import {Button} from "@/components/ui/button.tsx"
import { useState} from "react";
import type {WeatherInputProps} from "@/projects/weather-app/types/typesWeather.tsx";
import {useNavigate} from "react-router";

const CenterSearchField = ({inputRef, onSearch} : WeatherInputProps) => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }

    const handleSearch = () => {
        if (searchValue.trim() !== "") {
        console.log(">>>Search Value>>>", searchValue);
        onSearch(searchValue.trim());
        setSearchValue("");
        }
    }

    return (
        <>
            <div className="bg-sky-50 h-screen flex flex-col items-center justify-center">
                <div className="text-xl text-slate-700">Search a city to see the forecast</div>
                <div className="container mx-auto flex content-center xl:w-1/2 lg:1/2 md:w-xl mt-6">
                    <div className="flex-1 mr-2">
                        <InputGroup>
                            <InputGroupInput
                                placeholder="Type to search..."
                                type="text"
                                value={searchValue}
                                ref={inputRef}
                                onChange={handleChange}
                                className="bg-white border border-slate-200 text-gray-700 placeholder:text-slate-400 focus:ring-sky-400"
                            />
                            <InputGroupAddon align="inline-start">
                                <SearchIcon size={18} className="text-sky-500 mr-2"/>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>
                    <div>
                        <Button
                            variant="outline"
                            className="bg-sky-500 text-white hover:bg-sky-600 border-sky-500"
                            type="button"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </div>
                </div>
                <div className="mt-10">
                    <Button
                        variant="ghost"
                        onClick={()=> navigate("/projects")}
                        className="bg-sky-600 hover:bg-sky-800 text-gray-100 hover:text-gray-300"
                    > Go Back to Projects
                    </Button>
                </div>
            </div>
        </>
    )
}

export default CenterSearchField;