import {Link, useLocation} from "react-router";
import type {ElementType} from "react";

export const NavDesktop = ({ routes }: { routes: Array<{ title: string; path: string; Icon: ElementType }> }) => {
    const { pathname } = useLocation();

    return (
        <ul className="hidden lg:flex items-center bg-gray-900/60 border border-white/10 rounded-full px-1.5 py-1 gap-0.5 backdrop-blur-md">
            {routes.map(({ title, path, Icon }) => {
                const isActive = pathname === path;
                return (
                    <li key={title} className="relative">
                        <Link
                            to={path}
                            className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-[13px] transition-all duration-200 ${
                                isActive
                                    ? "text-orange-300"
                                    : "text-gray-400 hover:text-orange-300 hover:bg-orange-500/10"
                            }`}
                        >
                            <Icon className="w-3.5 h-3.5" />
                            {title}
                        </Link>

                        {/* Active dot indicator */}
                        {isActive && (
                            <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-orange-300" />
                        )}
                    </li>
                );
            })}
        </ul>
    );
};