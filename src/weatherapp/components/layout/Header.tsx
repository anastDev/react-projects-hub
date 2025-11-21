import {SearchIcon} from 'lucide-react'
import {
    InputGroup,
    InputGroupAddon, InputGroupButton,
    InputGroupInput,
} from "@/components/ui/input-group"

const Header = () => {
    return (
        <>
            <header className="lg:container mt-2 mx-2">
                <InputGroup>
                    <InputGroupInput placeholder="Type to search..." />
                    <InputGroupAddon align="inline-start">
                        <SearchIcon size={18} />
                    </InputGroupAddon>
                    <InputGroupAddon align="inline-end">
                        <InputGroupButton variant="secondary">Search</InputGroupButton>
                    </InputGroupAddon>
                </InputGroup>
            </header>
        </>
    )
}

export default Header;