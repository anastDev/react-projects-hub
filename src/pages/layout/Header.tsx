import {Menu} from "lucide-react";


const Header = () => {
    return (
        <>
            <header className="border-b shadow-sm w-full h-14 fixed top-0 bg-white">
             <div className="grid grid-cols-3 gap-4 mt-4 container mx-auto">
                 <div className="w-xs">
                     <Menu/>
                 </div>
                 <div className="flex flex-row space-x-4 flex-1 justify-center text-center">
                     <div>Projects</div>
                     <div>About Me</div>
                 </div>
                 <div className="flex flex-row justify-end space-x-2">
                     <div>GR</div>
                     <div>EN</div>
                 </div>
             </div>
            </header>
        </>
    )
}

export default Header;