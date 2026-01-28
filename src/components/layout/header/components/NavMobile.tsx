import Hamburger from 'hamburger-react'
import {type ElementType,  useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router";

export const NavMobile = ({ routes }: { routes: Array<{title: string, path: string, Icon: ElementType}> }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);


    return (
        <div ref={ref} className="lg:hidden mt-1">
            <Hamburger direction="left" toggled={isOpen} size={22} rounded toggle={setOpen} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 shadow-3xl right-0 top-[3.5rem] p-5 pt-2 bg-gray-900 border-b-gray-700/40">
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
                                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-800 over:from-blue-600 hover:via-orange-500 hover:to-orange-400 transition-all duration-300"
                                        key={route.title}>
                                        <Link
                                            onClick={() => setOpen((prev) => !prev)}
                                            className="flex items-center justify-between w-full p-5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-100 transition-colors duration-300"
                                            to={route.path}>
                                            <span className="flex gap-1 text-md " >{route.title}</span>
                                            <Icon className="text-xl text-orange-400"/>
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