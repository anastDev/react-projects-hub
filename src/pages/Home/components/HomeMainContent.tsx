import ProjectCard from "@/components/shared/ProjectCard.tsx";
import {Button} from "@/components/ui/button.tsx"
import {Link} from "react-router";
import {ArrowDown} from "lucide-react";
import {useRef} from "react";
import {projectData} from "@/pages/Projects/data/projects.ts";

export const HomeMainContent = () => {
    const projectsRef = useRef<HTMLDivElement | null>(null);

    const scrollToProjectSection = () => {
        projectsRef.current?.scrollIntoView({behavior: "smooth", block: "start"});
    }

    return (
        <>
            <main className="flex-grow w-full">

                {/* Hero Section/ Intro */}
                <div className="min-h-[65vh] pt-14 mt-16 px-[1.5rem]">
                    <div className="container mx-auto">
                        <div className="flex flex-col justify-center items-center space-y-4">
                            <h1 className="text-3xl md:text-4xl font-medium text-center mb-6">Welcome to my Projects Hub 👋</h1>
                            <p className="text-center max-w-3xl mx-auto">This website is a collection of small projects I’ve built while learning and exploring React and modern web development.
                                This page showcases small React projects built while learning modern web development. Each project explores a specific feature or idea, from CRUD actions to working with public APIs.
                            </p>
                        </div>
                        <div className="flex flex-col justify-center mt-16 space-y-4">
                            <div className="flex justify-center">
                                Scroll to find more
                            </div>
                            <div className="flex justify-center">
                                <ArrowDown onClick={scrollToProjectSection} size={32} className="rounded-full border border-black" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mini Preview of Projects */}
                <div className="min-h-[50vh] px-[1.6rem] pb-14"
                     ref={projectsRef}>
                    <div className="container mx-auto">

                        {/* Title of the page with the button for More */}
                        <div className="grid grid-cols-3 mb-6">
                            <div></div>
                           <div className="text-center">
                               <div className="p-2 text-lg font-medium">Projects</div>
                           </div>
                            <div className="flex justify-end">
                               <div>
                                   <Link
                                       to="/projects"
                                   >
                                       <Button variant="outline">More</Button>
                                   </Link>
                               </div>
                            </div>
                        </div>
                        {/* Container of Project Cards - Mini Previews */}
                        <div className="flex flex-row gap-8 py-4 overflow-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                            {projectData.map((project) => {
                                return (
                                    <div>
                                        <ProjectCard
                                            img={project.img}
                                            projectName={project.projectName}
                                            description={project.description}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="h-14"></div>
            </main>
        </>
    )
}