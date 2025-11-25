import {SearchIcon} from "lucide-react";
import {InputGroup, InputGroupAddon, InputGroupInput} from "@/components/ui/input-group.tsx";

const TextFieldSearchMovie = () => {
    return (
        <>
            <header>
                <div className="container w-1/2 mx-auto mt-4">
                    <InputGroup className="bg-indigo-200">
                        <InputGroupInput placeholder="Search movie..." />
                        <InputGroupAddon>
                            <SearchIcon className="color-black" />
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </header>
        </>
    )
}

export default TextFieldSearchMovie;