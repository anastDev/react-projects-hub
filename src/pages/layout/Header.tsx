import {User} from "lucide-react";
import {Button} from "../../components/ui/button";

const Header = () => {
    return (
        <>
            <header className="bg-gray-400 w-full h-14 position fixed top-0">
               <div className="flex flex-row justify-end space-x-4 mx-2">
                   <div className="flex flex-row mt-3 space-x-4">
                       <Button size="sm" variant="outline">Projects</Button>
                       <Button size="sm" variant="outline">About Me</Button>
                   </div>
                   <div className="flex flex-row mt-4 space-x-2">
                       <div className=""><User size={24} className="text-white"/></div>
                       {/*<div className=""><Menu size={24} className="text-white"/></div>*/}
                   </div>
               </div>
            </header>
        </>
    )
}

export default Header;