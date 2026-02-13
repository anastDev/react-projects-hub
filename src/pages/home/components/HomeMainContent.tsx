import ProjectCard from "@/pages/projects/components/ProjectCard.tsx";
import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";
import {ArrowDown, ArrowRight} from "lucide-react";
import {projectData} from "@/pages/projects/data/projects.ts";
import {ReactTyped} from "react-typed";
import {motion, useTransform, useScroll} from "framer-motion";

export const HomeMainContent = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 500], [0, 150]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);


    return (
        <>
            <main className="flex-grow w-full bg-gray-900 pt-60">

                {/* Hero Section/ Intro */}
                <motion.section
                    className="min-h-screen"
                    style={{ y: heroY, opacity: heroOpacity }}
                >
                    <div className="lg:px-[1.5rem] px-6">
                        <div className="container mx-auto">
                            <div className="flex flex-col justify-center">
                                <h1 className="text-gray-100 font-medium text-center text-4xl lg:text-6xl">Hi, I'm {" "}
                                    <span className="text-orange-400">
                                        <ReactTyped
                                            strings={["Anastasia"]}
                                            typeSpeed={100}
                                            backSpeed={20}
                                            loop={true}
                                        />
                                    </span>
                                </h1>
                                <p className="text-lg md:text-xl lg:text-2xl text-center text-gray-400 mt-2">
                                    A <span className="font-medium">Full Stack Developer</span> building one component at a time
                                </p>
                                <p className="text-sm md:text-base text-gray-500 mx-auto text-center mt-4">
                                    Specializing in React & TypeScript. Getting random ideas, testing them with small projects
                                    and gradually stacking knowledge like books on a shelf.
                                </p>
                            </div>
                            <div className="flex flex-col justify-center mt-30 lg:mt-50 space-y-4">
                                <div className="flex justify-center text-gray-500">
                                    scroll down
                                </div>
                                <div className="flex justify-center animate-bounce mt-5">
                                    <ArrowDown size={32} className="rounded-full text-gray-400 border border-gray-400" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/*  Bridge Section - What this site is */}
                <motion.section
                    className="py-24 border-y border-gray-700/50"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="container mx-auto px-6 max-w-3xl">
                        <div className="space-y-4 text-center">
                            <div className="py-15">
                                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
                            </div>
                            <p className="text-lg lg:text-2xl text-gray-100 font-light leading-relaxed">
                                This website is a collection of small projects I've built
                                while learning and exploring React and modern web development.
                            </p>
                            <Link to="/about">
                                <Button className="group mt-4 border-2 border-orange-500 text-orange-400 bg-transparent hover:bg-orange-500 active:bg-orange-500 hover:text-gray-900 active:text-gray-900 transition-colors duration-300 cursor-pointer text-sm lg:text-base">
                                    Learn more about my journey
                                    <ArrowRight className="ml-2 group-hover:translate-x-1 active:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </motion.section>

                {/* Mini Preview of projects */}
                <motion.section
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ amount: 0.3 }}
                >
                    <div className="px-6 lg:px-[1.6rem] h-full mt-12 lg:mt-20 mb-10">
                        <div className="container mx-auto">
                            <div className="grid grid-cols-2 items-center mb-6">
                                <div>
                                    <h2 className="text-lg lg:text-xl font-medium text-gray-100">Projects</h2>
                                </div>
                                <div className="flex justify-end">
                                    <Link
                                        to="/projects"
                                    >
                                        <Button variant="outline"
                                                className="border-2 border-orange-500 text-orange-400 bg-gray-800 hover:bg-orange-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 transition-colors duration-300 text-sm lg:text-base"
                                        >More
                                        </Button>
                                    </Link>
                                </div>
                            </div>

                            {/* Container of Project Cards - Mini Previews */}
                            <motion.div
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 py-4"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{
                                    visible: {
                                        transition: {
                                            delay: 0.15
                                        }
                                    }
                                }}
                            >
                                {projectData.slice(0,3).map((project, index) => {
                                    return (
                                        <motion.div
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.5, ease: "easeInOut" }
                                                }
                                            }}
                                        >
                                            <ProjectCard {...project}/>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                        </div>
                    </div>
                </motion.section>

                <div className="py-8 lg:py-15">
                    <div className="w-24 my-10 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
                </div>

                {/* Tech Stack Section */}
                <motion.section
                    className="py-12 lg:py-20 container mx-auto px-6"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <div className="container mx-auto max-w-4xl">
                        <h2 className="text-xl font-semibold text-gray-100 mb-10">Technical Skills</h2>

                        <motion.div
                            className="grid lg:grid-cols-2 gap-6 lg:gap-8"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                visible: {
                                    transition: {
                                        delay: 0.2
                                    }
                                }
                            }}
                        >
                            {/* Frontend */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <h3 className="text-orange-400 font-medium mb-4 text-base lg:text-lg">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg hover:border-orange-400 active:border-orange-400 transition-colors text-sm">
                        React
                    </span>
                                    <span className="px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg hover:border-orange-400 active:border-orange-400 transition-colors text-sm">
                        TypeScript
                    </span>
                                </div>
                            </motion.div>

                            {/* Backend */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                <h3 className="text-orange-400 font-medium mb-4">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Node.js", "MongoDB", "REST APIs", "JWT Auth"].map(tech => (
                                        <span key={tech} className="px-3 py-2 bg-gray-800 text-gray-300 border border-gray-700 rounded-lg hover:border-orange-400 transition-colors text-sm">
                            {tech}
                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.section>

                <div className="py-8 lg:py-15">
                    <div className="w-24 mt-6 mb-10 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
                </div>
            </main>
        </>
    )
}