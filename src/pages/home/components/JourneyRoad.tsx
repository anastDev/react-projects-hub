import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import {journey} from "@/pages/home/data/journeyData.ts";
import JourneyStop from "@/pages/home/components/JourneyStops.tsx";

export const JourneyRoad = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const dotTop = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
    const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.section
            ref={sectionRef}
            className="bg-gray-900 py-16 lg:py-24 relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="container mx-auto px-6 max-w-4xl">

                {/* Section intro */}
                <div className="text-center mb-16 lg:mb-20">
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto mb-8" />
                    <h2 className="text-2xl lg:text-3xl font-medium text-gray-100 mb-4">
                        How my software engineering journey started
                    </h2>
                    <p className="text-gray-400 text-sm lg:text-base max-w-2xl mx-auto">
                        Spoiler alert: It started with a translation degree and a lot of Google.
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 h-full bg-gray-700" />

                    <motion.div
                        className="absolute left-1/2 top-0 -translate-x-1/2 w-0.5 bg-orange-400"
                        style={{ height: lineHeight }}
                    />

                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 z-20"
                        style={{ top: dotTop }}
                    >
                        <div className="relative -translate-y-1/2">
                            <div className="absolute inset-0 w-5 h-5 rounded-full bg-orange-400/40 blur-md" />
                            <div className="relative w-5 h-5 rounded-full bg-orange-400 border-2 border-gray-900 shadow-lg shadow-orange-400/50" />
                        </div>
                    </motion.div>

                    {/* Milestone stops */}
                    <div className="relative space-y-20 lg:space-y-24">
                        {journey.map((stop, index) => (
                            <JourneyStop
                                key={index}
                                {...stop}
                                isLeft={index % 2 === 0}
                                index={index}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

