import Hamburger from 'hamburger-react'
import {type ElementType,  useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router";
import {
    ButtonGroup,
} from "@/components/ui/button-group"
import {Button} from "@radix-ui/themes";

export const NavMobile = ({ routes }: { routes: Array<{title: string, path: string, Icon: ElementType}> }) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);


    return (
        <div ref={ref} className="lg:hidden mt-2 lg:ml-4 ml-6">
            <ButtonGroup onClick={() => setOpen((prev) => !prev)} className="px-2 bg-gray-100 hover:bg-gray-300 text-gray-900 rounded-md cursor-pointer">
                <Button><Hamburger direction="right" toggled={isOpen} size={20} rounded /></Button>
                <Button><div className="content-center font-semibold mx-2">{isOpen ? "Close" : "Menu"}</div></Button>
            </ButtonGroup>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed lg:left-13 left-0 shadow-3xl lg:right-13 right-0 top-[4rem] p-5 lg:pt-4 pt-2 bg-gray-900 border-b-gray-700/40">
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
                                        className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-gray-800 via-gray-900 to-gray-800 over:from-blue-600 hover:via-orange-500 hover:to-orange-400 active:from-blue-600 active:via-orange-500 active:to-orange-400 transition-all duration-300"
                                        key={route.title}>
                                        <Link
                                            onClick={() => setOpen((prev) => !prev)}
                                            className="flex items-center justify-between w-full p-5 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-100 transition-colors duration-300"
                                            to={route.path}>
                                            <span className="flex gap-1 lg:text-sm" >{route.title}</span>
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