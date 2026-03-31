import MiniProjectCard from "@/pages/projects/components/MiniProjectCard.tsx";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {projectData} from "@/pages/projects/data/projects.ts";

export const ProjectMainContent = () => {
    return (
        <>
            <main className="min-h-screen w-full mx-auto pt-10 lg:px-4 px-6 overflow-auto">
                <div className="container mx-auto">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-gray-400 hover:text-orange-400">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator className="text-gray-400" />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-gray-400">My Projects</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
                <div className="container mx-auto pt-10">
                    <div className="flex flex-col justify-center items-center">
                        <div className="lg:w-4xl w-full mb-10 text-gray-400 text-sm text-center">
                            Projects built while learning to solve <span className="text-orange-400">real-world problems</span>.
                            Spanning web apps, data tools and backend systems — each project reflects a step in my
                            journey across <span className="text-orange-400">modern technologies</span>.
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 lg:auto-rows-fr">
                        {/* Main projects */}
                        {projectData.filter(p => p.category === "main").map((project) => (
                            <MiniProjectCard key={project.projectName} {...project} />
                        ))}
                    </div>

                    {/* Separator */}
                    <div className="my-12 flex items-center gap-4">
                        <div className="flex-1 h-px bg-gray-700/50" />
                        <span className="text-gray-500 text-sm tracking-wider uppercase">Beyond the Main Stack</span>
                        <div className="flex-1 h-px bg-gray-700/50" />
                    </div>

                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 lg:auto-rows-fr">
                        {/* Other projects */}
                        {projectData.filter(p => p.category === "other").map((project) => (
                            <MiniProjectCard key={project.projectName} {...project} />
                        ))}
                    </div>

                    <div className="mt-20">
                        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent mx-auto"></div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProjectMainContent;