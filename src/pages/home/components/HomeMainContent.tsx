import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";
import {projectData} from "@/pages/projects/data/projects.ts";
import {motion, useTransform, useScroll} from "framer-motion";
import {ShaderGradient, ShaderGradientCanvas} from "@shadergradient/react";
import {JourneyRoad} from "@/pages/home/components/JourneyRoad.tsx";
import FlipProjectCard from "@/pages/projects/components/FlipProjectCard.tsx";
import {stagger} from "motion";
import {TechnicalSkillsSection} from "@/pages/home/components/TechnicalSkillsSection.tsx";
import {ArrowDownRight} from "lucide-react";

export const HomeMainContent = () => {
    const { scrollY } = useScroll();
    const heroY = useTransform(scrollY, [0, 300], [0, 150]);
    const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

    const mainProjects = projectData.filter((p) => p.category === "main");

    return (
        <>
            <div className="relative">

                <ShaderGradientCanvas
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "80vh",
                        zIndex: 0,
                    }}
                >
                    <ShaderGradient
                        control="query"
                        urlString="https://shadergradient.co/customize?animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.81&cPolarAngle=80&cameraZoom=9.1&color1=%236b7280&color2=%23f97316&color3=%23111827&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.2&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=0.5&uTime=8&wireframe=false"
                    />
                </ShaderGradientCanvas>

                <main className="flex-grow w-full pt-32 relative z-10">

                    {/* Hero Section */}
                    <motion.section
                        className="relative min-h-[75vh] flex flex-col justify-between pt-15"
                        style={{ y: heroY, opacity: heroOpacity }}
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-gray-900/40 pointer-events-none z-10" />

                        <div className="lg:px-[1.5rem] px-6 relative z-20">
                            <div className="container mx-auto pt-12">
                                <div className="flex flex-col justify-start max-w-2xl">
                                    <span className="font-mono text-xs text-orange-400 tracking-[0.15em] uppercase mb-4 flex items-center gap-3">
                                        Hi, I'm Anastasia
                                    </span>
                                    <h1
                                        className="text-gray-100 font-medium text-left mb-4 text-4xl sm:text-5xl lg:text-6xl leading-[1.1] tracking-tight"
                                        style={{ fontFamily: "'DM Serif Display', serif" }}
                                    >
                                        Turning ideas into{" "}
                                        <em className="text-orange-400 not-italic font-medium">
                                            clean, working systems.
                                        </em>
                                    </h1>

                                    <p className="text-sm md:text-base text-gray-300 text-left mt-2 max-w-xl leading-relaxed">
                                        Full-stack developer building reliable, scalable applications with Java and Spring Boot on the backend, and React and TypeScript on the frontend, focused on clean architecture, APIs and smooth user experiences.
                                    </p>

                                    {/* CTA Button */}
                                    <div className="flex items-center gap-3 mt-6">
                                        <Button
                                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                                            className="cursor-pointer rounded-lg bg-orange-500 px-4 py-2 text-sm font-medium text-gray-900 transition-transform hover:-translate-y-0.5 hover:bg-orange-400"
                                        >
                                            View Projects
                                            <ArrowDownRight />
                                        </Button>
                                        <Link to="/about">
                                            <Button
                                                variant="outline"
                                                className="cursor-pointer rounded-lg border border-gray-200 bg-white/5 px-4 py-2 text-sm font-medium text-gray-200 transition-transform hover:-translate-y-0.5 hover:bg-transparent hover:text-orange-400 hover:border-orange-500"
                                            >
                                                About Me
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* JourneyRoad  */}
                    <JourneyRoad />

                    <motion.section
                        id="projects"
                        className="bg-gray-900/90"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeIn" }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="mb-10 h-full px-6 pt-12 lg:px-[1.6rem] lg:pt-20">
                            <div className="container mx-auto">
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <span className="font-mono text-xs text-orange-400 tracking-[0.15em] uppercase mb-2 block">
                                            Projects
                                        </span>
                                        <h2 className="text-lg font-medium text-gray-100 lg:text-xl">
                                            What I've been building
                                        </h2>
                                    </div>
                                    <div className="flex justify-end">
                                        <Link to="/projects">
                                            <Button
                                                variant="outline"
                                                className="cursor-pointer rounded-lg border border-orange-500 bg-orange-500/10 px-3 py-1.5 font-medium text-orange-400 backdrop-blur-sm transition-colors hover:bg-orange-500 hover:text-gray-900 sm:text-sm"
                                            >
                                                View All
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                <motion.div
                                    className="mb-6 lg:mb-8"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut", delay: 0.15 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="h-[24rem] sm:h-[22rem]">
                                        <FlipProjectCard
                                            {...mainProjects[0]}
                                            isFeatured={true}
                                            gridArea="h-full"
                                        />
                                    </div>
                                </motion.div>

                                <motion.div
                                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8"
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={{
                                        visible: {
                                            transition: {
                                                delay: 0.3,
                                                delayChildren: stagger(0.15),
                                            },
                                        },
                                    }}
                                >
                                    {mainProjects.slice(1, 4).map((project, index) => (
                                        <motion.div
                                            key={index}
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.5, ease: "easeInOut" },
                                                },
                                            }}
                                            className="h-[23rem] lg:h-[21rem]"
                                        >
                                            <FlipProjectCard {...project} gridArea="h-full" />
                                        </motion.div>
                                    ))}

                                    {mainProjects[5] && (
                                        <motion.div
                                            variants={{
                                                hidden: { opacity: 0, y: 30 },
                                                visible: {
                                                    opacity: 1,
                                                    y: 0,
                                                    transition: { duration: 0.5, ease: "easeInOut" },
                                                },
                                            }}
                                            className="h-[23rem] lg:h-[21rem] lg:hidden"
                                        >
                                            <FlipProjectCard {...mainProjects[5]} gridArea="h-full" />
                                        </motion.div>
                                    )}
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    <div className="bg-gray-900 py-8 lg:py-15">
                        <div className="w-24 my-10 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto" />
                    </div>

                    <TechnicalSkillsSection />

                    <div className="bg-gray-900 py-8 lg:py-15 mt-10">
                        <div className="w-24 mt-6 mb-10 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto" />
                    </div>
                </main>
            </div>
        </>
    )
}
