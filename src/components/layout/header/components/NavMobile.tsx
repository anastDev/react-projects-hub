import Hamburger from 'hamburger-react'
import {type ElementType,  useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router";
import {Button} from "@/components/ui/button";

export const NavMobile = ({ routes }: { routes: Array<{title: string, path: string, Icon: ElementType}> }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);


    return (
        <div ref={ref} className="lg:hidden mt-2 relative">
            <Button onClick={() => setOpen((prev) => !prev)} className="px-2 bg-gray-100 hover:bg-gray-300 text-gray-900 rounded-md cursor-pointer">
                <Hamburger direction="right" toggled={isOpen} size={20} rounded />
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 right-0 mx-auto container top-[4.5rem] shadow-xl p-3 pt-2 rounded-xl bg-transparent backdrop-blur-md z-50"
                    >
                        <ul className="grid gap-2">
                            {routes.map((route, idx) => {
                                const {Icon} = route;
                                return (
                                    <motion.li
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 260,
                                            damping: 20,
                                            delay: 0.1 + idx / 10,
                                        }}
                                        className="group w-full p-[0.08rem] rounded-xl border border-white/10 hover:border-orange-400/50 transition-all duration-300"
                                        key={route.title}>
                                        <Link
                                            onClick={() => setOpen((prev) => !prev)}
                                            className="flex items-center justify-between w-full p-5 rounded-xl bg-gray-800/60 hover:bg-orange-500/10 text-gray-300 hover:text-white transition-all duration-300"
                                            to={route.path}>
                                            <span className="flex gap-1 lg:text-sm" >{route.title}</span>
                                            <Icon className="text-lg text-orange-400/70 group-hover:text-orange-400 transition-colors duration-300"/>
                                        </Link>
                                    </motion.li>
                                )
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}