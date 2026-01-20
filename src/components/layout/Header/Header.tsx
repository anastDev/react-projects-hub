import {NavDesktop} from "@/components/layout/Header/components/NavDesktop.tsx";
import {NavMobile} from "@/components/layout/Header/components/NavMobile.tsx";
import {Link} from "react-router";


const Header = () => {
    return (
        <>
            <header className="border-b shadow-sm w-full h-14 fixed top-0 bg-white">
             <div className="grid grid-cols-2 container mx-auto">
                 <div className="mt-4">
                    <div className="hover:underline">
                        <Link to="/auth/register">Register</Link>
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