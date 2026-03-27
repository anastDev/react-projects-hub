import {ArrowLeftIcon, SearchIcon} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {Button} from "@/components/ui/button.tsx"
import {useNavigate} from "react-router";

interface SearchMovieProps {
    movieInput: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearch: () => void;
    reset: () => void;
}

const Search = ({movieInput, onchange, onSearch, reset}: SearchMovieProps) => {
    const navigate = useNavigate();

    return (
        <>
            <header className="flex flex-row space-x-2">
                <div className="md:container mx-auto py-4 flex flex-row space-x-2">
                    <Button variant="outline" size="icon" aria-label="Go Back" onClick={() => navigate("/projects")}>
                        <ArrowLeftIcon size={28}/>
                    </Button>
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
                            <Button variant="ghost" onClick={reset}>
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