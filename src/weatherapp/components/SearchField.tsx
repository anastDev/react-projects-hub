import {SearchIcon} from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon, InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group.tsx"

const SearchField = () => {
    return (
        <>
            <header>
                <div className="container mx-auto w-full mt-4 lg:rt-r-position-sticky">
                    <InputGroup>
                        <InputGroupInput placeholder="Type to search..." />
                        <InputGroupAddon align="inline-start">
                            <SearchIcon size={18} />
                        </InputGroupAddon>
                        <InputGroupAddon align="inline-end">
                            <InputGroupButton variant="secondary">Search</InputGroupButton>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </header>
        </>
    )
}

export default SearchField;