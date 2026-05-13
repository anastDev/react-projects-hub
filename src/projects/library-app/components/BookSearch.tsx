import {Search, X} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {
    InputGroup, InputGroupAddon,
    InputGroupInput,
} from "@/components/ui/input-group"

interface BookSearchProps {
    search: string;
    genre?: string;
    genres?: string[];
    onSearchChange: (value: string) => void;
    onGenreChange?: (value: string) => void;
    clearSearch?: () => void;
}

const BookSearch = ({
                                       search,
                                       onSearchChange,
    clearSearch
                                   }: BookSearchProps)=>  {
    return (
        <div className="flex flex-row gap-2 sm:flex-row sm:items-center">

            {/* Search input */}
            <div className="flex-1">
                <InputGroup className="w-full rounded-lg placeholder-gray-400 border border-gray-800 bg-gray-900 text-sm text-gray-100 transition-colors hover:border-blue-600">
                    <InputGroupInput
                        type="search"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search by title, author or ISBN..."
                        aria-label="Search books"
                    />
                    <InputGroupAddon>
                        <Search />
                    </InputGroupAddon>
                </InputGroup>
            </div>
            <div>
                <Button className="rounded-lg border border-gray-800 bg-gray-900 text-sm text-gray-100 transition-colors hover:border-blue-600" onClick={clearSearch}>
                    <X />
                </Button>
            </div>
            </div>
    );
}

export default BookSearch;