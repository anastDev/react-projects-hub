import {NavDesktop} from "@/components/layout/header/components/NavDesktop.tsx";
import {NavMobile} from "@/components/layout/header/components/NavMobile.tsx";
import {Link} from "react-router";
import {useAuth} from "@/hooks/useAuth.ts";
import {LoginAlertDialog} from "@/pages/auth/components/LoginAlertDialog.tsx";
import LogoutButton from "@/pages/auth/components/LogoutButton.tsx";
import {staticRoutes} from "@/components/layout/header/staticRoutes.ts";
import {IoPerson} from "react-icons/io5";


const Header = () => {
    const {isAuthenticated, userId} = useAuth();

    const routes = [
        ...staticRoutes,
        ...(isAuthenticated? [{
            title: "Profile",
            path: `/profile/:${userId}`,
            Icon: IoPerson
        }] : [])
    ];

    return (
        <>
            <header className="bg-trasparent border-gray-800 text-gray-100 w-full h-18 fixed top-0 z-50 pt-2">
                <div className="grid grid-cols-2 items-center container mx-auto h-14">
                    {/* Left Side: Navigation */}
                   <nav>
                       <div className="flex items-center justify-start">
                           <NavDesktop routes={routes}/>
                           <NavMobile routes={routes} />
                       </div>
                   </nav>
                    {/* Right Side: Auth Actions */}
                    <div className="flex items-center justify-end space-x-2 mt-2 ">
                        {!isAuthenticated && (
                            <>
                                <div className="flex space-x-2">
                                    <div className="hover:underline hover:text-orange-400 cursor-pointer">
                                        <Link to="/auth/register">Register</Link>
                                    </div>
                                    <div>/</div>
                                    <div>
                                        <LoginAlertDialog/>
                                    </div>
                                </div>
                            </>
                        )}
                        {isAuthenticated && (
                            <LogoutButton/>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header;