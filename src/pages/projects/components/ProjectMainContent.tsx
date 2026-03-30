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
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <div className="lg:w-4xl w-full mb-10 text-gray-400 text-sm text-center">
                            Projects built while learning to solve <span className="text-orange-400">real-world problems</span>.
                            Each application helps me grow more comfortable with modern web technologies—from integrating
                            public APIs to building <span className="text-orange-400">secure backend systems</span>.
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 lg:auto-rows-fr">
                        {projectData.map((project) => {
                            return (
                                <MiniProjectCard {...project} />
                            );
                        })}
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