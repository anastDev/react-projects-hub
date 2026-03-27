import {SearchIcon} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {Button} from "@/components/ui/button.tsx"

interface SearchMovieProps {
    movieInput: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    reset: () => void;
}

const Search = ({movieInput, onchange, onSearch, reset}: SearchMovieProps) => {

    return (
        <>
            <header>
                <div className="md:container mx-auto py-4 flex flex-row space-x-2">
                   <div className="w-full flex-1">
                       <InputGroup className="bg-indigo-200">
                           <InputGroupInput placeholder="Search movie..." type="text" value={movieInput} onChange={onchange}/>
                           <InputGroupAddon>
                               <SearchIcon className="color-black" />
                           </InputGroupAddon>
                       </InputGroup>
                   </div>
                    <div className="flex flex-row space-x-2">
                        <div>
                            <Button variant="outline" onClick={onSearch}>
                                Search
                            </Button>
                        </div>
                        <div>
                            <Button variant="secondary" onClick={reset}>
                               Clear
                            </Button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Search;