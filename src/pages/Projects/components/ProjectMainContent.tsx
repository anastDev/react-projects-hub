import MiniProjectCards from "@/pages/Projects/components/MiniProjectCards.tsx";
import {projectData} from "@/pages/Projects/data/projects.ts";

export const ProjectMainContent = () => {
    return (
        <>
            <main className="h-full w-full mx-auto mt-10 px-[1.5rem] pb-2 overflow-auto">
                <div className="">
                    <div className="flex justify-center">
                        <div className="w-4/5 p-1 mb-8 text-center opacity-50 text-sm">
                            This page showcases selected React projects, including a task manager with local storage and CRUD functionality, a movie search app using public APIs, and a weather app focused on real-time data handling and user experience.
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 space-y-6 lg:space-y-10">
                        {projectData.map((project) => {
                            return (
                                <MiniProjectCards
                                    projectName={project.projectName}
                                    description={project.description}
                                    path={project.path}
                                />
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectMainContent;