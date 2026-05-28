import {type ElementType, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link, useLocation} from "react-router";

export const NavMobile = ({ routes }: { routes: Array<{ title: string; path: string; Icon: ElementType }> }) => {
    const { pathname } = useLocation();
    const [tooltip, setTooltip] = useState<string | null>(null);

    return (
        <ul className="flex lg:hidden items-center bg-gray-900/90 border border-white/[0.08] rounded-full px-4 py-2 backdrop-blur-md">
            {routes.map(({ title, path, Icon }, index) => {
                const isActive = pathname === path;
                return (
                    <li key={title} className="flex items-center relative">

                        {/* Divider between items */}
                        {index > 0 && (
                            <span className="w-px h-4 bg-white/[0.07] mx-3 flex-shrink-0" />
                        )}
                        <Link
                            to={path}
                            onMouseEnter={() => setTooltip(title)}
                            onMouseLeave={() => setTooltip(null)}
                            className={`relative flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 ${
                                isActive
                                    ? "text-orange-400 bg-orange-500/12"
                                    : "text-gray-500 hover:text-orange-400 hover:bg-orange-500/10"
                            }`}
                        >
                            <Icon className="w-4 h-4" />
                            {/* Active dot */}
                            {isActive && (
                                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-[3px] h-[3px] rounded-full bg-orange-400" />
                            )}
                        </Link>

                        {/* Tooltip */}
                        <AnimatePresence>
                            {tooltip === title && (
                                <motion.span
                                    initial={{ opacity: 0, y: 4 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 4 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-800 border border-white/10 text-gray-300 text-[10px] px-2 py-1 rounded-md whitespace-nowrap pointer-events-none z-50"
                                >
                                    {title}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </li>
                );
            })}
        </ul>
    );
};