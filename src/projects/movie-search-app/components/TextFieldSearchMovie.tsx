import {SearchIcon} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";
import {Button} from "@/components/ui/button.tsx"

const TextFieldSearchMovie = () => {

    // TODO: Add focus to useEffect for the search field
    return (
        <>
            <header>
                <div className="md:container w-full mx-auto mt-4 flex flex-row space-x-2">
                   <div className="w-full flex-1">
                       <InputGroup className="bg-indigo-200">
                           <InputGroupInput placeholder="Search movie..." />
                           <InputGroupAddon>
                               <SearchIcon className="color-black" />
                           </InputGroupAddon>
                       </InputGroup>
                   </div>
                    <div>
                        <Button variant="outline">
                            Search
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default TextFieldSearchMovie;