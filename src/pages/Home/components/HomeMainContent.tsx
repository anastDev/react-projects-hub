import ProjectCard from "@/components/shared/ProjectCard.tsx";
import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";
import {ArrowDown} from "lucide-react";
import {useRef} from "react";

const HEADER_H = 56;
const FOOTER_H = 72;

export const HomeMainContent = () => {
    const projectsRef = useRef<HTMLDivElement | null>(null);

    const scrollToProjectSection = () => {
        projectsRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <>
            <main
                className="overflow-y-auto snap-y snap-mandatory"
                style={{
                    height: `calc(100vh - ${HEADER_H}px) - ${FOOTER_H}px`,
                }}
            >
                {/* Hero Section/ Intro */}
                <div className="h-[45vh] mt-38">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center items-center space-y-4">
                            <h1 className="text-2xl">Welcome to my Projects Hub 👋</h1>
                            <p className="text-center">This website is a collection of small projects I’ve built while learning and exploring React and modern web development.
                                Each project focuses on a specific idea, feature or concept and together they reflect how I approach building applications.</p>
                        </div>
                        <div className="flex flex-col justify-center mt-12 space-y-4">
                            <div className="flex justify-center">
                                Scroll to find more
                            </div>
                            <div className="flex justify-center">
                                <ArrowDown onClick={scrollToProjectSection} size="32px" className="rounded-full border border-black" />
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="border border-black my-10"/>

                {/* Mini Preview of Projects */}
                <div
                    className="h-[82vh]"
                    ref={projectsRef}
                >
                    <div className="container mx-auto space-y-4 flex flex-col">
                        {/* Title of the page with the button for More */}
                        <div className="flex flex-row justify-center relative">
                            <div className="">
                                <div className="p-2">Projects</div>
                            </div>
                            <div className="absolute right-0">
                                <Link
                                    to="/projects/projects-page"
                                >
                                    <Button variant="outline">More</Button>
                                </Link>
                            </div>
                        </div>
                        {/* Container of Project Cards - Mini Previews */}
                        <div className="flex flex-row gap-8 py-4 md:overflow-auto md:scroll-smooth md:[scrollbar-width:none] md:[&::-webkit-scrollbar]:hidden">
                            <div>
                                <ProjectCard
                                    img="../../public/doodle.jpg"
                                    projectName="Todo App Manager"
                                    description="lorem ipsum dolor sit amet"
                                />
                            </div>
                            <div>
                                <ProjectCard
                                    img="../../public/doodle.jpg"
                                    projectName="Todo App Manager"
                                    description="lorem ipsum dolor sit amet"
                                />
                            </div>
                            <div>
                                <ProjectCard
                                    img="../../public/doodle.jpg"
                                    projectName="Todo App Manager"
                                    description="lorem ipsum dolor sit amet"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}