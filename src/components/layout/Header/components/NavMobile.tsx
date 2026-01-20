import Hamburger from 'hamburger-react'
import {useRef, useState} from "react";
import {routes} from "@/components/layout/Header/routes.ts";
import {AnimatePresence, motion} from "framer-motion";
import {Link} from "react-router";

export const NavMobile = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div ref={ref} className="lg:hidden">
            <Hamburger direction="left" toggled={isOpen} size={22} rounded toggle={setOpen} />
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed left-0 shadow-3xl right-0 top-[3.5rem] p-5 pt-2 bg-neutral-300 border-b border-b-black/10">
                        <ul className="grid gap-2">
                            {routes.map((route, idx) => {
                                const {Icon} = route;
                                return (
                                    <>
                                        <motion.li
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                type: "spring",
                                                stiffness: 260,
                                                damping: 20,
                                                delay: 0.1 + idx / 10,
                                            }}
                                            className="w-full p-[0.08rem] rounded-xl bg-gradient-to-tr from-neutral-600 via-neutral-800 to-neutral-700"
                                            key={route.title}>
                                            <Link
                                                onClick={() => setOpen((prev) => !prev)}
                                                className="flex items-center justify-between w-full p-5 rounded-xl bg-neutral-400"
                                                to={route.path}>
                                                <span className="flex gap-1 text-md" >{route.title}</span>
                                                <Icon className="text-xl"/>
                                            </Link>
                                        </motion.li>
                                    </>
                                )
                            })}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}