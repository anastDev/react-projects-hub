import {NavDesktop} from "@/components/layout/header/components/NavDesktop.tsx";
import {NavMobile} from "@/components/layout/header/components/NavMobile.tsx";
import {staticRoutes} from "@/components/layout/header/staticRoutes.ts";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 pt-2 h-16 pb-2  backdrop-blur-sm">
            <div className="container mx-auto h-full px-6 lg:px-[1.6rem] flex items-center justify-center">
                <nav>
                    <NavDesktop routes={staticRoutes} />
                    <NavMobile routes={staticRoutes} />
                </nav>
            </div>
        </header>
    );
};

export default Header;