import {SearchIcon} from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group.tsx"
import {Button} from "@/components/ui/button.tsx"
import { useState} from "react";
import type {WeatherInputProps} from "@/projects/weather-app/types/typesWeather.tsx";

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

    return (
        <>
            <header>
                <div className="container mx-auto flex content-center xl:w-1/2 lg:1/2 md:w-xl mt-4">
                   <div className="flex-1 mr-2">
                       <InputGroup>
                           <InputGroupInput
                               placeholder="Type to search..."
                               type="text"
                               value={searchValue}
                               ref={inputRef}
                              onChange={handleChange}
                           />
                           <InputGroupAddon align="inline-start" className="mr-2">
                               <SearchIcon size={18} />
                           </InputGroupAddon>
                       </InputGroup>
                   </div>
                    <div>
                        <Button
                            variant="outline"
                            className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white"
                            type="button"
                            onClick={handleSearch}
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default SearchField;