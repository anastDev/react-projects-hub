import { useRef, useState, type ReactNode } from "react";
import { motion, useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";

export interface StickyItem {
    title: string;
    description: string;
    stack: string[];
    content: ReactNode;
    badge?: string;
    liveUrl?: string;
    githubRepo?: string;
}

interface Props {
    items: StickyItem[];
}

export const ProjectsStickyScroll = ({ items }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);
    const reduceMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(items.length - 1, Math.floor(latest * items.length));
        setActive((prev) => (prev === index ? prev : index));
    });

    return (
        <>
            {/* Mobile - Stacked cards */}
            <div className="space-y-12 lg:hidden">
                {items.map((item) => (
                    <motion.article
                        key={item.title}
                        className="overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur"
                        initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="aspect-video w-full overflow-hidden">
                            {item.content}
                        </div>

                        <div className="p-6">
                            {item.badge && (
                                <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-orange-400/15 px-3 py-1 font-mono text-xs text-orange-300">
                                    <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                    {item.badge}
                                </span>
                            )}

                            <h3
                                className="mb-2 text-xl text-gray-100"
                                style={{ fontFamily: "'DM Serif Display', serif" }}
                            >
                                {item.title}
                            </h3>

                            <p className="mb-4 text-sm leading-relaxed text-gray-400">
                                {item.description}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {item.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-gray-400"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* Desktop Panel */}
            <div ref={ref} className="relative hidden lg:block">
                <div className="grid grid-cols-2 gap-16">

                    <div className="py-[10vh]">
                        {items.map((item, i) => (
                            <div key={item.title} className="flex min-h-[70vh] flex-col justify-center">
                                <motion.div
                                    animate={{ opacity: active === i ? 1 : 0.35 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    {item.badge && (
                                        <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-orange-400/15 px-3 py-1 font-mono text-xs text-orange-300">
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                                            {item.badge}
                                        </span>
                                    )}

                                    <h3
                                        className="mb-3 text-3xl text-gray-100"
                                        style={{ fontFamily: "'DM Serif Display', serif" }}
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="mb-5 max-w-md text-base leading-relaxed text-gray-400">
                                        {item.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2">
                                        {item.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div>
                        <div className="sticky top-24 h-[60vh] overflow-hidden rounded-2xl border border-white/10 bg-gray-900/50 backdrop-blur">
                            {items.map((item, i) => (
                                <motion.div
                                    key={item.title}
                                    className="absolute inset-0"
                                    animate={{
                                        opacity: active === i ? 1 : 0,
                                        scale: active === i ? 1 : 0.97,
                                    }}
                                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    style={{ pointerEvents: active === i ? "auto" : "none" }}
                                >
                                    {item.content}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsStickyScroll;