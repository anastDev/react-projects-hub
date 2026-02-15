import {SearchIcon} from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group.tsx"
import {Button} from "@/components/ui/button.tsx"
import {useState} from "react";
import type {WeatherInputProps} from "@/projects/commute-risk-dashboard/types/typesWeather.tsx";

const SearchField = ({inputRef, onSearch} : WeatherInputProps) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
            <header className="bg-sky-50 border-b border-sky-200 py-4">
                <div className="container mx-auto max-w-2xl">
                    <div className="flex flex-col sm:flex-row items-center gap-3">

                        {/* Search Input */}
                        <div className="flex-1 w-full">
                            <InputGroup>
                                <InputGroupInput
                                    placeholder="Search another city..."
                                    type="text"
                                    value={searchValue}
                                    ref={inputRef}
                                    onKeyDown={handleKeyDown}
                                    onChange={handleChange}
                                    className="bg-gray-50 border-sky-200 text-gray-700 placeholder:text-slate-400 focus:ring-sky-400 focus:border-sky-400 rounded-r-md overflow-hidden"
                                />
                                <InputGroupAddon align="inline-start" className="bg-gray-100">
                                    <SearchIcon size={28} className="text-sky-500 mx-2" />
                                </InputGroupAddon>
                            </InputGroup>
                        </div>

                        {/* Search Button */}
                        <div className="w-full sm:w-auto">
                            <Button
                                variant="outline"
                                className="bg-sky-500 text-gray-100 hover:bg-sky-600 active:bg-sky-600 border-sky-500  transition-colors w-full sm:w-auto cursor-pointer"
                                type="button"
                                onClick={handleSearch}
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default SearchField;