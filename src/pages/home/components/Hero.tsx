import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, ChevronDown } from "lucide-react";
import {stagger} from "motion";

const STACK_WORDS = ["Node.js", "Python", "FastAPI", "React"] as const;
const ROTATE_MS = 2200;

const container: Variants = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: stagger( 0.12),
        }
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const blurIn: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
};

export const Hero = () => {
    const reduceMotion = useReducedMotion();
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        if (reduceMotion) return;

        const id = setInterval(
            () => setWordIndex((i) => (i + 1) % STACK_WORDS.length),
            ROTATE_MS
        );
        return () => clearInterval(id);
    }, [reduceMotion]);

    return (
        <section className="relative flex min-h-screen items-center px-6 py-24">
            <motion.div
                className="container mx-auto max-w-3xl text-center"
                variants={container}
                initial="hidden"
                animate="visible"
            >
                <motion.p
                    variants={fadeUp}
                    className="mb-5 text-sm text-gray-400 sm:text-base"
                >
                    Hi, I&apos;m Anastasia — a full-stack developer
                </motion.p>

                <motion.h1
                    variants={blurIn}
                    className="mb-8 tracking-tight text-gray-100"
                    style={{
                        fontFamily: "'DM Serif Display', serif",
                        fontSize: "clamp(2.25rem, 6.5vw, 4.25rem)",
                        lineHeight: 1.06,
                    }}
                >
                    Trained in translation.<br />
                    <span className="text-orange-300">Ended up in code.</span>
                </motion.h1>

                <motion.p
                    variants={fadeUp}
                    className="mb-8 text-base text-gray-400 sm:text-lg"
                >
                    Currently building with{" "}
                    <span className="relative inline-block h-[1.5em] w-[7ch] overflow-hidden text-left align-bottom text-orange-300">
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={STACK_WORDS[wordIndex]}
                            className="absolute inset-x-0 top-0"
                            initial={{ opacity: 0, y: "70%" }}
                            animate={{ opacity: 1, y: "0%" }}
                            exit={{ opacity: 0, y: "-70%" }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            {STACK_WORDS[wordIndex]}
                        </motion.span>
                    </AnimatePresence>
                </span>
                </motion.p>

                <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
                    <Link
                        to="/projects"
                        className="group rounded-full bg-orange-400 px-6 py-3 text-sm font-medium text-gray-900 transition-all hover:-translate-y-0.5 hover:bg-orange-300"
                    >
                        View Projects
                        <ArrowRight className="ml-1.5 inline h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link
                        to="/about"
                        className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-gray-200 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:text-orange-300"
                    >
                        About Me
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-600"
            >
                <motion.div
                    animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ChevronDown className="h-5 w-5" />
                </motion.div>
            </motion.div>
        </section>
    );
};