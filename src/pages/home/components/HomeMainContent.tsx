import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";
import {ArrowDown} from "lucide-react";
import {projectData} from "@/pages/projects/data/projects.ts";
import {ReactTyped} from "react-typed";
import {motion, useTransform, useScroll} from "framer-motion";
import {ShaderGradient, ShaderGradientCanvas} from "@shadergradient/react";
import {JourneyRoad} from "@/pages/home/components/JourneyRoad.tsx";
import FlipProjectCard from "@/pages/projects/components/FlipProjectCard.tsx";
import {stagger} from "motion";
import {TechnicalSkillsSection} from "@/pages/home/components/TechnicalSkillsSection.tsx";

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
                        inset: '0',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "100vh",
                        zIndex: 0
                    }}
                    pointerEvents='none'>
                    <ShaderGradient
                        control="query"
                        urlString="https://shadergradient.co/customize?animate=on&axesHelper=off&brightness=1&cAzimuthAngle=180&cDistance=2.81&cPolarAngle=80&cameraZoom=9.1&color1=%236b7280&color2=%23f97316&color3=%23111827&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.2&rotationX=50&rotationY=0&rotationZ=-60&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.5&uFrequency=0&uSpeed=0.3&uStrength=0.5&uTime=8&wireframe=false"
                    />

                </ShaderGradientCanvas>

                <main className="flex-grow w-full pt-60 relative z-10">

                    {/* Hero Section/ Intro */}
                    <motion.section
                        className="h-full relative"
                        style={{ y: heroY, opacity: heroOpacity }}
                    >
                        <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-b from-transparent to-gray-900 pointer-events-none z-10" />

                        <div className="lg:px-[1.5rem] px-6 relative z-20" >
                            <div className="container mx-auto">
                                <div className="flex flex-col justify-center">
                                    <h1 className="text-gray-100 font-medium text-center mb-2 text-4xl lg:text-6xl">Hi, I'm Anastasia</h1>
                                    <p className="text-orange-400 text-center text-2xl">
                                        I'm {""}
                                        <span className="text-orange-400 text-center ">
                                    <ReactTyped
                                        strings={["a Junior Software Engineer.", "a Tech Explorer.", "always Learning, always Building."]}
                                        typeSpeed={80}
                                        backSpeed={40}
                                        loop={true}
                                        showCursor={false}
                                    />
                                    </span>
                                    </p>
                                    <p className="text-sm md:text-base text-gray-300 mx-auto text-center mt-2 max-w-2xl lg:max-w-4xl">
                                        Passionately building small projects to test ideas, learn and grow. I love exploring new tech and stacking knowledge like books on a shelf.
                                    </p>
                                </div>
                                <div className="flex flex-col justify-center mt-20 space-y-4">
                                    <div className="flex justify-center text-gray-300">
                                        scroll down
                                    </div>
                                    <div className="flex justify-center animate-pulse mb-28 cursor-pointer">
                                        <ArrowDown size={32} className="rounded-full text-gray-400 border border-gray-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <JourneyRoad/>

                    {/* Project Section */}
                    <motion.section
                        className="bg-gray-900"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeIn" }}
                        viewport={{ amount: 0.3 }}
                    >
                        <div className="mb-10 h-full px-6 pt-12 lg:px-[1.6rem] lg:pt-20">
                            <div className="container mx-auto">
                                <div className="mb-6 flex items-center justify-between">
                                    <div>
                                        <h2 className="text-lg font-medium text-gray-100 lg:text-xl">
                                            Projects
                                        </h2>
                                    </div>
                                    <div className="flex justify-end">

                                        {/* Button for Project Page */}
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

                                {/* Featured Project Card */}
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

                                {/* Grid Container with staggered animations */}
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
                                    {/* Remaining projects */}
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
                        <div className="w-24 my-10 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
                    </div>

                    {/* Tech Stack Section */}
                    <TechnicalSkillsSection/>

                    {/* Divider */}
                    <div className="bg-gray-900 py-8 lg:py-15 mt-10">
                        <div className="w-24 mt-6 mb-10 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
                    </div>
                </main>
            </div>
        </>
    )
}
