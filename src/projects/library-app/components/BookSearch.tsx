import {Search} from "lucide-react";
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
}

const BookSearch = ({
                                       search,
                                       onSearchChange,
                                   }: BookSearchProps)=>  {
    return (
        <div className="flex flex-row gap-3 sm:flex-row sm:items-center">

            {/* Search input */}
            <InputGroup className="w-full rounded-lg border border-gray-800 bg-gray-900 py-2.5  pr-4 text-sm text-gray-100 placeholder-gray-700 outline-none transition-colors focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30">
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
    );
}

export default BookSearch;