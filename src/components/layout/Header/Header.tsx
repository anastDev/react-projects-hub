import {NavDesktop} from "@/components/layout/Header/components/NavDesktop.tsx";
import {IoPerson} from "react-icons/io5";
import {NavMobile} from "@/components/layout/Header/components/NavMobile.tsx";


const Header = () => {
    return (
        <>
            <header className="border-b shadow-sm w-full h-14 fixed top-0 bg-white">
             <div className="grid grid-cols-2 container mx-auto">
                 <div className="flex flex-row gap-2 mt-4">
                    <div className="hover:text-neutral-400">
                        Login
                    </div>
                     <div>
                         <IoPerson size="22px"/>
                     </div>
                 </div>
                 <div className="flex flex-row justify-end mt-1">
                    <NavDesktop/>
                     <NavMobile/>
                 </div>
             </div>
            </header>
        </>
    )
}

export default Header;