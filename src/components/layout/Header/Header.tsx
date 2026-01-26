import {NavDesktop} from "@/components/layout/Header/components/NavDesktop.tsx";
import {NavMobile} from "@/components/layout/Header/components/NavMobile.tsx";
import {Link} from "react-router";
import {useAuth} from "@/hooks/useAuth.ts";
import {LoginAlertDialog} from "@/pages/Auth/components/LoginAlertDialog.tsx";
import LogoutButton from "@/pages/Auth/components/LogoutButton.tsx";


const Header = () => {
    const {isAuthenticated} = useAuth();

    return (
        <>
            <header className="border-b shadow-sm w-full h-14 fixed top-0 bg-white">
                <div className="grid grid-cols-2 container mx-auto">
                    <div className="flex flex-row space-x-2 mt-4">
                        {!isAuthenticated && (
                            <>
                                <div className="flex space-x-2">
                                    <div className="hover:underline cursor-pointer">
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
                            <div>
                              <LogoutButton/>
                            </div>
                        )}
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